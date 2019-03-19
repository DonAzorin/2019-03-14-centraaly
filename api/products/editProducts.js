const products = require('../../db');

function editProducts(req,res) {
  const productId = req.params.id;
  const newInfo = req.body;
  const itemsList = products.items;
  
  for(let key in itemsList) {
    if(itemsList[key].id == productId) {
      newInfo.id = itemsList[key].id;
      itemsList[key] = newInfo;
      res.send(newInfo).status(202);
    }
  }
  res.send('No existe un producto con ese Id').status(404);
}

module.exports = editProducts;