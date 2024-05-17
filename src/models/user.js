const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: {
    type: String,
    default:
      "https:craftsnippests.com/articles_images/placeholder/placeholder.jpg",
  },
});

module.exports = mongoose.model("User", userSchema);
