const products = require('../../db')

function getSingleProduct(req,res) {
  const productId = req.params.id
  for(let item of products.items) {
    if (item.id == productId) {
      res.json(item).status(200);
    }
  }
  res.send('No se encontró ese producto').status(404);
}

module.exports = getSingleProduct;