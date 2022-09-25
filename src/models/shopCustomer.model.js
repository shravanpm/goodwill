const mongoose = require("mongoose");

const shopCustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    // password: { type: Number, required: true },
    shopId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ShopCustomer = mongoose.model("shopcustomer", shopCustomerSchema);

module.exports = ShopCustomer;
