const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { itemService } = require('../services');

const retrieveAll = catchAsync(async (req, res) => {
  const result = await itemService.queryItems();
  res.send(result);
});

module.exports = {
  retrieveAll,
};
