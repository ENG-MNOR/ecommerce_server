const User = require("../models/user");
module.exports = {
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User({
        name: name,
        email: email,
        password: password,
      }).save();

      res.status(200).json({ status: "success", data: user });
    } catch (e) {
      res.status(401).json({ status: "fail", message: e.toString() });
    }
  },
  getUsers: async (req, res) => {
    try {
      const user = await User.findOne();

      res.status(200).json({ status: "success", data: user });
    } catch (e) {
      res.status(401).json({ status: "fail", message: e.toString() });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      res.status(200).json({ status: "success", data: user });
    } catch (e) {
      res.status(401).json({ status: "fail", message: e.toString() });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      res.status(200).json({ status: "success", data: "successfully deleted" });
    } catch (e) {
      res.status(401).json({ status: "fail", message: e.toString() });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.status(200).json({ status: "success", data: user });
    } catch (e) {
      res.status(401).json({ status: "fail", message: e.toString() });
    }
  },
};
