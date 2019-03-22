const mongoose = require('mongoose');
const productSchema = require('./model');
//const products = require('../../db');

//var Product = mongoose.model('Product', productSchema);

function getProducts(req,res) {

  
  //SOLO SE DEBE MANDAR UNA RESPUESTA
  //res.send('Estas haciendo una petición a products');
  res.json(products);
}

module.exports = getProducts;