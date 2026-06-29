//Desarrollo: iconde 2026
//Date: 27-06-2026

const express = require('express');

const productsRouter = require('./products.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
}

module.exports = routerApi;
