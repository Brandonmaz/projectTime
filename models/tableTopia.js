const mongoose = require('mongoose')
const tableTopiaSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    company: {type: String},
    img: {type: String, required: true},
    img1: {type: String, required: true},
    img2: {type: String, required: true},
    img3: {type: String, required: true},
    players: {type: String} || {type: Number},
    description: {type: String, required: true},
    price: {type: String} || {type: Number},
    qty: {type: Number, min: 0, required: true }
  })
  const TableTopia = mongoose.model('TableTopia', tableTopiaSchema)

  module.exports = TableTopia
