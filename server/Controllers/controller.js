const nodemailer = require('nodemailer');
require('dotenv').config()


console.log(process.env.MY_EMAIL)
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
        // nodemailer.createTestAccount((err, account) => {
        //     let transporter = nodemailer.createTransport({
        //         host: process.env.MY_EMAIL,
        //         port: process.env.SERVER_PORT,
        //         secure: false, 
        //         });
        
                let mailOptions = {
                    from:  process.env.MY_EMAIL, // sender address
                    to: process.env.MY_EMAIL, // list of receivers
                    subject: 'HELLO', // Subject line
                    text: 'Hellow workd?', // plain text body
                    html: '<b>Hello world?</b>' // html body
                };
                
                transporter.sendMail(mailOptions, (error, response) => {
                    if (error) {
                        return console.log(error);
                    }else{
                        res.status(200).send(response)
                    // Preview only available when sending through an Ethereal account
                    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    
                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                       }   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                });
            
          }
        }