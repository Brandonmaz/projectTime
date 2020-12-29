const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
  {
    name: {type: String},
    img: String,
    description: {type: String},
    price: {type: Number || String , min: 0},
    qty: {type: Number || String, min: 0}
  })
  const Product = mongoose.model('Product', productSchema)

  module.exports = Product
