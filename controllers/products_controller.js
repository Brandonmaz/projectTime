const express = require('express')
const _ = require('lodash')
const Product = require('../models/products.js')
const tableTop = require('../models/tableTop.js')
const tableTopia = require('../models/tableTopia.js')
const product = require('../data/product.js')
const products = express.Router()

const isAuthenticated = (req, res, next) => {
  if(req.session.currentUser){
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}
//=============Searchable API==================

products.get('/api', (req, res) => {
  var response = []
  if(req.query.qty){
    if(typeof req.query.qty.toString() != 'undefined'){
      product.filter(function(product){
        if(product.qty.toString() === req.query.qty.toString()){
          response.push(product)
        }
      })
    }
  }else if(req.query.price){
    if(typeof req.query.price.toString() != 'undefined'){
      product.filter(function(product){
        if(product.price.toString() === req.query.price.toString()){
          response.push(product)
        }
      })
    }
  }else{
    if(typeof req.query.name != 'undefined'){
      product.filter(function(product){
        if(product.name.toLowerCase() === req.query.name.toLowerCase()){
          response.push(product)
        }
      })
    }
    if(typeof req.query.players != 'undefined'){
      product.filter(function(product){
        if(product.players === req.query.players){
          response.push(product)
        }
      })
    }
    if(typeof req.query.company != 'undefined'){
      product.filter(function(product){
        if(product.company.toLowerCase() === req.query.company.toLowerCase()){
          response.push(product)
        }
      })
    }

  }


  response = _.uniqBy(response)

  if(Object.keys(req.query).length === 0){
    response = product
  }
  res.json(response)
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


//===================================================================
products.get('/:id', (req, res) => {
  Product.findById(req.params.id, (error, foundProduct) => {
    res.send(foundProduct)
  })
})

module.exports = products
