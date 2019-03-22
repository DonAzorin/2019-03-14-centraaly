const Product = require('../models/product');

function editProducts(req,res) {
  const productId = req.params.id;
  
  Product.update({_id: req.params.id}, {
    $set: {
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
    }
  })
  .then(result => {
    res.status(200).json({
      message: "se modificó el elemento correctamente"
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
}

module.exports = editProducts;