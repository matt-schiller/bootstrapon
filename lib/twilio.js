// Dependencies
var twilio = require('twilio');

// Setup Twilio client
var accountSid = process.env.TWILIO_ACCOUNTSID;
var authToken = process.env.TWILIO_AUTHTOKEN;
var client = new twilio(accountSid, authToken);

// Send SMS function
const sendSMS = function (phoneNumber, code) {

    client.messages.create({
        body: 'Here is your Bootstrapon verification code: '+code,
        to: phoneNumber,
        from: '+14154771255' // Valid Twilio number
    })
    .then((message) => console.log(message.sid));

}

module.exports = sendSMS;