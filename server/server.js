const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./Controllers/controller')
const massive = require('massive')
const session = require('express-session')
require('dotenv').config()

const cartCtrl = require('./Controllers/cartCtrl')
const AuthCtrl = require('./Controllers/authCtrl')


const port = process.env.SERVER_PORT 

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
//customers
app.get ('/api/customers', controller.getCustomer)
//puppies
app.get('/api/puppies', controller.getPuppy)
app.post('/api/puppies', controller.addPuppy)
    //app.put('/api/puppies/:id', controller.updatePuppy)
app.delete('/api/puppies/:id', controller.deletePuppy)
//cart
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:id', cartCtrl.addToCart)
app.put('/api/cart/:id', cartCtrl.updateQuantity)
app.delete('/api/cart/:id', cartCtrl.deleteFromCart)
app.post('/api/checkout', cartCtrl.checkout)
//nodemailer
app.post('/api/email', controller.sendEmail)
    //app.post('/api/cart/email', controller.cartCtrl)
//auth0
app.get('/auth/callback', AuthCtrl.auth)
app.get('/api/currentUser', (req,res) => {
    res.send(req.session.user)
})
app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
})


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});



app.listen(port, ()=>console.log('I am listening on',port))