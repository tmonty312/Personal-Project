//let puppy 
module.exports = {
  getPuppy: (req, res) =>{
    const db = req.app.get('db')
    db.get_puppies().then(results =>{
        res.status(200).send(results)
    })
    .catch(err=> {
        console.log(11111111, err)
        res.status(500).send('Its not working')
    })
    },
    addPuppy: (req,res) =>{
        const { name, description, price, image } = req.body

        const pup = {
            id,
            name,
            description,
            price: '$'+price,
            image, 
        }
        pies.push(pup)
        id++
        res.status(200).send(puppy)
    },
    updatePuppy: (req,res) =>{
        let {id} = req.params
        let {name, description, price, image}= req.body
        let index = puppy.findIndex(s => s.id === +id)
        if(index !== -1) {
            puppy[index].name = name
            puppy[index].description = description
            puppy[index].price=price
            puppy[index].image = image
        }
        res.status(200).send(puppy)
    },
    deletePuppy: (req,res) =>{
        const {id}= req.params
        let index= puppy.findIndex(s => s.id === +id)

        if(index!== -1){
            puppy.splice(index,1)
        }
        res.status(200).send(puppy)
    }
   
}