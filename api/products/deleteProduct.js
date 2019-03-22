const Product = require('../models/product');

function deleteProducts(req,res) {
  Product.remove({_id: req.params.id})
    .then(result => {
      if(result.n > 0){
        res.status(200).json({
          message: "Se eliminó el elemento"
        })
      } else {
        res.status(404).json({
          message: "No existen elementos para eliminar"
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
}

module.exports = deleteProducts;