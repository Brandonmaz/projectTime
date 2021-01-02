const mongoose = require('mongoose')
const tableTopiaSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    img: String,
    img1: String,
    img2: String,
    img3: String,
    description: {type: String},
    price: {type: String} || {type: Number},
    qty: {type: String }
  })
  const TableTopia = mongoose.model('TableTopia', tableTopiaSchema)

  module.exports = TableTopia
