const { model } = require("mongoose");
const Product = require("../models/product"); // Assuming the user model is in a folder named "models"

module.exports = {
    createProduct: async (req, res) => {
    try {
    const { name, desc,images, price,salePrice,units, catID } = req.body;

    const product = await new Product({ name, desc, images,price,salePrice,units, catID  }).save();

    res.status(201).json({ status: "success", data: product });
    } catch (error) {
      console.error(error); // Log the error for debugging
    res.status(500).json({ status: "fail", message: "Error occur Product creating" });
    }
    },

    getProducts: async (req, res) => {
    try {
    const product = await Product.find();

    res.status(200).json({ status: "success", data: product });
    } catch (error) {
      console.error(error); // Log the error for debugging
    res.status(500).json({ status: "fail", message: "Error fetching Products" });
    }
    },


    //get one user
    getProduct: async (req, res) => {
        try {
        const product = await Product.findById(req.params.id);
    
        res.status(200).json({ status: "success", data: product });
        } catch (error) {
          console.error(error); // Log the error for debugging
        res.status(500).json({ status: "fail", message: "Error fetching Product" });
        }
        },

        //Delete User
        deleteProduct: async (req, res) => {
            try {
              const { id } = req.params; // Access id from req.params
          
              // Validate id (optional)
          
              const product = await Product.findByIdAndDelete(id);
          
              if (!product) {
                return res.status(404).json({ status: "fail", message: "Product not found" });
              }
          
              res.status(200).json({ status: "success", message: "Product deleted" });
            } catch (error) {
              console.error(error); // Log the error for debugging
              res.status(500).json({ status: "fail", message: "Error deleting Product" }); // Consider more specific message
            }
          },
          

            //Update User
            updateProduct: async (req, res) => {
                try {
                  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
              
                  res.status(200).json({ status: "success", data: product });
                } catch (error) {
                  console.error(error); // Log the error for debugging
                  res.status(500).json({ status: "fail", message: "Error updating Product" });
                }
              },
              
};

