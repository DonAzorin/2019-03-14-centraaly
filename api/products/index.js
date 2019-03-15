const express = require('express');
const productsRouter = express.Router();

//Middlewares
const getProducts = require('./getProducts');

//Métodos
productsRouter.get('/', getProducts);
// productsRouter.post('/', postProducts);
// productsRouter.put('/', putProducts);
// productsRouter.delete('/', deleteProducts);

module.exports = productsRouter;