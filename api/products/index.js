const express = require('express');
const productsRouter = express.Router();

//Middlewares
const getProducts = require('./getProducts');
const createProduct = require('./createProduct');
const putProducts = require('./putProducts');
const deleteProducts = require('./deleteProduct');

//Métodos
productsRouter.get('/', getProducts);
productsRouter.post('/', createProduct);
productsRouter.put('/', putProducts);
productsRouter.delete('/', deleteProducts);

module.exports = productsRouter;