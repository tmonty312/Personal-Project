

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
        db.addPupToCart([id]).then(results => {
            res.status(200).send(results)
        })
    },
    // updateQuantity: (req, res) => {
    //     let {id} = req.params
    //     let {quantity} = req.query
    //     const db = req.app.get('db')

    //     db.updateQuantity([+quantity, id]).then(results => {
    //         res.status(200).send(results)
    //     })
    // },
    deleteFromCart: (req, res) => {
        let {id} = req.params
        let db = req.app.get('db')
        db.deleteFromCart([id]).then(results => {
            res.status(200).send(results)
        })
    },

}