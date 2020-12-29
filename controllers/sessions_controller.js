const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs',
  {
    currentUser: req.session.currentUser
  })
})
sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (error, foundUser) => {
    // database error
    if(error){
      console.log('oops DB had a problem');
    } else if(!foundUser){
      // if found user is undefined/null not found etc
      res.send('<a href="/products">Sorry User NOT Found</a>')
    } else {
      // user is found
      // Now lets check if the passwords match
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        // add the use to our sesion
        req.session.currentUser = foundUser
        // redirect back to our session
        res.redirect('/')
      } else {
        // password does not match
        res.send('<a href="/products">Password does NOT Match</a>')
      }
    }
  })
})
sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = sessions
