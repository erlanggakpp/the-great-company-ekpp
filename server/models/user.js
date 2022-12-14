"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Bill, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "First name cannot be empty",
          },
          notNull: {
            msg: "First name cannot be empty",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Last name cannot be empty",
          },
          notNull: {
            msg: "Last name cannot be empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password cannot be empty",
          },
          notNull: {
            msg: "Password cannot be empty",
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Phone number cannot be empty",
          },
          notNull: {
            msg: "Phone number cannot be empty",
          },
        },
      },
      idNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "ID Number already registered",
        },
        validate: {
          notEmpty: {
            msg: "ID number cannot be empty",
          },
          notNull: {
            msg: "ID number cannot be empty",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Address cannot be empty",
          },
          notNull: {
            msg: "Address cannot be empty",
          },
        },
      },
      birthdate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Birthdate cannot be empty",
          },
          notNull: {
            msg: "Birthdate cannot be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email already registered",
        },
        validate: {
          notEmpty: {
            msg: "Email cannot be empty",
          },
          notNull: {
            msg: "Email cannot be empty",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "User's role is required",
          },
          notNull: {
            msg: "User's role is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
