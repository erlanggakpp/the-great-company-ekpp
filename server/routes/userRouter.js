const UserController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");

const router = require("express").Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put(
  "/:userId",
  authentication,
  authorization,
  UserController.updateProfile
);
module.exports = router;
