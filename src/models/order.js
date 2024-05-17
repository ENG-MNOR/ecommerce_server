const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  catID: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  paymentMethod: { type: String, required: true },
  status: { type: String, required: true },
  desc: String,
  quantity: { type: Number, required: true },
  total: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
