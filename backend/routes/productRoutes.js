const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Create a Product (Admin Only)
router.post("/", async (req, res) => {
  const { name, image, price, customizable, category } = req.body;
  const product = new Product({ name, image, price, customizable, category });
  await product.save();
  res.json(product);
});

module.exports = router;
