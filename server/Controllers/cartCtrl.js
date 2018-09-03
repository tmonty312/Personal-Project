 const configureStripe = require('stripe')

 const stripe = configureStripe(process.env.STRIPE_SECRET_KEY);
 const nodemailer = require('nodemailer');
 require('dotenv').config()
 
 const transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     auth: {
         type: "login",
         user: process.env.MY_EMAIL,
         pass: process.env.EMAIL_PASSWORD
     }
 })

module.exports= {
    getCart: (req, res) => {
        const db = req.app.get('db')
        
        db.getCart()
            .then(results => {
                res.status(200).send(results)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send('Something is broke')
            })
    },
    addToCart: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        console.log(id)
        db.addPupToCart([id, 1]).then(results => {
            res.status(200).send(results)
        })
    },

    updateQuantity: (req, res) => {
        let {id} = req.params
        let {quantity} = req.query
        const db = req.app.get('db')

        db.updateQuantity([+quantity, id]).then(results => {
            res.status(200).send(results)
        })
    },

    deleteFromCart: (req, res) => {
        let {id} = req.params
        let db = req.app.get('db')
        db.deleteFromCart([id]).then(results => {
            res.status(200).send(results)
        })
    },

    autoEmail: (req, res) => {
        const { user_email, message } = req.body;

        const mailOptions = {
            from: process.env.MY_EMAILEMAIL,
            to: user_email,
            subject: 'Thanks for your purchase',
            text: message
        }

        transport.sendMail(mailOptions, (error, response) => {
            if(error) {
                console.log(error)
            } else {
                res.status(200).send(response)
            }
        })
    },

    checkout: async (req, res) => {
        try{  
            const db = req.app.get('db')
            console.log('body', req.body)
            let {  name, email, phone, combinedAddress, description, source, currency, amount } = req.body
            let tempCustomer = await stripe.customers.create({email})
            let charge = {
                description,
                source,
                currency,
                amount,
                receipt_email: 'tmonty312@gmail.com',
                customer: tempCustomer.customer
            }
            
            let stripeId = await stripe.charges.create(charge)
                console.log(stripeId.id)
            let newCustomer = { stripeId: stripeId.id, name, email, phone, address: combinedAddress }
            let customer = await db.createCustomer(newCustomer)
            let results = await db.checkout()
            res.status(200).send({results, customer: customer[0]})
        } catch (err) {
            console.log(err)
            res.status(500).send('Cart is not emptying')
        }
    }
}