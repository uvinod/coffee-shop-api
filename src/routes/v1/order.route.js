const express = require('express');
const orderController = require('../../controllers/order.controller');

const router = express.Router();

router.post('/', orderController.createOrder);
router.get('/', orderController.retrieveAll);
router.get('/:id', orderController.retrieveOrder);
router.patch('/:id', orderController.completeOrder);

module.exports = router;