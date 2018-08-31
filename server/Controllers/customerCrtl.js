

// module.exports = {
//     create: async (req, res) => {
//         try {
//           let db = req.app.get('db')
//           let {  name, email, phone, address } = req.body
//           let stripeId = await stripe.charges.create(req.body)
    
//           let newCustomer = { stripeId, name, email, phone, address }
//           let customer = await db.createCustomer(newCustomer)
//           res.send(customer[0])
//         } catch (error) {
//           console.log('error creating post:', error)
//           res.status(500).send(error)
//         }
//       }
// }



// checkout: async (req, res) => {
//     const db = req.app.get('db')
//     let {  name, email, phone, address } = req.body
//     let stripeId = await stripe.charges.create(req.body)

//     let newCustomer = { stripeId, name, email, phone, address }
//     let customer = await db.createCustomer(newCustomer)
//     db.checkout()
//     .then(results => {
//         res.status(200).send({results, customer: customer[0]})
//     }).catch(err => {
//         console.log(err)
//         res.status(500).send('Cart is not emptying')
//     })
// }

// }