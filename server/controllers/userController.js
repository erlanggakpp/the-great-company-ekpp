const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const formatToString = require("../helpers/dateFormatter");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      console.log(req.baseUrl, req.originalUrl);

      let role = "";
      if (req.baseUrl === "/users") {
        role = "Admin";
      } else {
        role = "Visitor";
      }
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        password,
        idNumber,
        birthdate,
      } = req.body;
      if (!password) {
        throw { name: "emptyPassword" };
      }
      if (!birthdate) {
        throw { name: "emptyBirthdate" };
      }
      const createdUser = await User.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        idNumber,
        password: hashPassword(password),
        birthdate: formatToString(birthdate),
        role: role,
      });
      res.status(201).json({ message: "Succesfully created new user" });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "emptyEmail" };
      }
      if (!password) {
        throw { name: "emptyPassword" };
      }
      const targetUser = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!targetUser) {
        throw { name: "invalidEmailPassword" };
      }
      const isCorrect = comparePassword(password, targetUser.password);
      if (!isCorrect) {
        throw { name: "invalidEmailPassword" };
      }
      const payload = {
        id: targetUser.id,
        email: targetUser.email,
        idNumber: targetUser.idNumber,
      };
      const createdToken = createToken(payload);
      res.status(200).json({ access_token: createdToken });
    } catch (error) {
      next(error);
    }
  }
  static async updateProfile(req, res, next) {
    try {
      const { id } = req.user;

      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        password,
        idNumber,
        birthdate,
      } = req.body;
      if (!password) {
        throw { name: "emptyPassword" };
      }
      if (!birthdate) {
        throw { name: "emptyBirthdate" };
      }
      if (!email) {
        throw { name: "emptyEmail" };
      }
      if (!firstName) {
        throw { name: "emptyFName" };
      }
      if (!lastName) {
        throw { name: "emptyLName" };
      }
      if (!phoneNumber) {
        throw { name: "emptyPhoneNumber" };
      }
      if (!idNumber) {
        throw { name: "emptyidNumber" };
      }
      if (!address) {
        throw { name: "emptyAddress" };
      }
      const updatedUser = await User.update(
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          address,
          password: hashPassword(password),
          idNumber,
          birthdate: formatToString(birthdate),
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).json({ message: "Successfully edited profile" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
