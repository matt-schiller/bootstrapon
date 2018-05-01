// Dependencies
const cheerio = require('cheerio');

// Unique helper function
function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
};

// Function
const getClasses = function (html) {
  var allTags = [];
  var allClasses = [];
  var tags = [];
  var classes = [];
  const $ = cheerio.load(html);

  // Loop through all items in html file
  $('*').each(function(){
    if($(this)['0'].type=="tag"){allTags.push($(this)['0'].name.toLowerCase())};
    if($(this)['0'].type=="tag" && $(this)['0'].attribs.class){allClasses.push("." + $(this)['0'].attribs.class)};
    tags = allTags.filter( onlyUnique );
    classes = allClasses.join(" ").split(" ").filter( onlyUnique );
  });

  return {
    tags: tags,
    classes: classes
  };

}

module.exports = getClasses;