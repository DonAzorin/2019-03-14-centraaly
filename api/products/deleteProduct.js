const products = require('../../db');

function deleteProducts(req,res) {
  deleteId = req.params.id;
  //Esta es una solución rápida para eliminar un producto:
  //products.items.slice(deleteId, deleteId)

  //Propuesta de Tony
  products.items = products.items.filter(item => {item.id != deleteId})

  res.send(products.items).status(202);
}

module.exports = deleteProducts;