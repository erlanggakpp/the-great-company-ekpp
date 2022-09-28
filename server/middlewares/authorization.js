const { User } = require("../models");

async function authorization(req, res, next) {
  try {
    const { userId } = req.params;
    const { id } = req.user;
    const targetUser = await User.findByPk(+userId);
    if (!targetUser) {
      throw { name: "profileNotFound" };
    }
    if (targetUser.id !== id) {
      throw { name: "unauthorizedUser" };
    }
    next();
  } catch (error) {
    next(error);
  }
}
async function authorizationEditProfile(req, res, next) {
  try {
    const { id } = req.user;
    const targetUser = await User.findByPk(+id);
    if (!targetUser) {
      throw { name: "profileNotFound" };
    }
    if (targetUser.id !== id) {
      throw { name: "unauthorizedUser" };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { authorization, authorizationEditProfile };
