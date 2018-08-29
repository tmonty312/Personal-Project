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

    sendEmail: (req,res,next) => {
       const { name, email, message} = req.body;
        
                let mailOptions = {
                    from:  email, // sender address
                    to: process.env.MY_EMAIL, // list of receivers
                    subject: 'From puppy site', // Subject line
                    text: `${name}
${email}
${message}` // plain text body
                  };
                
                transporter.sendMail(mailOptions, (error, response) => {
                    if (error) {
                        return console.log(error);
                    }else{
                        res.status(200).send(response)
                       }   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                });
            
          }
        }