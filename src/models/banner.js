const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: String,
  image: String,
});

module.exports = mongoose.model("Banner", bannerSchema);
