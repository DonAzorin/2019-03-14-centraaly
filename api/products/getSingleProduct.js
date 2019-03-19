const products = require('../../db')

function getSingleProduct(req,res) {
  const productId = req.params.id
  //OPCION 1:
  // for(let item of products.items) {
  //   if (item.id == productId) {
  //     res.json(item).status(200);
  //   }
  // }
  //res.send('No se encontró ese producto').status(404);

  //OPCION 2 con filter:
  //const requestedProduct = products.items.filter(function(item) {
  //  return item.id == productId;
  //})

  //OPCIÓN 2.1:
  const requestedProduct = products.items.filter(item => item.id == productId)

  if(requestedProduct.length !=0) {
    res.json(requestedProduct[0]).status(200);
  } else {
    res.send('No se encontró ese producto').status(404);
  }
}

//Filter nos regresa eun array y no el producto solamente

module.exports = getSingleProduct;