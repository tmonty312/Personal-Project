const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./Controllers/controller')
const massive = require('massive')
const session = require('express-session')
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config()

const cartCtrl = require('./Controllers/cartCtrl')


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

// getEmail: (req,res,next) {
//     nodemailer.createTestAccount((err, account) => {
//         let transporter = nodemailer.createTransport({
//             host: process.env.MY_EMAIL,
//             port: process.env.SERVER_PORT || 4141,
//             secure: false, 
//             });
    
//             let mailOptions = {
//                 from: 'test323@gmail.com', // sender address
//                 to: process.env.MY_EMAIL, // list of receivers
//                 subject: 'HELLO', // Subject line
//                 text: 'Hellow workd?', // plain text body
//                 html: '<b>Hello world?</b>' // html body
//             };
            
//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     return console.log(error);
//                 }
//                 console.log('Message sent: %s', info.messageId);
//                 // Preview only available when sending through an Ethereal account
//                 console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                
//                 // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//                 // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//             });
//         })
//       }


app.use(bodyParser.json())

app.get('/api/puppies', controller.getPuppy)
//cart
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:id', cartCtrl.addToCart)
app.put('/api/cart/:id', cartCtrl.updateQuantity)
app.delete('/api/cart/:id', cartCtrl.deleteFromCart)
app.post('/api/checkout', cartCtrl.checkout)
//nodemail
app.post('/api/email', controller.sendEmail)



app.listen(port, ()=>console.log('I am listening on',port))