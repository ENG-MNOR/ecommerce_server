const { model } = require("mongoose");
const Payment = require("../models/payments"); // Assuming the user model is in a folder named "models"

module.exports = {
    createPayment: async (req, res) => {
    try {
    const { name, desc, type } = req.body;

    const payment = await new Payment({ name, desc, type }).save();

    res.status(201).json({ status: "success", data: payment });
    } catch (error) {
      console.error(error); // Log the error for debugging
    res.status(500).json({ status: "fail", message: "Error payment user" });
    }
    },

    getPayments: async (req, res) => {
    try {
    const payments = await Payment.find();

    res.status(200).json({ status: "success", data: payments });
    } catch (error) {
      console.error(error); // Log the error for debugging
    res.status(500).json({ status: "fail", message: "Error fetching payments" });
    }
    },


    //get one user
    getPayment: async (req, res) => {
        try {
        const payment = await Payment.findById(req.params.id);
    
        res.status(200).json({ status: "success", data: payment });
        } catch (error) {
          console.error(error); // Log the error for debugging
        res.status(500).json({ status: "fail", message: "Error fetching payment" });
        }
        },

        //Delete User
        deletePayment: async (req, res) => {
            try {
              const { id } = req.params; // Access id from req.params
          
              // Validate id (optional)
          
              const payment = await Payment.findByIdAndDelete(id);
          
              if (!payment) {
                return res.status(404).json({ status: "fail", message: "Payment not found" });
              }
          
              res.status(200).json({ status: "success", message: "Payment deleted" });
            } catch (error) {
              console.error(error); // Log the error for debugging
              res.status(500).json({ status: "fail", message: "Error deleting Payment" }); // Consider more specific message
            }
          },
          

            //Update User
            updatePayment: async (req, res) => {
                try {
                  const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
              
                  res.status(200).json({ status: "success", data: payment });
                } catch (error) {
                  console.error(error); // Log the error for debugging
                  res.status(500).json({ status: "fail", message: "Error updating Payment" });
                }
              },
              
};

