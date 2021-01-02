const mongoose = require('mongoose')
const tableTopSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    img: String,
    img1: String,
    img2: String,
    img3: String,
    players: {type: String} || {type: Number},
    description: {type: String},
    price: {type: String} || {type: Number},
    qty: {type: Number, min: 0 }
  })
  const TableTop = mongoose.model('TableTop', tableTopSchema)

  module.exports = TableTop
