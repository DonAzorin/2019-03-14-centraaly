const express = require('express');
const productsRouter = express.Router();

productsRouter.get('/', (req,res) => {
  res.send('Estas haciendo una petición a products');
})

module.exports = productsRouter;