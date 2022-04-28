const Cart = require('../models/cart.model');

/**
 * Query for cart
 * @returns {Promise<Cart>}
 */
const createCart = async (item, quantity) => {
  const subtotal = item.price * quantity;

  const cart = await Cart.create({
    subtotal: subtotal,
    total: subtotal,
    items: [{ itemId: item._id, price: item.price, quantity: quantity }]
  });
  return cart;
};

/**
 * Query for cart by id
 * @param {ObjectId} id
 * @returns {Promise<Cart>}
 */
const getCartById = async (id) => {
  return await Cart.findById(id);
};

/**
 * Query for cart by id
 * @param {ObjectId} id
 * @returns {Promise<Cart>}
 */
const removeItem = async (cartId, id) => {
  await Cart.updateOne(
    {
      _id: Object(cartId),
    },
    {
      $pull: {
        items: 
        {
          _id: Object(id)
        }
      }
    }
  );
};

const totalCalculator = async (cart) => {
  const total = cart.items.reduce(function (subtotal, item) {
    subtotal = subtotal + (item.quantity * item.price);
    return subtotal;
  }, 0);
  return total;
};

const taxCalculator = async (cart) => {
  //placeholder to calculate tax
}

const discountCalculator = async (cart) => {
  //placeholder to calculate discount
}

module.exports = {
  createCart,
  getCartById,
  removeItem,
  totalCalculator,
}