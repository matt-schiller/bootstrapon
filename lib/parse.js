const fs = require('fs');
const bootstrap = require('../data/bootstrapObj.js');
const bs = bootstrap.stylesheet.rules;

var types = [ 'rule', 'media', 'keyframes', 'supports', 'comment' ];

function dedup(array) {
  var arr = [];
  for(var i = 0; i < array.length; i++) {
      if(!arr.includes(array[i])) {
          arr.push(array[i]);
      }
  }
  return arr; 
}

// var exampleObject = {
//   "media": "",
//   "selector": "h1",
//   "selectorGroup": ["h1", "h2", "h3", "h4", "h5", "h6"]
//   "declarations": {
//     "margin-top" :"0",
//     "margin-bottom": "0.5rem"
//   }
// };

var output = [];

//find in output
function findSelector(value, media) {
  for (var i = 0; i < output.length; i++) {
      if (output[i]["selector"] === value && output[i]["media"] === media) {
          // return output[i];
          return i;
      }
  }
  return null;
}

function getSelectors(obj, med) {
  obj.forEach(function(e) {
    if (e.type=='rule') {
      e.selectors.forEach(function(e2) {
        var media = med; //ATTENTION
        var selector = e2;
        // var selectorGroup = e.selectors;
        var declarations = '';
        e.declarations.forEach(function(e3){
          declarations = declarations + e3.property + ':' + e3.value + ';';
        })

        if(findSelector(selector, media)) {
          output[findSelector(selector, media)] = {
            "media": media,
            "selector": selector,
            // "selectorGroup": selectorGroup,
            "declarations": output[findSelector(selector, media)]["declarations"] + declarations
          }
        } else {      
          newObj = {
            "media": media,
            "selector": selector,
            // "selectorGroup": selectorGroup,
            "declarations": declarations
          };
          output.push(newObj);
        }
      })
    } else if (e.type=='media') {
      getSelectors(e.rules, e.media);
    }
  });
}
getSelectors(bs, '');

fs.writeFile('../data/bootstrap.js', 'const bootstrap =\n' + JSON.stringify(output, null, 2) +';\nmodule.exports = bootstrap;', 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved to server');
});

var selectors = [];
output.forEach(function(e) {
  selectors.push(e.selector);
});
var uniqueSelectors = dedup(selectors);
console.log(uniqueSelectors);

//================FIX Stringification of array
fs.writeFile('../client/src/utils/bootstrap.js', 'const bootstrap =\n' + JSON.stringify(uniqueSelectors) +';\nexport default bootstrap;', 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved to client');
});
