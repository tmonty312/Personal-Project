 const configureStripe = require('stripe')

 const stripe = configureStripe(process.env.STRIPE_SECRET_KEY);


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