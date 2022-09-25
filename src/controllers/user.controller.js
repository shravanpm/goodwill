const express = require("express");
const Admin = require("../models/user.model");
// const Product = require("../models/shopCustomer.model");
const authenticate = require("../middleware/authenticate");
const authorise = require("../middleware/autharise");

const router = express.Router();

router.get("/", authenticate, async (req, res) => {
  //   if (req.email !== req.params.email) {
  //     return res.status(400).send({ message: "err" });
  //   } else {
  // console.log("SSSSSSSSSSSSSSs",req.email);
  try {
    const admin = await Admin.find({ mobile: req.body.mobile });

    return res.status(200).send(admin);
  } catch (err) {
    return res.status(400).send({ message: err.message, loggedIn: false });
  }
  //   }
});

module.exports = router;
