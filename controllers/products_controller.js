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
// https://jonathanmh.com/building-a-simple-searchable-api-with-express-backend/
products.get('/api', (req, res) => {
  var response = []
  if(typeof req.query.name != 'undefined'){
    product.filter(function(product){
      if(product.name.toLowerCase() === req.query.name.toLowerCase()){
        response.push(product)
      }
    })
  }
  response = _.uniqBy(response, 'id')

  if(Object.keys(req.query).length === 0){
    response = product
  }
  res.json(response)
})
// ===================== Search Bar jQuery =================
// $(() => {
//     const formTest =
//       $('form').on('submit', (event) => {
//         event.preventDefault()
//         const userInput = $('input').val()
//       })
//     $.ajax({
//       url: `https://products/api/name=` + userInput + ``,
//       type: "GET"
//     }).then(
//       (data) => {
//       }, (error) => {
//       alert(`Please check your spelling and try again`)
//       console.log(`${error.statusText.toUpperCase()}:bad request`);
//     }
//   )
// })


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
