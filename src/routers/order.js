const express = require('express');
const { createOrder, getOrders } = require('../controllers/order');



const router = express.Router();

router.post("/createOrder", createOrder);
router.get("/", getOrders);



// router.post("/createCategory", createCategory);
// router.get("/",getCategories)
// router.get("/:id",getCategory);
// router.delete("/:id",deleteCategory);
// router.patch("/:id",updateCategory);



module.exports = router;