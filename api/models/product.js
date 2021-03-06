const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model('Product', productSchema);