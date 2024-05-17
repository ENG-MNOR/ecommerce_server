const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  images: [String],
  price: { type: Number, required: true },
  salePrice: Number,
  salePriceDate: Date,
  isTrending: { type: Boolean, default: false },
  units: { type: Number, required: true },
  catID: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Product", productSchema);
