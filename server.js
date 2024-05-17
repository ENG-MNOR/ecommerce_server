const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const userRouter = require("./src/routers/user"); // Use environment variable or default to 3000
app.use(express.json());
app.use("/user", userRouter);

mongoose
  .connect(process.env.URL)
  .then(() => console.log("DB CONNECTED"))
  .catch(() => console.log("DB FAILED"));
app.listen(port, () => console.log(`Listening on port ${port}`));
