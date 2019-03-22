const express = require('express');
const router = express.Router();
const products = require('./products');
const mongoose  = require('mongoose');

router.all('/', function(req,res) {
  res.json({
    products: "http://localhost:8080/api/products"
  });
})

router.use('/products', products);

module.exports = router;