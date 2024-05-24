const express = require('express');

const { getProducts, createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/product');

const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/", getProducts)
router.get("/:id",getProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

// router.post("/createCategory", createCategory);
// router.get("/",getCategories)
// router.get("/:id",getCategory);
// router.delete("/:id",deleteCategory);
// router.patch("/:id",updateCategory);



module.exports = router;