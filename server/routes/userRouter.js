const UserController = require("../controllers/userController");

const router = require("express").Router();

router.get("/register", UserController.register);
module.exports = router;
