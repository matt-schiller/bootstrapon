// Dependencies
const cheerio = require('cheerio');

// Data
const bootstrap = require('../data/bootstrap.js');
const bsSelectors = require('../data/bootstrapSelectors.js');

const mediaQueries = [ '', '@media print', '@media (min-width: 576px)', '@media (min-width: 768px)', '@media (min-width: 992px)', '@media (min-width: 1200px)', '@media (max-width: 575px)', '@media (max-width: 767px)', '@media (max-width: 991px)', '@media (max-width: 1199px)', '@-webkit-keyframes progress-bar-stripes', '@keyframes progress-bar-stripes', '@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d))', '@supports ((position: -webkit-sticky) or (position: sticky))' ]; // TODO: Check up to date for v4.1

// Prepopulated essential CSS
var css = ":root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#868e96;--gray-dark:#343a40;--primary:#007bff;--secondary:#868e96;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';--font-family-monospace:'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;}@-ms-viewport{width:device-width;}";

// Unique helper function
function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
};

// Function
const getClasses = function (responses) {

  var srcTags = [];
  var srcClasses = [];
  var bsTags = [];
  var bsClasses = [];
  var otherTags = [];
  var otherClasses = [];
  var bsTagsAndClasses = [];

  // Get all source items
  for (url in responses) {
    var response = responses[url];
    if(response.body) {
      let $ = cheerio.load(response.body);
      $('*').each(function(){
        if($(this)['0'].type=="tag"){srcTags.push($(this)['0'].name.toLowerCase())};
        if($(this)['0'].type=="tag" && $(this)['0'].attribs.class){srcClasses.push($(this)['0'].attribs.class)};
      });
    }
  }

  // Deduplicate source items
  srcTags = srcTags.filter( onlyUnique );
  srcClasses = srcClasses.join(" ").split(" ").filter( onlyUnique );
  for(var i=0;i<srcClasses.length;i++){
    srcClasses[i]="."+srcClasses[i];
  }


  // Map items against Bootstrap selectors
  srcTags.forEach(function(e){
    if (bsSelectors.indexOf(e)>-1) {
      bsTags.push(e);
    } else {
      otherTags.push(e);
    }
  });
  srcClasses.forEach(function(e){
    if (bsSelectors.indexOf(e)>-1) {
      bsClasses.push(e);
    } else {
      otherClasses.push(e);
    }
  });
  bsTagsAndClasses = bsTags.concat(bsClasses);

  // Outer loop for media queries
  for (j=0; j<mediaQueries.length; j++) {
    if (mediaQueries[j] != 'none') { css = css + mediaQueries[j] + "{"; } /// Change to omit if nothing for that query

    // Inner loop for selectors
    for (i=0; i<bootstrap.length; i++) {
      var media = bootstrap[i].media;
      var selector = bootstrap[i].mainSelector; // --------------------CHANGE TO BE MAIN SELECTOR
      var declarations = bootstrap[i].declarations;
      if(bsTagsAndClasses.indexOf(selector)>-1 && '@media '+media == mediaQueries[j]) {
        css = css + selector + "{" + declarations + "}";
      }
    }

    if (mediaQueries[j] != 'none') { css = css + "}"; }
  }

  return {
    srcTags: srcTags,
    srcClasses: srcClasses,
    bsTags: bsTags,
    bsClasses: bsClasses,
    otherTags: otherTags,
    otherClasses: otherClasses,
    css: css
  };

}

module.exports = getClasses;