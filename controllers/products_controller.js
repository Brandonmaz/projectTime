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
//==========================BUY===============================
products.put('/buy/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {$inc:{qty: -1}}, (error, update) => {
  })
  res.redirect('/products/' + req.params.id)
})

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
//============================NEW==================================



//================================CREATE=============================
products.post('/', (req, res) => {
  Product.create(req.body, (error, foundProduct) => {
    res.redirect('/products')
  })
})

//=================================SHOW===============================


//===================================================================
products.get('/:id', (req, res) => {
  Product.findById(req.params.id, (error, foundProduct) => {
    res.send(foundProduct)
  })
})

module.exports = products
