const router = require("express").Router();

const UserRouter = require("./userRouter");
const CategoryRouter = require("./categoryRouter");
const BillRouter = require("./billRouter");

router.get("/users", UserRouter);
router.get("/categories", CategoryRouter);
router.get("/bills", BillRouter);

module.exports = router;
