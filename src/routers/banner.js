const express = require('express');
const { createBanner, getBanners, getBanner, updateBanner, deleteBanner } = require('../controllers/banner');

const router = express.Router();

router.post("/createBanner", createBanner);
router.get("/", getBanners);
router.get("/:id", getBanner);
router.patch("/:id", updateBanner);
router.delete("/:id", deleteBanner);


module.exports = router;