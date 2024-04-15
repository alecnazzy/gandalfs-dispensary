const express = require("express");
const Products = require("../models/products");
const router = express.Router();

const apiKey = process.env.API_KEY;

// GET ALL
router.get("/products/" + apiKey, async (req, res) => {
  try {
    const data = await Products.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ID
router.get("/products/:id/" + apiKey, async (req, res) => {
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
