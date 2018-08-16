const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./Controllers/controller')
const massive = require('massive')
const session = require('express-session')
const cartCtrl = require('./Controllers/cartCtrl')
require('dotenv').config()

const port = process.env.SERVER_PORT || 4141

const app = express()
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected!')
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))




app.use(bodyParser.json())

app.get('/api/puppies', controller.getPuppy)
//cart
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:id', cartCtrl.addToCart)
//app.put('/api/cart/:id', cartCtrl.updateQuantity)
app.delete('/api/cart/:id', cartCtrl.deleteFromCart)
//app.delete('/api/cart', cartCtrl, deleteFromCart)



app.listen(port, ()=>console.log('I am listening on',port))