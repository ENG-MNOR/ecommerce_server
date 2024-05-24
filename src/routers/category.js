const express = require('express');
const { getCategory, createCategory, getCategories, deleteCategory, updateCategory } = require('../controllers/category');
const router = express.Router();

router.post("/", createCategory);
router.get("/",getCategories)
router.get("/:id",getCategory);
router.delete("/:id",deleteCategory);
router.patch("/:id",updateCategory);



module.exports = router;