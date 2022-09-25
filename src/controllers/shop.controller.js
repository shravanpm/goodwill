const express = require("express");
const router = express.Router();
// const Product = require("../models/product.model")
const ShopCustomer = require("../models/shopCustomer.model");
const authenticate = require("../middleware/authenticate");

// create a new customer for the shop
router.post("", authenticate, async (req, res) => {
  try {
    const customer = await ShopCustomer.create(req.body);
    return res.status(201).send(customer);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

// get every customers of a shop
router.get("", authenticate, async (req, res) => {
  try {
    const customers = await ShopCustomer.find({
      shopId: req.body.shopId,
    })
      .lean()
      .exec();
    return res.status(200).send(customers);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
