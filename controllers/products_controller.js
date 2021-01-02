const express = require('express')
const Product = require('../models/products.js')
const tableTop = require('../models/tableTop.js')
const tableTopia = require('../models/tableTopia.js')
const products = express.Router()

const isAuthenticated = (req, res, next) => {
  if(req.session.currentUser){
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}
// testing


//============================Main==============================
products.get('/', (req, res) => {
  Product.find({}, (error, allProducts) => {
    res.render('main.ejs',
    {
      tableTop: tableTop,
      tableTopia: tableTopia,
      currentUser: req.session.currentUser
    })
  })
})


//===================================================================
products.get('/:id', (req, res) => {
  Product.findById(req.params.id, (error, foundProduct) => {
    res.send(foundProduct)
  })
})

module.exports = products
