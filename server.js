// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const request = require('request');

// Express app
const PORT = process.env.PORT || 3001;
const app = express();

// Models
const db = require('./models');

// Helper functions
const sendEmail = require('.//lib/emailer.js');
const sendSMS = require('./lib/twilio.js');
const parser = require('./lib/parser.js');
const getClasses = require('./lib/getClasses.js');
const assembleCSS = require('./lib/assembleCSS.js');

// Data files
const bootstrap = require('./data/bootstrap.js');

// Data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// API - search by selector
app.get('/api/search/:selector', function(req, res) {
  var apiKey = req.query.key;
  db.User.findOne({
    where: { api_key: apiKey }
  }).then(function(data) {
    if (data.email) {
      var json = [];
      bootstrap.forEach(function(element) {
        if(element.selector==req.params.selector) { json.push(element); }
      })
      res.json(json);
    } else {
      res.status(400).send('Invalid API key');
    }
  }).catch(function(data) {
    res.status(400).send('Invalid API key');
  });
});

// API - scrape page
app.post('/api/scrape', function(req, res) {
  var url = req.body.url;
  console.log(url);
  request(url, function (error, response, html) {
    // var result = getClasses(html);
    var result = assembleCSS(html);
    res.send(result);
  });
});

// API - create user
app.post('/api/user/create', function(req, res) {
  db.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email
  }).then(function(data) {
    console.log('Created new user');
    sendEmail(data.email, data.api_key)
    res.send('New user created - API key sent to '+email);
  });
});

// API - parse entire Bootstrap
app.get('/api/all', function(req, res) {
  var result = parser();
  res.json(result);
})

// Send all other requests to the React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start DB and app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on port '+PORT);
  });
});

// // Email and SMS tests
// sendEmail('matt@snappr.co', 'kj45l3j5lk37k7l758lkl');
// sendSMS('+14152721237', '1234');