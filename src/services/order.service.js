const Order = require('../models/order.model');

/**
 * Query for order
 * @returns {Promise<Order>}
 */
const createOrder = async (cart) => {
  const order = await Order.create({
    subtotal: cart.subtotal,
    tax: cart.subtotal,
    discount: cart.total,
    total: cart.total,
    items: cart.items,
    status: "Pending",
  });
  
  return order;
};

/**
 * Query for orders
 * @returns {Promise<QueryResult>}
 */
const queryOrders = async () => {
  const orders = await Order.find();
  return orders;
};

/**
 * Query for order by id
 * @param {ObjectId} id
 * @returns {Promise<Order>}
 */
const getOrderById = async (id) => {
  return await Order.findById(id);
};

const completeOrder = async (id, status) => {
  await Order.updateOne({"_id": id}, {"status": status}, function(err, result){
    if (err) {
      console.log('error', err)
    }
    else {
      return 
    }
  });
};


module.exports = {
  createOrder,
  queryOrders,
  getOrderById,
  completeOrder,
}