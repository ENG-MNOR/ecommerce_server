const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: String,
  type: { type: String, required: true },
});

module.exports = mongoose.model("Payment", paymentSchema);
