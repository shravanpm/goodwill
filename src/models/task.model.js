const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    churidhar: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 400 },
    },

    blouse: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 300 },
    },
    blouse_with_lining: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 350 },
    },
    churidhar_with_lining: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 450 },
    },
    top_only: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 300 },
    },
    lining_top: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 350 },
    },
    pant: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 200 },
    },
    skin_and_top: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 650 },
    },
    skirt: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 250 },
    },
    lining_skirt: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 300 },
    },
    full_gown: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 700 },
    },
    flair_top: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 450 },
    },
    saree_fall: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 100 },
    },
    saree_chend: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 80 },
    },
    interlocking: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 50 },
    },
    nity: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 200 },
    },
    kids_frock: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 300 },
    },
    kids_skirt_top: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 450 },
    },
    kids_gown: {
      qty: { type: Number, required: false },
      price: { type: Number, required: false, default: 450 },
    },

    paid: { type: Number, required: false, default: 0 },
    discount: { type: Number, required: false, default: 0 },
    total: { type: Number, required: false, default: 0 },
    completed: { type: Boolean, default: false },
    item_code: { type: Number, required: true },
    shopId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "shop" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
