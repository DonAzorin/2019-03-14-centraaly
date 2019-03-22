const Product = require('../models/product');
const mongoose = require('mongoose');

function createProduct(req,res) {

  const newProduct = new Product({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    precio: req.body.precio,
    tamaño: req.body.tamaño,
    color: req.body.color,
    stock: {
      sur: req.body.stock.sur,
      norte: req.body.stock.norte,
      centro: req.body.stock.centro,
    }
  });

  newProduct.save()
    .then(result => {
    res.status(201).json({
      message: "Se creó un nuevo producto exitosamente",
      nuevoProducto: newProduct
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
  
  //const newItem = req.body;
  //newItem.id = products.items.length +1;
  //products.items.push(newItem);
  
  // newProduct.save(function(err,newProduct) {    
  //   if(err) res.send(err).status(404)
  //   res.send(product).status(201)
  // });

  //res.send(newItem).status(201);
};

module.exports = createProduct;