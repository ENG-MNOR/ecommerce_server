const {  Schema,model } = require("mongoose");
const Banner = require("../models/banner"); // Assuming the user model is in a folder named "models"

module.exports = {
  createBanner: async (req, res) => {
    
    try {
      const { name, desc } = req.body;

      const banner = await new Banner({ name, desc }).save();

      res.status(201).json({ status: "success", data: banner });
    
    } catch (error) {
      console.error(error); // Log the error for debugging
      res
        .status(500)
        .json({ status: "fail", message: "Error creating Banner", desc: error });
    }
  },

  getBanners: async (req, res) => {
    try {
      const banner = await Banner.find();

      res.status(200).json({ status: "success", data: banner });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res
        .status(500)
        .json({ status: "fail", message: "Error fetching Banner" , desc: error});
    }
  },

  //get one user
  getBanner: async (req, res) => {
    try {
      const banner = await Banner.findById(req.params.id);

      res.status(200).json({ status: "success", data: banner });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res
        .status(500)
        .json({ status: "fail", message: "Error fetching Banner" });
    }
  },

  //Delete User
  deleteBanner: async (req, res) => {
    try {
      const { id } = req.params; // Access id from req.params

      // Validate id (optional)

      const banner = await Banner.findByIdAndDelete(id);

      if (!banner) {
        return res
          .status(404)
          .json({ status: "fail", message: "Banner not found" });
      }

      res.status(200).json({ status: "success", message: "Banner deleted" });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res
        .status(500)
        .json({ status: "fail", message: "Error deleting Banner" }); // Consider more specific message
    }
  },

  //Update User
  updateBanner: async (req, res) => {
    try {
      const banner = await Banner.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      res.status(200).json({ status: "success", data: banner });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res
        .status(500)
        .json({ status: "fail", message: "Error updating Banner" });
    }
  },
};
