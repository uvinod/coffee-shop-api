const mongoose = require('mongoose');
const app = require('../../src/app');
const Item = require('../../src/models/item.model');
const config = require('../../src/config/config');
const logger = require('../../src/config/logger');

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });
});

const seedItems = [
  {
    name: 'Caffe Latte',
    price: '10',
    tax: '2'
  },
  {
    name: 'Cappuccino',
    price: '15',
    tax: '3'
  },
  {
    name: 'Flat White',
    price: '20',
    tax: '4'
  },
  {
    name: 'Americano',
    price: '25',
    tax: '5'
  },
  {
    name: 'Chocolate Cappuccino',
    price: '30',
    tax: '6'
  },
  {
    name: 'Velvel Vanilla Latte',
    price: '35',
    tax: '7'
  },
  {
    name: 'Caffe Latte',
    price: '40',
    tax: '8'
  },
  {
    name: 'Chilli Cheese Toast',
    price: '45',
    tax: '9'
  },
  {
    name: 'Creamy Spinach',
    price: '50',
    tax: '10'
  },
  {
    name: 'Butter Croissant',
    price: '55',
    tax: '11'
  }
];

const seedDB = async () => {
  await Item.deleteMany({});
  await Item.insertMany(seedItems);
};

seedDB().then(() => {
  mongoose.connection.close();
});