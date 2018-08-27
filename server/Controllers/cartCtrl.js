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

   checkout: (req, res) => {
       const db = req.app.get('db') 
       console.log('body', req.body)
       stripe.charges.create(req.body)
       db.checkout()
       .then(results => {
           res.status(200).send(results)
       }).catch(err => {
           console.log(err)
           res.status(500).send('Cart is not emptying')
       })
   }

}