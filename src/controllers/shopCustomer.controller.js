const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const ShopCustomer = require("../models/shopCustomer.model");

// create a customer measurements
router.post("/", authenticate, async (req, res) => {
  try {
    const measurement = await ShopCustomer.create(req.body);
    return res.status(200).send({ measurement });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

// get a customer measurements
router.get("/:id", authenticate, async (req, res) => {
  try {
    const measurement = await ShopCustomer.findById({
      _id: req.params.id,
    });
    if (!measurement) {
      return res.status(400).send({ message: "data not found" });
    }
    return res.status(200).send({ measurement });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

// update a customer measurement
router.patch("/:id", authenticate, async (req, res) => {
  try {
    const measurement = await ShopCustomer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).send({ measurement });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

module.exports = router;
