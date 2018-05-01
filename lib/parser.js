// Dependencies
var css = require('css');

// Load in data
const bootstrap = require('../data/bootstrap.js');
const bootstrapRaw = require('../data/bootstrapRaw.js');

// CSS parsing function
const parser = function() {
    return css.parse(bootstrapRaw);
}

module.exports = parser;