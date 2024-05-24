const { model } = require("mongoose");
const Order = require("../models/order"); // Assuming the user model is in a folder named "models"

module.exports = {
    createOrder: async (req, res) => {
    try {
    const { productId, catID, userID, paymentMethod, status, desc, quantity, total } = req.body;

    const order = await new Order({ productId, catID, userID, paymentMethod, status, desc, quantity, total }).save();

    res.status(201).json({ status: "success", data: order });
    } catch (error) {
      console.error(error); // Log the error for debugging
    res.status(500).json({ status: "fail", message: "Error occur CreateOrder" });
    }
    },

    getOrders: async (req, res) => {
    try {
    const order = await Order.find();

    res.status(200).json({ status: "success", data: order });
    } catch (error) {
      console.error(error); // Log the error for debugging
    res.status(500).json({ status: "fail", message: "Error fetching Orders" });
    }
    },


    //get one user
    getOrder: async (req, res) => {
        try {
        const order = await Order.findById(req.params.id);
    
        res.status(200).json({ status: "success", data: order });
        } catch (error) {
          console.error(error); // Log the error for debugging
        res.status(500).json({ status: "fail", message: "Error fetching Order" });
        }
        },

        //Delete User
        deleteOrder: async (req, res) => {
            try {
              const { id } = req.params; // Access id from req.params
          
              // Validate id (optional)
          
              const order = await Order.findByIdAndDelete(id);
          
              if (!order) {
                return res.status(404).json({ status: "fail", message: "Order not found" });
              }
          
              res.status(200).json({ status: "success", message: "Order deleted" });
            } catch (error) {
              console.error(error); // Log the error for debugging
              res.status(500).json({ status: "fail", message: "Error deleting Order" }); // Consider more specific message
            }
          },
          

            //Update User
            updateOrder: async (req, res) => {
                try {
                  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
              
                  res.status(200).json({ status: "success", data: order });
                } catch (error) {
                  console.error(error); // Log the error for debugging
                  res.status(500).json({ status: "fail", message: "Error updating Order" });
                }
              },
              
};

