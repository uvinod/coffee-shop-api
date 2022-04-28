const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const cartSchema = mongoose.Schema(
  {
    subtotal: {
      type: Number
    },
    tax: {
      type: Number
    },
    discount: {
      type: Number
    },
    total: {
      type: Number
    },
    items: [
      {
        itemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Item',
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      }
    ]  
  },
  {
    timestamps: true,
  }
);

cartSchema.plugin(toJSON);

/**
 * @typedef Cart
 */
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;