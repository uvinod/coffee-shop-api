const Item = require('../models/item.model');

/**
 * Query for items
 * @returns {Promise<QueryResult>}
 */
const queryItems = async () => {
  const items = await Item.find();
  return items;
};

/**
 * Query for item by id
 * @param {ObjectId} id
 * @returns {Promise<Item>}
 */
const getItemById = async (id) => {
  return await Item.findById(id);
};

module.exports = {
  queryItems,
  getItemById,
}