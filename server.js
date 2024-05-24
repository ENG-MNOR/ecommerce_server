const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const userRouter = require("./src/routers/user"); // Use environment variable or default to 3000
const categoryRouter = require("./src/routers/category");
const paymentRouter = require("./src/routers/payment");
const bannerRouter = require("./src/routers/banner");
const productRouter = require("./src/routers/product");
const orderRouter = require("./src/routers/order");

app.use(express.json());
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/payment", paymentRouter);
app.use("/banner", bannerRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.use("/", (req, res) => {
  return res.status(404).json({
    status: "fail",
    message: "URL not found",
  });
});

mongoose
  .connect(process.env.URL)
  .then(() => console.log("DB CONNECTED"))
  .catch(() => console.log("DB FAILED"));
app.listen(port, () => console.log(`Listening on port ${port}`));
