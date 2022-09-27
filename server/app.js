const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is listening to ${port}`);
});
