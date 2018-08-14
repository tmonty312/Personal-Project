//let puppy 
module.exports = {
  getPuppy: (req, res) =>{
    const db = req.app.get('db')
    db.getPuppies().then(results =>{
        res.status(200).send(results)
    })
    .catch(err=> {
        console.log(11111111, err)
        res.status(500).send('Its not working')
    })
    }
}