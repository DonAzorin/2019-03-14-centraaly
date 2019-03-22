const express = require('express');
const router = express.Router();
const products = require('./products');
const mongoose  = require('mongoose');

var dbUrl = process.env.ATLAS_URL;
console.log(dbUrl);

mongoose.connect(dbUrl);

router.all('/', function(req,res) {
  res.json({
    products: "http://localhost:8080/api/products"
  });
})

router.use('/products', products);

module.exports = router;