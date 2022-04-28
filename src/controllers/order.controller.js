const catchAsync = require('../utils/catchAsync');
const cartService = require('../services/cart.service');
const orderService = require('../services/order.service');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const createOrder = catchAsync(async (req, res) => {
  const cartId = req.body.cartId;
  
  const cart = await cartService.getCartById(cartId);
  if (cart !== null && Object.keys(cart).length !== 0) {
    const order = await orderService.createOrder(cart);
    res.send(order);
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not found');
  }
});

const retrieveAll = catchAsync(async (req, res) => {
  const result = await orderService.queryOrders();
  res.send(result);
});

const retrieveOrder = catchAsync(async (req, res) => {
  const orderId = req.params.id;
  const order = await orderService.getOrderById(orderId);
  if (order !== null && Object.keys(order).length !== 0) {
    res.send(order);
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
});

const completeOrder = catchAsync(async (req, res) => {
  const orderId = req.params.id;
  const status = req.body.status;

  const order = await orderService.getOrderById(orderId);
  if (order !== null && Object.keys(order).length !== 0) {
    await orderService.completeOrder(orderId, status);
    res.send();
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
});

module.exports = {
  createOrder,
  retrieveOrder,
  retrieveAll,
  completeOrder,
};
