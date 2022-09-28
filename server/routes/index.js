const router = require("express").Router();

const UserRouter = require("./userRouter");
const CategoryRouter = require("./categoryRouter");
const BillRouter = require("./billRouter");
const PublicRouter = require("./publicRouter");

router.use("/users", UserRouter);
router.use("/public", PublicRouter);
router.use("/categories", CategoryRouter);
router.use("/bills", BillRouter);

module.exports = router;
