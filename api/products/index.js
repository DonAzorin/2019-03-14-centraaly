const express = require('express');
const productsRouter = express.Router();

//Middlewares
const getProducts = require('./getProducts');
const getSingleProduct = require('./getSingleProduct');
const createProduct = require('./createProduct');
const putProducts = require('./putProducts');
const deleteProducts = require('./deleteProduct');

//Métodos
productsRouter.get('/', getProducts);
productsRouter.get('/:id', getSingleProduct);
productsRouter.post('/', createProduct);
productsRouter.put('/', putProducts);
productsRouter.delete('/', deleteProducts);

module.exports = productsRouter;