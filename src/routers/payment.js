const express = require('express');
const { createPayment, getPayments, getPayment, deletePayment, updatePayment } = require('../controllers/payment');

const router = express.Router();

router.post("/",createPayment);
router.get("/",getPayments);
router.get("/:id",getPayment);
router.patch("/:id", updatePayment);
router.delete("/:id", deletePayment);

// router.post("/createCategory", createCategory);
// router.get("/",getCategories)
// router.get("/:id",getCategory);
// router.delete("/:id",deleteCategory);
// router.patch("/:id",updateCategory);



module.exports = router;