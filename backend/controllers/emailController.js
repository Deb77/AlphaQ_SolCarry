const nodemailer = require('nodemailer'); 

require('dotenv').config();

let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'deb.mendes.9@gmail.com', 
        pass: process.env.PASSWORD
    } 
}); 

module.exports.email_post = (req, res) => {
    try {
        let mailDetails = { 
        from: 'deb.mendes.9@gmail.com', 
        to: 'hameeda2390@gmail.com', 
        subject: 'Order Summary', 
        text: "Your Order Has Been Placed Successfully!! Bon Appetit!! STAY HOME STAY SAFE"
        }; 
    mailTransporter.sendMail(mailDetails, function (err, data) { 
        if (err) { 
            console.log(err); 
        } else { 
            console.log(data);
        } 
    }); 
        res.status(201).json({ message: "Yout order has been placed successfully, please check your email for order summary" });
    }
    catch (err) {
        res.status(400).json({ message: "We were unable to fulfill your order" });
    }
}