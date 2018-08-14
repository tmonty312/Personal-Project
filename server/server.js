const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const massive = require('massive')
const session = require('express-session')
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

app.get('/api/puppy', controller.getPuppy)



app.listen(port, ()=>console.log('I am listening on',port))