const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

itemSchema.plugin(toJSON);

/**
 * @typedef Item
 */
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;