const express = require('express');;
const itemRoute = require('./item.route');
const cartRoute = require('./cart.route');
const orderRoute = require('./order.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/items',
    route: itemRoute,
  },
  {
    path: '/cart',
    route: cartRoute,
  },
  {
    path: '/orders',
    route: orderRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
