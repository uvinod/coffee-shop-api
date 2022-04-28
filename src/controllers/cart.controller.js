const catchAsync = require('../utils/catchAsync');
const cartService = require('../services/cart.service');
const itemService = require('../services/item.service');
const Item = require('../models/item.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const addToCart = catchAsync(async (req, res) => {
  const itemId = req.body.itemId;
  const cartId = req.body.cartId;
  const quantity = req.body.quantity;

  const item = await itemService.getItemById(itemId);
  if (item !== null && Object.keys(item).length !== 0) {
    if (cartId === "") {
      const cart = await cartService.createCart(item, quantity);
      res.send(cart);
    } else {
      const cart = await cartService.getCartById(cartId);
      if (cart !== null && Object.keys(cart).length !== 0) {
        let subtotal = 0;
        let total = 0;

        let itemIndex = cart.items.findIndex(i => i.itemId == itemId);
        if (itemIndex == -1) {
          //product does not exists in cart, add new item
          cart.items.push({ itemId, price: item.price, quantity });
        } else {
          //product exists in the cart, update the quantity
          let item = cart.items[itemIndex];
          item.quantity = quantity;
          cart.items[itemIndex] = item;
        }
        subtotal = await cartService.totalCalculator(cart)
        cart.subtotal = subtotal;
        cart.total = subtotal;
        await cart.save();
        res.send(cart);
      } else {
        throw new ApiError(httpStatus.NOT_FOUND, 'Cart not found');
      }
    }
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
});

const retrieveCart = catchAsync(async (req, res) => {
  const cartId = req.params.id;
  const cart = await cartService.getCartById(cartId);
  if (cart !== null && Object.keys(cart).length !== 0) {
    res.send(cart)
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not exist');
  }
});

const removeFromCart = catchAsync(async (req, res) => {
  const id = req.body.id;
  const cartId = req.body.cartId;
  
  if (cartId === "") {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not exist');
  } else {
    var cart = await cartService.getCartById(cartId);
    if (cart !== null && Object.keys(cart).length !== 0) {
      let subtotal = 0;
      let total = 0;

      await cartService.removeItem(cartId, id);
      cart = await cartService.getCartById(cartId);
      subtotal = await cartService.totalCalculator(cart)
      cart.subtotal = subtotal;
      cart.total = subtotal;
      await cart.save();
      
      res.send(cart);
    } else {
      throw new ApiError(httpStatus.NOT_FOUND, 'Cart not exist');
    }
  }
});


module.exports = {
  addToCart,
  retrieveCart,
  removeFromCart,
};
