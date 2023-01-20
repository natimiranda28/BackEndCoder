const products = require('../Products/controller.products')
const cart = require('../Cart/controller.cart')

const routes = (app) => {
  app.use('/api/products', products)
  app.use('/api/cart', this.cart)
}

module.exports = routes