const express = require("express");
const router = express.Router();
const Shop = require("../models/shop.model");
const authenticate = require("../middleware/authenticate");

// create a new customer for the shop
router.post("", authenticate, async (req, res) => {
  try {
    const customer = await Shop.create(req.body);
    return res.status(201).send(customer);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

// get shop by searching using number by query param

router.get("/search/", authenticate, async (req, res) => {
  const params = req.query;
  console.log(params);
  return res.status(200).send({ message: params });
});

// get every customers of a shop or search by name
router.get("/", authenticate, async (req, res) => {
  const params = req.query;

  try {
    const customers = await Shop.find({
      shopId: req.body.shopId,
    })
      .lean()
      .exec();
    // search by name
    if (params.name) {
      // console.log("params", params);
      // console.log(customers);
      let result = [];
      customers.forEach((el) => {
        let temp = el.name.slice(0, params.name.length).toLowerCase();
        if (temp == params.name.toLowerCase()) {
          result.push(el);
        }
      });
      return res.status(200).send(result);
    }
    // search by number
    else if (params.nbr) {
      let result = [];
      customers.forEach((el) => {
        let temp = el.mobile;
        if (temp.toString() == params.nbr) {
          result.push(el);
        }
      });
      console.log("result", result);
      if (res.length == 0) {
        return res.status(204).send({ result });
      }
      return res.status(200).send({ result });
    } else {
      return res.status(200).send(customers);
    }
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
