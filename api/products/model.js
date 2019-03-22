const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var product = new Schema({
  nombre: String,
  tipo: String,
  precio: Number,
  tamaño: Array,
  color: Array,
  stock: {
    sur: Number,
    norte: Number,
    centro: Number,
  }
});

product.methods.verificarStockSur = function() {
  if(this.stock.sur == 0) {
    console.log("No hay stock disponible")
  }
}

product.methods.verificarStockNorte = function() {
  if(this.stock.norte == 0) {
    console.log("No hay stock disponible")
  }
}

product.methods.verificarStockCentro = function() {
  if(this.stock.centro == 0) {
    console.log("No hay stock disponible")
  }
}

module.exports = product;