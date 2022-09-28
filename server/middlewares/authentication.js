const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "notLoggedIn" };
    }
    const payload = verifyToken(access_token);
    console.log(payload, "<<<<");
    const targetUser = await User.findByPk(+payload.id);
    if (!targetUser) {
      throw { name: "invalidEmailPassword" };
    }
    req.user = {
      id: targetUser.id,
      idNumber: targetUser.idNumber,
      email: targetUser.username,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
