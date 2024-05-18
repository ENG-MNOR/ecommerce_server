const {  Schema,model } = require("mongoose");
const Category = require("../models/category"); // Assuming the user model is in a folder named "models"

module.exports = {
  createCategory: async (req, res) => {
    
    try {
      const { name, desc } = req.body;

      const category = await new Category({ name, desc }).save();

      res.status(201).json({ status: "success", data: category });
    
    } catch (error) {
      console.error(error); // Log the error for debugging
      res
        .status(500)
        .json({ status: "fail", message: "Error creating category", desc: error });
    }
  },

  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();

      res.status(200).json({ status: "success", data: categories });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res
        .status(500)
        .json({ status: "fail", message: "Error fetching categories" , desc: error});
    }
  },

  //get one user
  getCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);

      res.status(200).json({ status: "success", data: category });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res
        .status(500)
        .json({ status: "fail", message: "Error fetching category" });
    }
  },

  //Delete User
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params; // Access id from req.params

      // Validate id (optional)

      const category = await Category.findByIdAndDelete(id);

      if (!category) {
        return res
          .status(404)
          .json({ status: "fail", message: "Category not found" });
      }

      res.status(200).json({ status: "success", message: "Category deleted" });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res
        .status(500)
        .json({ status: "fail", message: "Error deleting Category" }); // Consider more specific message
    }
  },

  //Update User
  updateCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      res.status(200).json({ status: "success", data: category });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res
        .status(500)
        .json({ status: "fail", message: "Error updating Category" });
    }
  },
};
