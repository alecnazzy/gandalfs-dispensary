const express = require("express");
const Products = require("../models/products");
const router = express.Router();

// GET ALL
router.get("/products/", async (req, res) => {
  try {
    const data = await Products.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ID
router.get("/products/:id/", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Products.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
