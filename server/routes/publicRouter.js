const router = require("express").Router();
const UserController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");
const { authorizationEditProfile } = require("../middlewares/authorization");

router.post("/users/register", UserController.register);
router.post("/users/login", UserController.login);
router.put(
  "/users",
  authentication,
  authorizationEditProfile,
  UserController.updateProfile
);

module.exports = router;
