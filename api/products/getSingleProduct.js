const Product = require('../models/product');

function getSingleProduct(req, res) {
  Product.findById(req.params.id)
    .then(doc => {
      if(doc){
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "El id que buscas no existe :'c"
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
}


module.exports = getSingleProduct;