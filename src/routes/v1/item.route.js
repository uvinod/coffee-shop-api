const express = require('express');
const itemController = require('../../controllers/item.controller');

const router = express.Router();

router.get('/', itemController.retrieveAll);

module.exports = router;