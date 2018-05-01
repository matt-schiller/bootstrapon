// Dependencies
const nodemailer = require('nodemailer');

// Send email function
const sendEmail = function (email, apiKey) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bootstrapon.noreply@gmail.com',
            pass: process.env.GMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: 'Bootstrapon <bootstrapon.noreply@gmail.com>',
        to: email,
        subject: 'Your Bootstrapon API Key',
        text: 'Here is your Bootstrapon API Key: '+apiKey
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

module.exports = sendEmail;