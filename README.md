# Coffee Shop API

## Installation

Clone the repo:

```bash
git clone --depth 1 https://github.com/uvinod/coffee-shop-api.git
cd coffee-shop-api
npx rimraf ./.git
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/coffeeshop

# Environment
NODE_ENV=development

### API Endpoints

List of available routes:

**Items routes**:\
`GET /v1/items/register` - retrieve all items\

**Cart routes**:\
`POST /v1/cart` - create/modify a cart\
`GET /v1/cart/:cartId` - retrieve cart\
`DELETE /v1/cart` - delete item from cart

**Order routes**:\
`POST /v1/orders` - create an order\
`GET /v1/orders` - retrieve all orders\
`GET /v1/orders/:orderId` - retrieve an order\
`PATCH /v1/orders/:orderId` - complete an order\