const express = require('express');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
