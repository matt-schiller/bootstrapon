// Dependencies
const cheerio = require('cheerio');

// Data
const bootstrap = require('../data/bootstrap.js');
const mediaQueries = [ '@media print', 'none', '@media (min-width:576px)', '@media (min-width:768px)', '@media (min-width:992px)', '@media (min-width:1200px)', '@media (max-width:575px)', '@media (max-width:767px)', '@media (max-width:991px)', '@media (max-width:1199px)', '@-webkit-keyframes progress-bar-stripes', '@keyframes progress-bar-stripes', '@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d))', '@supports ((position:-webkit-sticky) or (position:sticky))' ]; // TODO: Check up to date for v4.1

// Prepopulated essential CSS
var css = ":root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#868e96;--gray-dark:#343a40;--primary:#007bff;--secondary:#868e96;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';--font-family-monospace:'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;}@-ms-viewport{width:device-width;}";

// Function
const assembleCSS = function (html) {

  const $ = cheerio.load(html);

  var errors = [];

  // Outer loop for media queries
  for (j=0; j<mediaQueries.length; j++) {
    if (mediaQueries[j] != 'none') { css = css + mediaQueries[j] + "{"; } /// Change to omit if nothing for that query

    // Inner loop for selectors
    for (i=0; i<bootstrap.length; i++) {
      var media = bootstrap[i].media;
      var selector = bootstrap[i].selector;
      var declarations = bootstrap[i].declarations;
      try {
        var appearances = $(selector).length;
      }
      catch(err) {
        errors.push("Error with selector '" + selector + "' (" + err + ")");
      }
      if(appearances>0 && media == mediaQueries[j]) {
        css = css + selector + "{" + declarations + "}";
      }
    }

    if (mediaQueries[j] != 'none') { css = css + "}"; }
  }
  console.log(errors);
  
  return {
    tags: ["xxx"],
    classes: ["yyy"],
    css: css
  };

}

module.exports = assembleCSS;