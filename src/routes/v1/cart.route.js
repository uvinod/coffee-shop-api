const express = require('express');
const cartController = require('../../controllers/cart.controller');

const router = express.Router();

router.post('/', cartController.addToCart);
router.get('/:id', cartController.retrieveCart);
router.delete('/', cartController.removeFromCart);

module.exports = router;