const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    bought_by : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  { timestamp: true }
);

const Product = mongoose.model("Product", productSchema)
module.exports = Product
