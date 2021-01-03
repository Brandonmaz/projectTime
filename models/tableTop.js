const mongoose = require('mongoose')
const tableTopSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    img: {type: String, required: true},
    img1: {type: String, required: true},
    img2: {type: String, required: true},
    img3: {type: String, required: true},
    players: {type: String} || {type: Number},
    description: {type: String, required: true},
    price: {type: String} || {type: Number},
    qty: {type: Number, min: 0, required: true }
  })
  const TableTop = mongoose.model('TableTop', tableTopSchema)

  module.exports = TableTop
