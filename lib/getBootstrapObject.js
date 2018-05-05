// Dependencies
var css = require('css');
var fs = require('fs');

// Load in data
const bootstrapRaw = require('../data/bootstrapRaw.js');

// CSS parsing function
const getBootstrapObject = function() {
    return css.parse(bootstrapRaw);
}

module.exports = getBootstrapObject;

