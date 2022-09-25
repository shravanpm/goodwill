const mongoose = require("mongoose");

const shopCustomerSchema = new mongoose.Schema(
  {
    length: { type: String, required: false },
    shoulder: { type: String, required: false },
    chest: { type: String, required: false },
    waist: { type: String, required: false },
    sleeve: { type: String, required: false },
    regard: { type: String, required: false },
    slit: { type: String, required: false },
    hip: { type: String, required: false },
    seat: { type: String, required: false },
    bottom_length: { type: String, required: false },
    bottom_waist: { type: String, required: false },
    bell: { type: String, required: false },
    neck_number: { type: String, required: false },
    neck_width: { type: String, required: false },
    neck_length: { type: String, required: false },

    shopId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "shop" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ShopCustomer = mongoose.model("shopcustomer", shopCustomerSchema);

module.exports = ShopCustomer;
