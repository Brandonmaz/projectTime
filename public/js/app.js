// ===================== Search Bar jQuery =================
const express = require('express')
const JQuery = require('../data/app.js')
const jQuery = express.Router()

$(() => {
    const formTest =
      $('form').on('submit', (event) => {
        event.preventDefault()
        const userInput = $('input').val()
      })
    $.ajax({
      url: `https://products/api/name=` + userInput + ``,
      type: "GET"
    }).then(
      (data) => {

        const $div = $('<div>').addClass('divProducts').appendTo('.body')
        $div.append($name)
      }, (error) => {
      alert(`Please check your spelling and try again`)
      console.log(`${error.statusText.toUpperCase()}:bad request`);
    }, (error) => {
      alert(`You must have spelled something wrong. Please check your spelling and try again`)
      console.log(`${error.statusText.toUpperCase()}:bad request`);
    }
  )
})

module.exports = jQuery
