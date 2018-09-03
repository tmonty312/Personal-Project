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
    },

    deletePuppy: (req, res) => {
        let {id} = req.params
        let db = req.app.get('db')
        db.deletePuppy([id]).then(results => {
            res.status(200).send(results)
        })
    },

    addPuppy: (req, res) => {
        let db = req.app.get('db')
        let {breed, price, description, image} = req.body
        let {id} = req.params

        let newPup = {id, breed, price, description, image}
        db.createPuppies(newPup).then(results => {
            res.status(200).send(results)
        })
    },


    sendEmail: (req,res,next) => {
       const { name, email, message} = req.body;
        
                let mailOptions = {
                    from:  email, // sender address
                    to: process.env.MY_EMAIL, // list of receivers
                    subject: 'From puppy site', 
                    text: `${name}
                           ${email}
                           ${message}` 
                  };
                
                transporter.sendMail(mailOptions, (error, response) => {
                    if (error) {
                        return console.log(error);
                    }else{
                        res.status(200).send(response)
                       } 
                });
            
     },

     getCustomer: (req, res) =>{
         const db = req.app.get('db')
         db.getCustomers().then(results => {
             res.status(200).send(results)
         })
         .catch(err=> {
             console.log(22222222, err)
             res.status(500).send('Didnt work')
         })
     }
}