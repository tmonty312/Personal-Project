const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./Controllers/controller')
const massive = require('massive')
const session = require('express-session')
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config()

const cartCtrl = require('./Controllers/cartCtrl')
const AuthCtrl = require('./controllers/AuthCtrl')


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

app.use(express.static(`${__dirname}/../build`))

app.get('/api/puppies', controller.getPuppy)
//cart
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:id', cartCtrl.addToCart)
app.put('/api/cart/:id', cartCtrl.updateQuantity)
app.delete('/api/cart/:id', cartCtrl.deleteFromCart)
app.post('/api/checkout', cartCtrl.checkout)
//nodemailer
app.post('/api/email', controller.sendEmail)
//auth0
app.get('/auth/callback', AuthCtrl.auth)
app.get('/api/currentUser', (req,res) => {
    res.send(req.session.user)
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});



app.listen(port, ()=>console.log('I am listening on',port))