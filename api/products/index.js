const express = require('express');
const productsRouter = express.Router();

productsRouter.use(express.json());

//Middlewares
const getProducts = require('./getProducts');
const getSingleProduct = require('./getSingleProduct');
const createProduct = require('./createProduct');
const editProducts = require('./editProducts');
const deleteProducts = require('./deleteProduct');

//Métodos
productsRouter.get('/', getProducts);
productsRouter.get('/:id', getSingleProduct);
productsRouter.post('/', createProduct);
productsRouter.put('/:id', editProducts);
productsRouter.delete('/:id', deleteProducts);

module.exports = productsRouter;