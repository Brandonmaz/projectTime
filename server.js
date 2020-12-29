//=========================Dependencies====================
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const tableTop = require('./models/tableTop.js')
const tableTopia = require('./models/tableTopia.js')
const session = require('express-session')

//======================Configuration=====================
const app = express()
const db = mongoose.connection
require('dotenv').config()
const PORT = process.env.PORT || 3003
const MONGODB_URI = process.env.MONGODBURI

//======================MIDDLEWARE==========================
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(session(
    {
    secret: process.env.SECRET,
    resave: false,
    saveUnitialized: false
  })
)
app.get('/', (req, res) => {
  res.send('Hello World')
})

//===========================DATABASE=======================
mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  () => {
    console.log('connected to mongod at', MONGODB_URI);
  })

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//=====================CONTROLLERS=========================
const productsController = require('./controllers/products_controller.js')
app.use('/products', productsController)
const userController = require('./controllers/users_controller.js')
app.use('/users', userController)
const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)
const tableTopController = require('./controllers/tableTop_controller.js')
app.use('/tableTop', tableTopController)
const tableTopiaController = require('./controllers/tableTopia_controller.js')
app.use('/tableTopia', tableTopiaController)
//=======================ROUTES==================
app.get('/', (req, res) => {
  res.redirect('/products')
})

//====================LISTENER=====================
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
})
