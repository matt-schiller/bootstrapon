const bootstrap = [
 {
   "media": "media",
   "selector": "selector",
   "declarations": "declarations"
 },
 {
   "media": "@media print",
   "selector": "*",
   "declarations": "text-shadow:none!important;box-shadow:none!important;"
 },
 {
   "media": "@media print",
   "selector": "*::before",
   "declarations": "text-shadow:none!important;box-shadow:none!important;"
 },
 {
   "media": "@media print",
   "selector": "*::after",
   "declarations": "text-shadow:none!important;box-shadow:none!important;"
 },
 {
   "media": "@media print",
   "selector": "a",
   "declarations": "text-decoration:underline;"
 },
 {
   "media": "@media print",
   "selector": "a:visited",
   "declarations": "text-decoration:underline;"
 },
 {
   "media": "@media print",
   "selector": "abbr[title]::after",
   "declarations": "content:\" (\" attr(title) \")\";"
 },
 {
   "media": "@media print",
   "selector": "pre",
   "declarations": "white-space:pre-wrap!important;"
 },
 {
   "media": "@media print",
   "selector": "pre",
   "declarations": "border:1px solid #999;page-break-inside:avoid;"
 },
 {
   "media": "@media print",
   "selector": "blockquote",
   "declarations": "border:1px solid #999;page-break-inside:avoid;"
 },
 {
   "media": "@media print",
   "selector": "thead",
   "declarations": "display:table-header-group;"
 },
 {
   "media": "@media print",
   "selector": "tr",
   "declarations": "page-break-inside:avoid;"
 },
 {
   "media": "@media print",
   "selector": "img",
   "declarations": "page-break-inside:avoid;"
 },
 {
   "media": "@media print",
   "selector": "p",
   "declarations": "orphans:3;widows:3;"
 },
 {
   "media": "@media print",
   "selector": "h2",
   "declarations": "orphans:3;widows:3;"
 },
 {
   "media": "@media print",
   "selector": "h3",
   "declarations": "orphans:3;widows:3;"
 },
 {
   "media": "@media print",
   "selector": "h2",
   "declarations": "page-break-after:avoid;"
 },
 {
   "media": "@media print",
   "selector": "h3",
   "declarations": "page-break-after:avoid;"
 },
 {
   "media": "@media print",
   "selector": ".navbar",
   "declarations": "display:none;"
 },
 {
   "media": "@media print",
   "selector": ".badge",
   "declarations": "border:1px solid #000;"
 },
 {
   "media": "@media print",
   "selector": ".table",
   "declarations": "border-collapse:collapse!important;"
 },
 {
   "media": "@media print",
   "selector": ".table td",
   "declarations": "background-color:#fff!important;"
 },
 {
   "media": "@media print",
   "selector": ".table th",
   "declarations": "background-color:#fff!important;"
 },
 {
   "media": "@media print",
   "selector": ".table-bordered th",
   "declarations": "border:1px solid #ddd!important;"
 },
 {
   "media": "@media print",
   "selector": ".table-bordered td",
   "declarations": "border:1px solid #ddd!important;"
 },
 {
   "media": "none",
   "selector": "*",
   "declarations": "box-sizing:border-box;"
 },
 {
   "media": "none",
   "selector": "*::before",
   "declarations": "box-sizing:border-box;"
 },
 {
   "media": "none",
   "selector": "*::after",
   "declarations": "box-sizing:border-box;"
 },
 {
   "media": "none",
   "selector": "html",
   "declarations": "font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent;"
 },
 {
   "media": "none",
   "selector": "article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": "body",
   "declarations": "margin:0;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff;"
 },
 {
   "media": "none",
   "selector": "[tabindex=\"-1\"]:focus",
   "declarations": "outline:none!important;"
 },
 {
   "media": "none",
   "selector": "hr",
   "declarations": "box-sizing:content-box;height:0;overflow:visible;"
 },
 {
   "media": "none",
   "selector": "h1, h2, h3, h4, h5, h6",
   "declarations": "margin-top:0;margin-bottom:0.5rem;"
 },
 {
   "media": "none",
   "selector": "p",
   "declarations": "margin-top:0;margin-bottom:1rem;"
 },
 {
   "media": "none",
   "selector": "abbr[title]",
   "declarations": "text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;"
 },
 {
   "media": "none",
   "selector": "abbr[data-original-title]",
   "declarations": "text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;"
 },
 {
   "media": "none",
   "selector": "address",
   "declarations": "margin-bottom:1rem;font-style:normal;line-height:inherit;"
 },
 {
   "media": "none",
   "selector": "ol",
   "declarations": "margin-top:0;margin-bottom:1rem;"
 },
 {
   "media": "none",
   "selector": "ul",
   "declarations": "margin-top:0;margin-bottom:1rem;"
 },
 {
   "media": "none",
   "selector": "dl",
   "declarations": "margin-top:0;margin-bottom:1rem;"
 },
 {
   "media": "none",
   "selector": "ol ol",
   "declarations": "margin-bottom:0;"
 },
 {
   "media": "none",
   "selector": "ul ul",
   "declarations": "margin-bottom:0;"
 },
 {
   "media": "none",
   "selector": "ol ul",
   "declarations": "margin-bottom:0;"
 },
 {
   "media": "none",
   "selector": "ul ol",
   "declarations": "margin-bottom:0;"
 },
 {
   "media": "none",
   "selector": "dt",
   "declarations": "font-weight:700;"
 },
 {
   "media": "none",
   "selector": "dd",
   "declarations": "margin-bottom:.5rem;margin-left:0;"
 },
 {
   "media": "none",
   "selector": "blockquote",
   "declarations": "margin:0 0 1rem;"
 },
 {
   "media": "none",
   "selector": "dfn",
   "declarations": "font-style:italic;"
 },
 {
   "media": "none",
   "selector": "b",
   "declarations": "font-weight:bolder;"
 },
 {
   "media": "none",
   "selector": "strong",
   "declarations": "font-weight:bolder;"
 },
 {
   "media": "none",
   "selector": "small",
   "declarations": "font-size:80%;"
 },
 {
   "media": "none",
   "selector": "sub",
   "declarations": "position:relative;font-size:75%;line-height:0;vertical-align:baseline;"
 },
 {
   "media": "none",
   "selector": "sup",
   "declarations": "position:relative;font-size:75%;line-height:0;vertical-align:baseline;"
 },
 {
   "media": "none",
   "selector": "sub",
   "declarations": "bottom:-.25em;"
 },
 {
   "media": "none",
   "selector": "sup",
   "declarations": "top:-.5em;"
 },
 {
   "media": "none",
   "selector": "a",
   "declarations": "color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects;"
 },
 {
   "media": "none",
   "selector": "a:hover",
   "declarations": "color:#0056b3;text-decoration:underline;"
 },
 {
   "media": "none",
   "selector": "a:not([href]):not([tabindex])",
   "declarations": "color:inherit;text-decoration:none;"
 },
 {
   "media": "none",
   "selector": "a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover",
   "declarations": "color:inherit;text-decoration:none;"
 },
 {
   "media": "none",
   "selector": "a:not([href]):not([tabindex]):focus",
   "declarations": "outline:0;"
 },
 {
   "media": "none",
   "selector": "pre",
   "declarations": "font-family:monospace, monospace;font-size:1em;"
 },
 {
   "media": "none",
   "selector": "code",
   "declarations": "font-family:monospace, monospace;font-size:1em;"
 },
 {
   "media": "none",
   "selector": "kbd",
   "declarations": "font-family:monospace, monospace;font-size:1em;"
 },
 {
   "media": "none",
   "selector": "samp",
   "declarations": "font-family:monospace, monospace;font-size:1em;"
 },
 {
   "media": "none",
   "selector": "pre",
   "declarations": "margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar;"
 },
 {
   "media": "none",
   "selector": "figure",
   "declarations": "margin:0 0 1rem;"
 },
 {
   "media": "none",
   "selector": "img",
   "declarations": "vertical-align:middle;border-style:none;"
 },
 {
   "media": "none",
   "selector": "svg:not(:root)",
   "declarations": "overflow:hidden;"
 },
 {
   "media": "none",
   "selector": "a",
   "declarations": "-ms-touch-action:manipulation;touch-action:manipulation;"
 },
 {
   "media": "none",
   "selector": "area",
   "declarations": "-ms-touch-action:manipulation;touch-action:manipulation;"
 },
 {
   "media": "none",
   "selector": "button",
   "declarations": "-ms-touch-action:manipulation;touch-action:manipulation;"
 },
 {
   "media": "none",
   "selector": "[role=\"button\"]",
   "declarations": "-ms-touch-action:manipulation;touch-action:manipulation;"
 },
 {
   "media": "none",
   "selector": "input:not([type=\"range\"])",
   "declarations": "-ms-touch-action:manipulation;touch-action:manipulation;"
 },
 {
   "media": "none",
   "selector": "label",
   "declarations": "-ms-touch-action:manipulation;touch-action:manipulation;"
 },
 {
   "media": "none",
   "selector": "select",
   "declarations": "-ms-touch-action:manipulation;touch-action:manipulation;"
 },
 {
   "media": "none",
   "selector": "summary",
   "declarations": "-ms-touch-action:manipulation;touch-action:manipulation;"
 },
 {
   "media": "none",
   "selector": "textarea",
   "declarations": "-ms-touch-action:manipulation;touch-action:manipulation;"
 },
 {
   "media": "none",
   "selector": "table",
   "declarations": "border-collapse:collapse;"
 },
 {
   "media": "none",
   "selector": "caption",
   "declarations": "padding-top:0.75rem;padding-bottom:0.75rem;color:#868e96;text-align:left;caption-side:bottom;"
 },
 {
   "media": "none",
   "selector": "th",
   "declarations": "text-align:inherit;"
 },
 {
   "media": "none",
   "selector": "label",
   "declarations": "display:inline-block;margin-bottom:.5rem;"
 },
 {
   "media": "none",
   "selector": "button",
   "declarations": "border-radius:0;"
 },
 {
   "media": "none",
   "selector": "button:focus",
   "declarations": "outline:1px dotted;outline:5px auto -webkit-focus-ring-color;"
 },
 {
   "media": "none",
   "selector": "input",
   "declarations": "margin:0;font-family:inherit;font-size:inherit;line-height:inherit;"
 },
 {
   "media": "none",
   "selector": "button",
   "declarations": "margin:0;font-family:inherit;font-size:inherit;line-height:inherit;"
 },
 {
   "media": "none",
   "selector": "select",
   "declarations": "margin:0;font-family:inherit;font-size:inherit;line-height:inherit;"
 },
 {
   "media": "none",
   "selector": "optgroup",
   "declarations": "margin:0;font-family:inherit;font-size:inherit;line-height:inherit;"
 },
 {
   "media": "none",
   "selector": "textarea",
   "declarations": "margin:0;font-family:inherit;font-size:inherit;line-height:inherit;"
 },
 {
   "media": "none",
   "selector": "button",
   "declarations": "overflow:visible;"
 },
 {
   "media": "none",
   "selector": "input",
   "declarations": "overflow:visible;"
 },
 {
   "media": "none",
   "selector": "button",
   "declarations": "text-transform:none;"
 },
 {
   "media": "none",
   "selector": "select",
   "declarations": "text-transform:none;"
 },
 {
   "media": "none",
   "selector": "button",
   "declarations": "-webkit-appearance:button;"
 },
 {
   "media": "none",
   "selector": "html [type=\"button\"]",
   "declarations": "-webkit-appearance:button;"
 },
 {
   "media": "none",
   "selector": "[type=\"reset\"]",
   "declarations": "-webkit-appearance:button;"
 },
 {
   "media": "none",
   "selector": "[type=\"submit\"]",
   "declarations": "-webkit-appearance:button;"
 },
 {
   "media": "none",
   "selector": "button::-moz-focus-inner",
   "declarations": "padding:0;border-style:none;"
 },
 {
   "media": "none",
   "selector": "[type=\"button\"]::-moz-focus-inner",
   "declarations": "padding:0;border-style:none;"
 },
 {
   "media": "none",
   "selector": "[type=\"reset\"]::-moz-focus-inner",
   "declarations": "padding:0;border-style:none;"
 },
 {
   "media": "none",
   "selector": "[type=\"submit\"]::-moz-focus-inner",
   "declarations": "padding:0;border-style:none;"
 },
 {
   "media": "none",
   "selector": "input[type=\"radio\"]",
   "declarations": "box-sizing:border-box;padding:0;"
 },
 {
   "media": "none",
   "selector": "input[type=\"checkbox\"]",
   "declarations": "box-sizing:border-box;padding:0;"
 },
 {
   "media": "none",
   "selector": "input[type=\"date\"]",
   "declarations": "-webkit-appearance:listbox;"
 },
 {
   "media": "none",
   "selector": "input[type=\"time\"]",
   "declarations": "-webkit-appearance:listbox;"
 },
 {
   "media": "none",
   "selector": "input[type=\"datetime-local\"]",
   "declarations": "-webkit-appearance:listbox;"
 },
 {
   "media": "none",
   "selector": "input[type=\"month\"]",
   "declarations": "-webkit-appearance:listbox;"
 },
 {
   "media": "none",
   "selector": "textarea",
   "declarations": "overflow:auto;resize:vertical;"
 },
 {
   "media": "none",
   "selector": "fieldset",
   "declarations": "min-width:0;padding:0;margin:0;border:0;"
 },
 {
   "media": "none",
   "selector": "legend",
   "declarations": "display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal;"
 },
 {
   "media": "none",
   "selector": "progress",
   "declarations": "vertical-align:baseline;"
 },
 {
   "media": "none",
   "selector": "[type=\"number\"]::-webkit-inner-spin-button",
   "declarations": "height:auto;"
 },
 {
   "media": "none",
   "selector": "[type=\"number\"]::-webkit-outer-spin-button",
   "declarations": "height:auto;"
 },
 {
   "media": "none",
   "selector": "[type=\"search\"]",
   "declarations": "outline-offset:-2px;-webkit-appearance:none;"
 },
 {
   "media": "none",
   "selector": "[type=\"search\"]::-webkit-search-cancel-button",
   "declarations": "-webkit-appearance:none;"
 },
 {
   "media": "none",
   "selector": "[type=\"search\"]::-webkit-search-decoration",
   "declarations": "-webkit-appearance:none;"
 },
 {
   "media": "none",
   "selector": "::-webkit-file-upload-button",
   "declarations": "font:inherit;-webkit-appearance:button;"
 },
 {
   "media": "none",
   "selector": "output",
   "declarations": "display:inline-block;"
 },
 {
   "media": "none",
   "selector": "summary",
   "declarations": "display:list-item;"
 },
 {
   "media": "none",
   "selector": "template",
   "declarations": "display:none;"
 },
 {
   "media": "none",
   "selector": "[hidden]",
   "declarations": "display:none!important;"
 },
 {
   "media": "none",
   "selector": "h1 h2 h3 h4 h5 h6",
   "declarations": "margin-bottom:0.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit;"
 },
 {
   "media": "none",
   "selector": ".h1",
   "declarations": "margin-bottom:0.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit;"
 },
 {
   "media": "none",
   "selector": ".h2",
   "declarations": "margin-bottom:0.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit;"
 },
 {
   "media": "none",
   "selector": ".h3",
   "declarations": "margin-bottom:0.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit;"
 },
 {
   "media": "none",
   "selector": ".h4",
   "declarations": "margin-bottom:0.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit;"
 },
 {
   "media": "none",
   "selector": ".h5",
   "declarations": "margin-bottom:0.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit;"
 },
 {
   "media": "none",
   "selector": ".h6",
   "declarations": "margin-bottom:0.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit;"
 },
 {
   "media": "none",
   "selector": "h1",
   "declarations": "font-size:2.5rem;"
 },
 {
   "media": "none",
   "selector": ".h1",
   "declarations": "font-size:2.5rem;"
 },
 {
   "media": "none",
   "selector": "h2",
   "declarations": "font-size:2rem;"
 },
 {
   "media": "none",
   "selector": ".h2",
   "declarations": "font-size:2rem;"
 },
 {
   "media": "none",
   "selector": "h3",
   "declarations": "font-size:1.75rem;"
 },
 {
   "media": "none",
   "selector": ".h3",
   "declarations": "font-size:1.75rem;"
 },
 {
   "media": "none",
   "selector": "h4",
   "declarations": "font-size:1.5rem;"
 },
 {
   "media": "none",
   "selector": ".h4",
   "declarations": "font-size:1.5rem;"
 },
 {
   "media": "none",
   "selector": "h5",
   "declarations": "font-size:1.25rem;"
 },
 {
   "media": "none",
   "selector": ".h5",
   "declarations": "font-size:1.25rem;"
 },
 {
   "media": "none",
   "selector": "h6",
   "declarations": "font-size:1rem;"
 },
 {
   "media": "none",
   "selector": ".h6",
   "declarations": "font-size:1rem;"
 },
 {
   "media": "none",
   "selector": ".lead",
   "declarations": "font-size:1.25rem;font-weight:300;"
 },
 {
   "media": "none",
   "selector": ".display-1",
   "declarations": "font-size:6rem;font-weight:300;line-height:1.2;"
 },
 {
   "media": "none",
   "selector": ".display-2",
   "declarations": "font-size:5.5rem;font-weight:300;line-height:1.2;"
 },
 {
   "media": "none",
   "selector": ".display-3",
   "declarations": "font-size:4.5rem;font-weight:300;line-height:1.2;"
 },
 {
   "media": "none",
   "selector": ".display-4",
   "declarations": "font-size:3.5rem;font-weight:300;line-height:1.2;"
 },
 {
   "media": "none",
   "selector": "hr",
   "declarations": "margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0, 0, 0, 0.1);"
 },
 {
   "media": "none",
   "selector": "small",
   "declarations": "font-size:80%;font-weight:400;"
 },
 {
   "media": "none",
   "selector": ".small",
   "declarations": "font-size:80%;font-weight:400;"
 },
 {
   "media": "none",
   "selector": "mark",
   "declarations": "padding:0.2em;background-color:#fcf8e3;"
 },
 {
   "media": "none",
   "selector": ".mark",
   "declarations": "padding:0.2em;background-color:#fcf8e3;"
 },
 {
   "media": "none",
   "selector": ".list-unstyled",
   "declarations": "padding-left:0;list-style:none;"
 },
 {
   "media": "none",
   "selector": ".list-inline",
   "declarations": "padding-left:0;list-style:none;"
 },
 {
   "media": "none",
   "selector": ".list-inline-item",
   "declarations": "display:inline-block;"
 },
 {
   "media": "none",
   "selector": ".list-inline-item:not(:last-child)",
   "declarations": "margin-right:5px;"
 },
 {
   "media": "none",
   "selector": ".initialism",
   "declarations": "font-size:90%;text-transform:uppercase;"
 },
 {
   "media": "none",
   "selector": ".blockquote",
   "declarations": "margin-bottom:1rem;font-size:1.25rem;"
 },
 {
   "media": "none",
   "selector": ".blockquote-footer",
   "declarations": "display:block;font-size:80%;color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".blockquote-footer::before",
   "declarations": "content:\"\\2014 \\00A0\";"
 },
 {
   "media": "none",
   "selector": ".img-fluid",
   "declarations": "max-width:100%;height:auto;"
 },
 {
   "media": "none",
   "selector": ".img-thumbnail",
   "declarations": "padding:0.25rem;background-color:#fff;border:1px solid #ddd;border-radius:0.25rem;transition:all 0.2s ease-in-out;max-width:100%;height:auto;"
 },
 {
   "media": "none",
   "selector": ".figure",
   "declarations": "display:inline-block;"
 },
 {
   "media": "none",
   "selector": ".figure-img",
   "declarations": "margin-bottom:0.5rem;line-height:1;"
 },
 {
   "media": "none",
   "selector": ".figure-caption",
   "declarations": "font-size:90%;color:#868e96;"
 },
 {
   "media": "none",
   "selector": "code",
   "declarations": "font-family:\"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;"
 },
 {
   "media": "none",
   "selector": "kbd",
   "declarations": "font-family:\"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;"
 },
 {
   "media": "none",
   "selector": "pre",
   "declarations": "font-family:\"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;"
 },
 {
   "media": "none",
   "selector": "samp",
   "declarations": "font-family:\"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;"
 },
 {
   "media": "none",
   "selector": "code",
   "declarations": "padding:0.2rem 0.4rem;font-size:90%;color:#bd4147;background-color:#f8f9fa;border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": "a > code",
   "declarations": "padding:0;color:inherit;background-color:inherit;"
 },
 {
   "media": "none",
   "selector": "kbd",
   "declarations": "padding:0.2rem 0.4rem;font-size:90%;color:#fff;background-color:#212529;border-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": "kbd kbd",
   "declarations": "padding:0;font-size:100%;font-weight:700;"
 },
 {
   "media": "none",
   "selector": "pre",
   "declarations": "display:block;margin-top:0;margin-bottom:1rem;font-size:90%;color:#212529;"
 },
 {
   "media": "none",
   "selector": "pre code",
   "declarations": "padding:0;font-size:inherit;color:inherit;background-color:transparent;border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".pre-scrollable",
   "declarations": "max-height:340px;overflow-y:scroll;"
 },
 {
   "media": "none",
   "selector": ".container",
   "declarations": "width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".container",
   "declarations": "max-width:540px;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".container",
   "declarations": "max-width:720px;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".container",
   "declarations": "max-width:960px;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".container",
   "declarations": "max-width:1140px;"
 },
 {
   "media": "none",
   "selector": ".container-fluid",
   "declarations": "width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;"
 },
 {
   "media": "none",
   "selector": ".row",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;"
 },
 {
   "media": "none",
   "selector": ".no-gutters",
   "declarations": "margin-right:0;margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".no-gutters > .col",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".no-gutters > [class*=\"col-\"]",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".col-1",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-2",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-3",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-4",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-5",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-6",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-7",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-8",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-9",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-10",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-11",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-12",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-auto",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-1",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-2",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-3",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-4",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-5",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-6",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-7",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-8",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-9",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-10",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-11",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-12",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-sm-auto",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-1",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-2",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-3",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-4",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-5",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-6",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-7",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-8",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-9",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-10",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-11",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-12",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-md-auto",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-1",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-2",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-3",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-4",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-5",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-6",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-7",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-8",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-9",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-10",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-11",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-12",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-lg-auto",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-1",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-2",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-3",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-4",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-5",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-6",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-7",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-8",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-9",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-10",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-11",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-12",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col-xl-auto",
   "declarations": "position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;"
 },
 {
   "media": "none",
   "selector": ".col",
   "declarations": "-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%;"
 },
 {
   "media": "none",
   "selector": ".col-auto",
   "declarations": "-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none;"
 },
 {
   "media": "none",
   "selector": ".col-1",
   "declarations": "-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%;"
 },
 {
   "media": "none",
   "selector": ".col-2",
   "declarations": "-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;"
 },
 {
   "media": "none",
   "selector": ".col-3",
   "declarations": "-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;"
 },
 {
   "media": "none",
   "selector": ".col-4",
   "declarations": "-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;"
 },
 {
   "media": "none",
   "selector": ".col-5",
   "declarations": "-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%;"
 },
 {
   "media": "none",
   "selector": ".col-6",
   "declarations": "-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;"
 },
 {
   "media": "none",
   "selector": ".col-7",
   "declarations": "-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%;"
 },
 {
   "media": "none",
   "selector": ".col-8",
   "declarations": "-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;"
 },
 {
   "media": "none",
   "selector": ".col-9",
   "declarations": "-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;"
 },
 {
   "media": "none",
   "selector": ".col-10",
   "declarations": "-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%;"
 },
 {
   "media": "none",
   "selector": ".col-11",
   "declarations": "-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%;"
 },
 {
   "media": "none",
   "selector": ".col-12",
   "declarations": "-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;"
 },
 {
   "media": "none",
   "selector": ".order-first",
   "declarations": "-ms-flex-order:-1;order:-1;"
 },
 {
   "media": "none",
   "selector": ".order-1",
   "declarations": "-ms-flex-order:1;order:1;"
 },
 {
   "media": "none",
   "selector": ".order-2",
   "declarations": "-ms-flex-order:2;order:2;"
 },
 {
   "media": "none",
   "selector": ".order-3",
   "declarations": "-ms-flex-order:3;order:3;"
 },
 {
   "media": "none",
   "selector": ".order-4",
   "declarations": "-ms-flex-order:4;order:4;"
 },
 {
   "media": "none",
   "selector": ".order-5",
   "declarations": "-ms-flex-order:5;order:5;"
 },
 {
   "media": "none",
   "selector": ".order-6",
   "declarations": "-ms-flex-order:6;order:6;"
 },
 {
   "media": "none",
   "selector": ".order-7",
   "declarations": "-ms-flex-order:7;order:7;"
 },
 {
   "media": "none",
   "selector": ".order-8",
   "declarations": "-ms-flex-order:8;order:8;"
 },
 {
   "media": "none",
   "selector": ".order-9",
   "declarations": "-ms-flex-order:9;order:9;"
 },
 {
   "media": "none",
   "selector": ".order-10",
   "declarations": "-ms-flex-order:10;order:10;"
 },
 {
   "media": "none",
   "selector": ".order-11",
   "declarations": "-ms-flex-order:11;order:11;"
 },
 {
   "media": "none",
   "selector": ".order-12",
   "declarations": "-ms-flex-order:12;order:12;"
 },
 {
   "media": "none",
   "selector": ".offset-1",
   "declarations": "margin-left:8.333333%;"
 },
 {
   "media": "none",
   "selector": ".offset-2",
   "declarations": "margin-left:16.666667%;"
 },
 {
   "media": "none",
   "selector": ".offset-3",
   "declarations": "margin-left:25%;"
 },
 {
   "media": "none",
   "selector": ".offset-4",
   "declarations": "margin-left:33.333333%;"
 },
 {
   "media": "none",
   "selector": ".offset-5",
   "declarations": "margin-left:41.666667%;"
 },
 {
   "media": "none",
   "selector": ".offset-6",
   "declarations": "margin-left:50%;"
 },
 {
   "media": "none",
   "selector": ".offset-7",
   "declarations": "margin-left:58.333333%;"
 },
 {
   "media": "none",
   "selector": ".offset-8",
   "declarations": "margin-left:66.666667%;"
 },
 {
   "media": "none",
   "selector": ".offset-9",
   "declarations": "margin-left:75%;"
 },
 {
   "media": "none",
   "selector": ".offset-10",
   "declarations": "margin-left:83.333333%;"
 },
 {
   "media": "none",
   "selector": ".offset-11",
   "declarations": "margin-left:91.666667%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm",
   "declarations": "-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-auto",
   "declarations": "-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-1",
   "declarations": "-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-2",
   "declarations": "-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-3",
   "declarations": "-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-4",
   "declarations": "-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-5",
   "declarations": "-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-6",
   "declarations": "-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-7",
   "declarations": "-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-8",
   "declarations": "-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-9",
   "declarations": "-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-10",
   "declarations": "-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-11",
   "declarations": "-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".col-sm-12",
   "declarations": "-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-first",
   "declarations": "-ms-flex-order:-1;order:-1;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-1",
   "declarations": "-ms-flex-order:1;order:1;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-2",
   "declarations": "-ms-flex-order:2;order:2;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-3",
   "declarations": "-ms-flex-order:3;order:3;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-4",
   "declarations": "-ms-flex-order:4;order:4;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-5",
   "declarations": "-ms-flex-order:5;order:5;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-6",
   "declarations": "-ms-flex-order:6;order:6;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-7",
   "declarations": "-ms-flex-order:7;order:7;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-8",
   "declarations": "-ms-flex-order:8;order:8;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-9",
   "declarations": "-ms-flex-order:9;order:9;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-10",
   "declarations": "-ms-flex-order:10;order:10;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-11",
   "declarations": "-ms-flex-order:11;order:11;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".order-sm-12",
   "declarations": "-ms-flex-order:12;order:12;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-0",
   "declarations": "margin-left:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-1",
   "declarations": "margin-left:8.333333%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-2",
   "declarations": "margin-left:16.666667%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-3",
   "declarations": "margin-left:25%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-4",
   "declarations": "margin-left:33.333333%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-5",
   "declarations": "margin-left:41.666667%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-6",
   "declarations": "margin-left:50%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-7",
   "declarations": "margin-left:58.333333%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-8",
   "declarations": "margin-left:66.666667%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-9",
   "declarations": "margin-left:75%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-10",
   "declarations": "margin-left:83.333333%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".offset-sm-11",
   "declarations": "margin-left:91.666667%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md",
   "declarations": "-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-auto",
   "declarations": "-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-1",
   "declarations": "-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-2",
   "declarations": "-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-3",
   "declarations": "-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-4",
   "declarations": "-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-5",
   "declarations": "-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-6",
   "declarations": "-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-7",
   "declarations": "-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-8",
   "declarations": "-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-9",
   "declarations": "-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-10",
   "declarations": "-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-11",
   "declarations": "-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".col-md-12",
   "declarations": "-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-first",
   "declarations": "-ms-flex-order:-1;order:-1;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-1",
   "declarations": "-ms-flex-order:1;order:1;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-2",
   "declarations": "-ms-flex-order:2;order:2;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-3",
   "declarations": "-ms-flex-order:3;order:3;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-4",
   "declarations": "-ms-flex-order:4;order:4;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-5",
   "declarations": "-ms-flex-order:5;order:5;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-6",
   "declarations": "-ms-flex-order:6;order:6;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-7",
   "declarations": "-ms-flex-order:7;order:7;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-8",
   "declarations": "-ms-flex-order:8;order:8;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-9",
   "declarations": "-ms-flex-order:9;order:9;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-10",
   "declarations": "-ms-flex-order:10;order:10;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-11",
   "declarations": "-ms-flex-order:11;order:11;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".order-md-12",
   "declarations": "-ms-flex-order:12;order:12;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-0",
   "declarations": "margin-left:0;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-1",
   "declarations": "margin-left:8.333333%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-2",
   "declarations": "margin-left:16.666667%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-3",
   "declarations": "margin-left:25%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-4",
   "declarations": "margin-left:33.333333%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-5",
   "declarations": "margin-left:41.666667%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-6",
   "declarations": "margin-left:50%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-7",
   "declarations": "margin-left:58.333333%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-8",
   "declarations": "margin-left:66.666667%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-9",
   "declarations": "margin-left:75%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-10",
   "declarations": "margin-left:83.333333%;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".offset-md-11",
   "declarations": "margin-left:91.666667%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg",
   "declarations": "-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-auto",
   "declarations": "-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-1",
   "declarations": "-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-2",
   "declarations": "-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-3",
   "declarations": "-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-4",
   "declarations": "-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-5",
   "declarations": "-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-6",
   "declarations": "-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-7",
   "declarations": "-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-8",
   "declarations": "-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-9",
   "declarations": "-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-10",
   "declarations": "-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-11",
   "declarations": "-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".col-lg-12",
   "declarations": "-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-first",
   "declarations": "-ms-flex-order:-1;order:-1;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-1",
   "declarations": "-ms-flex-order:1;order:1;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-2",
   "declarations": "-ms-flex-order:2;order:2;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-3",
   "declarations": "-ms-flex-order:3;order:3;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-4",
   "declarations": "-ms-flex-order:4;order:4;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-5",
   "declarations": "-ms-flex-order:5;order:5;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-6",
   "declarations": "-ms-flex-order:6;order:6;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-7",
   "declarations": "-ms-flex-order:7;order:7;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-8",
   "declarations": "-ms-flex-order:8;order:8;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-9",
   "declarations": "-ms-flex-order:9;order:9;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-10",
   "declarations": "-ms-flex-order:10;order:10;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-11",
   "declarations": "-ms-flex-order:11;order:11;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".order-lg-12",
   "declarations": "-ms-flex-order:12;order:12;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-0",
   "declarations": "margin-left:0;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-1",
   "declarations": "margin-left:8.333333%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-2",
   "declarations": "margin-left:16.666667%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-3",
   "declarations": "margin-left:25%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-4",
   "declarations": "margin-left:33.333333%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-5",
   "declarations": "margin-left:41.666667%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-6",
   "declarations": "margin-left:50%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-7",
   "declarations": "margin-left:58.333333%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-8",
   "declarations": "margin-left:66.666667%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-9",
   "declarations": "margin-left:75%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-10",
   "declarations": "margin-left:83.333333%;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".offset-lg-11",
   "declarations": "margin-left:91.666667%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl",
   "declarations": "-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-auto",
   "declarations": "-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-1",
   "declarations": "-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-2",
   "declarations": "-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-3",
   "declarations": "-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-4",
   "declarations": "-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-5",
   "declarations": "-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-6",
   "declarations": "-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-7",
   "declarations": "-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-8",
   "declarations": "-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-9",
   "declarations": "-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-10",
   "declarations": "-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-11",
   "declarations": "-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".col-xl-12",
   "declarations": "-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-first",
   "declarations": "-ms-flex-order:-1;order:-1;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-1",
   "declarations": "-ms-flex-order:1;order:1;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-2",
   "declarations": "-ms-flex-order:2;order:2;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-3",
   "declarations": "-ms-flex-order:3;order:3;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-4",
   "declarations": "-ms-flex-order:4;order:4;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-5",
   "declarations": "-ms-flex-order:5;order:5;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-6",
   "declarations": "-ms-flex-order:6;order:6;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-7",
   "declarations": "-ms-flex-order:7;order:7;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-8",
   "declarations": "-ms-flex-order:8;order:8;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-9",
   "declarations": "-ms-flex-order:9;order:9;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-10",
   "declarations": "-ms-flex-order:10;order:10;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-11",
   "declarations": "-ms-flex-order:11;order:11;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".order-xl-12",
   "declarations": "-ms-flex-order:12;order:12;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-0",
   "declarations": "margin-left:0;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-1",
   "declarations": "margin-left:8.333333%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-2",
   "declarations": "margin-left:16.666667%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-3",
   "declarations": "margin-left:25%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-4",
   "declarations": "margin-left:33.333333%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-5",
   "declarations": "margin-left:41.666667%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-6",
   "declarations": "margin-left:50%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-7",
   "declarations": "margin-left:58.333333%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-8",
   "declarations": "margin-left:66.666667%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-9",
   "declarations": "margin-left:75%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-10",
   "declarations": "margin-left:83.333333%;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".offset-xl-11",
   "declarations": "margin-left:91.666667%;"
 },
 {
   "media": "none",
   "selector": ".table",
   "declarations": "width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".table th",
   "declarations": "padding:0.75rem;vertical-align:top;border-top:1px solid #e9ecef;"
 },
 {
   "media": "none",
   "selector": ".table td",
   "declarations": "padding:0.75rem;vertical-align:top;border-top:1px solid #e9ecef;"
 },
 {
   "media": "none",
   "selector": ".table thead th",
   "declarations": "vertical-align:bottom;border-bottom:2px solid #e9ecef;"
 },
 {
   "media": "none",
   "selector": ".table tbody + tbody",
   "declarations": "border-top:2px solid #e9ecef;"
 },
 {
   "media": "none",
   "selector": ".table .table",
   "declarations": "background-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".table-sm th",
   "declarations": "padding:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".table-sm td",
   "declarations": "padding:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".table-bordered",
   "declarations": "border:1px solid #e9ecef;"
 },
 {
   "media": "none",
   "selector": ".table-bordered th",
   "declarations": "border:1px solid #e9ecef;"
 },
 {
   "media": "none",
   "selector": ".table-bordered td",
   "declarations": "border:1px solid #e9ecef;"
 },
 {
   "media": "none",
   "selector": ".table-bordered thead th",
   "declarations": "border-bottom-width:2px;"
 },
 {
   "media": "none",
   "selector": ".table-bordered thead td",
   "declarations": "border-bottom-width:2px;"
 },
 {
   "media": "none",
   "selector": ".table-striped tbody tr:nth-of-type(odd)",
   "declarations": "background-color:rgba(0, 0, 0, 0.05);"
 },
 {
   "media": "none",
   "selector": ".table-hover tbody tr:hover",
   "declarations": "background-color:rgba(0, 0, 0, 0.075);"
 },
 {
   "media": "none",
   "selector": ".table-primary",
   "declarations": "background-color:#b8daff;"
 },
 {
   "media": "none",
   "selector": ".table-primary > th",
   "declarations": "background-color:#b8daff;"
 },
 {
   "media": "none",
   "selector": ".table-primary > td",
   "declarations": "background-color:#b8daff;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-primary:hover",
   "declarations": "background-color:#9fcdff;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-primary:hover > td",
   "declarations": "background-color:#9fcdff;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-primary:hover > th",
   "declarations": "background-color:#9fcdff;"
 },
 {
   "media": "none",
   "selector": ".table-secondary",
   "declarations": "background-color:#dddfe2;"
 },
 {
   "media": "none",
   "selector": ".table-secondary > th",
   "declarations": "background-color:#dddfe2;"
 },
 {
   "media": "none",
   "selector": ".table-secondary > td",
   "declarations": "background-color:#dddfe2;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-secondary:hover",
   "declarations": "background-color:#cfd2d6;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-secondary:hover > td",
   "declarations": "background-color:#cfd2d6;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-secondary:hover > th",
   "declarations": "background-color:#cfd2d6;"
 },
 {
   "media": "none",
   "selector": ".table-success",
   "declarations": "background-color:#c3e6cb;"
 },
 {
   "media": "none",
   "selector": ".table-success > th",
   "declarations": "background-color:#c3e6cb;"
 },
 {
   "media": "none",
   "selector": ".table-success > td",
   "declarations": "background-color:#c3e6cb;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-success:hover",
   "declarations": "background-color:#b1dfbb;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-success:hover > td",
   "declarations": "background-color:#b1dfbb;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-success:hover > th",
   "declarations": "background-color:#b1dfbb;"
 },
 {
   "media": "none",
   "selector": ".table-info",
   "declarations": "background-color:#bee5eb;"
 },
 {
   "media": "none",
   "selector": ".table-info > th",
   "declarations": "background-color:#bee5eb;"
 },
 {
   "media": "none",
   "selector": ".table-info > td",
   "declarations": "background-color:#bee5eb;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-info:hover",
   "declarations": "background-color:#abdde5;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-info:hover > td",
   "declarations": "background-color:#abdde5;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-info:hover > th",
   "declarations": "background-color:#abdde5;"
 },
 {
   "media": "none",
   "selector": ".table-warning",
   "declarations": "background-color:#ffeeba;"
 },
 {
   "media": "none",
   "selector": ".table-warning > th",
   "declarations": "background-color:#ffeeba;"
 },
 {
   "media": "none",
   "selector": ".table-warning > td",
   "declarations": "background-color:#ffeeba;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-warning:hover",
   "declarations": "background-color:#ffe8a1;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-warning:hover > td",
   "declarations": "background-color:#ffe8a1;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-warning:hover > th",
   "declarations": "background-color:#ffe8a1;"
 },
 {
   "media": "none",
   "selector": ".table-danger",
   "declarations": "background-color:#f5c6cb;"
 },
 {
   "media": "none",
   "selector": ".table-danger > th",
   "declarations": "background-color:#f5c6cb;"
 },
 {
   "media": "none",
   "selector": ".table-danger > td",
   "declarations": "background-color:#f5c6cb;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-danger:hover",
   "declarations": "background-color:#f1b0b7;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-danger:hover > td",
   "declarations": "background-color:#f1b0b7;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-danger:hover > th",
   "declarations": "background-color:#f1b0b7;"
 },
 {
   "media": "none",
   "selector": ".table-light",
   "declarations": "background-color:#fdfdfe;"
 },
 {
   "media": "none",
   "selector": ".table-light > th",
   "declarations": "background-color:#fdfdfe;"
 },
 {
   "media": "none",
   "selector": ".table-light > td",
   "declarations": "background-color:#fdfdfe;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-light:hover",
   "declarations": "background-color:#ececf6;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-light:hover > td",
   "declarations": "background-color:#ececf6;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-light:hover > th",
   "declarations": "background-color:#ececf6;"
 },
 {
   "media": "none",
   "selector": ".table-dark",
   "declarations": "background-color:#c6c8ca;"
 },
 {
   "media": "none",
   "selector": ".table-dark > th",
   "declarations": "background-color:#c6c8ca;"
 },
 {
   "media": "none",
   "selector": ".table-dark > td",
   "declarations": "background-color:#c6c8ca;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-dark:hover",
   "declarations": "background-color:#b9bbbe;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-dark:hover > td",
   "declarations": "background-color:#b9bbbe;"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-dark:hover > th",
   "declarations": "background-color:#b9bbbe;"
 },
 {
   "media": "none",
   "selector": ".table-active",
   "declarations": "background-color:rgba(0, 0, 0, 0.075);"
 },
 {
   "media": "none",
   "selector": ".table-active > th",
   "declarations": "background-color:rgba(0, 0, 0, 0.075);"
 },
 {
   "media": "none",
   "selector": ".table-active > td",
   "declarations": "background-color:rgba(0, 0, 0, 0.075);"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-active:hover",
   "declarations": "background-color:rgba(0, 0, 0, 0.075);"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-active:hover > td",
   "declarations": "background-color:rgba(0, 0, 0, 0.075);"
 },
 {
   "media": "none",
   "selector": ".table-hover .table-active:hover > th",
   "declarations": "background-color:rgba(0, 0, 0, 0.075);"
 },
 {
   "media": "none",
   "selector": ".table .thead-dark th",
   "declarations": "color:#fff;background-color:#212529;border-color:#32383e;"
 },
 {
   "media": "none",
   "selector": ".table .thead-light th",
   "declarations": "color:#495057;background-color:#e9ecef;border-color:#e9ecef;"
 },
 {
   "media": "none",
   "selector": ".table-dark",
   "declarations": "color:#fff;background-color:#212529;"
 },
 {
   "media": "none",
   "selector": ".table-dark th",
   "declarations": "border-color:#32383e;"
 },
 {
   "media": "none",
   "selector": ".table-dark td",
   "declarations": "border-color:#32383e;"
 },
 {
   "media": "none",
   "selector": ".table-dark thead th",
   "declarations": "border-color:#32383e;"
 },
 {
   "media": "none",
   "selector": ".table-dark.table-bordered",
   "declarations": "border:0;"
 },
 {
   "media": "none",
   "selector": ".table-dark.table-striped tbody tr:nth-of-type(odd)",
   "declarations": "background-color:rgba(255, 255, 255, 0.05);"
 },
 {
   "media": "none",
   "selector": ".table-dark.table-hover tbody tr:hover",
   "declarations": "background-color:rgba(255, 255, 255, 0.075);"
 },
 {
   "media": "@media (max-width:575px)",
   "selector": ".table-responsive-sm",
   "declarations": "display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;"
 },
 {
   "media": "@media (max-width:575px)",
   "selector": ".table-responsive-sm.table-bordered",
   "declarations": "border:0;"
 },
 {
   "media": "@media (max-width:767px)",
   "selector": ".table-responsive-md",
   "declarations": "display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;"
 },
 {
   "media": "@media (max-width:767px)",
   "selector": ".table-responsive-md.table-bordered",
   "declarations": "border:0;"
 },
 {
   "media": "@media (max-width:991px)",
   "selector": ".table-responsive-lg",
   "declarations": "display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;"
 },
 {
   "media": "@media (max-width:991px)",
   "selector": ".table-responsive-lg.table-bordered",
   "declarations": "border:0;"
 },
 {
   "media": "@media (max-width:1199px)",
   "selector": ".table-responsive-xl",
   "declarations": "display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;"
 },
 {
   "media": "@media (max-width:1199px)",
   "selector": ".table-responsive-xl.table-bordered",
   "declarations": "border:0;"
 },
 {
   "media": "none",
   "selector": ".table-responsive",
   "declarations": "display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;"
 },
 {
   "media": "none",
   "selector": ".table-responsive.table-bordered",
   "declarations": "border:0;"
 },
 {
   "media": "none",
   "selector": ".form-control",
   "declarations": "display:block;width:100%;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-image:none;background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem;transition:border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;"
 },
 {
   "media": "none",
   "selector": ".form-control::-ms-expand",
   "declarations": "background-color:transparent;border:0;"
 },
 {
   "media": "none",
   "selector": ".form-control:focus",
   "declarations": "color:#495057;background-color:#fff;border-color:#80bdff;outline:none;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.25);"
 },
 {
   "media": "none",
   "selector": ".form-control::-webkit-input-placeholder",
   "declarations": "color:#868e96;opacity:1;"
 },
 {
   "media": "none",
   "selector": ".form-control:-ms-input-placeholder",
   "declarations": "color:#868e96;opacity:1;"
 },
 {
   "media": "none",
   "selector": ".form-control::-ms-input-placeholder",
   "declarations": "color:#868e96;opacity:1;"
 },
 {
   "media": "none",
   "selector": ".form-control::placeholder",
   "declarations": "color:#868e96;opacity:1;"
 },
 {
   "media": "none",
   "selector": ".form-control:disabled",
   "declarations": "background-color:#e9ecef;opacity:1;"
 },
 {
   "media": "none",
   "selector": ".form-control[readonly]",
   "declarations": "background-color:#e9ecef;opacity:1;"
 },
 {
   "media": "none",
   "selector": "select.form-control:not([size]):not([multiple])",
   "declarations": "height:calc(2.25rem + 2px);"
 },
 {
   "media": "none",
   "selector": "select.form-control:focus::-ms-value",
   "declarations": "color:#495057;background-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".form-control-file",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".form-control-range",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".col-form-label",
   "declarations": "padding-top:calc(0.375rem + 1px);padding-bottom:calc(0.375rem + 1px);margin-bottom:0;line-height:1.5;"
 },
 {
   "media": "none",
   "selector": ".col-form-label-lg",
   "declarations": "padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.25rem;line-height:1.5;"
 },
 {
   "media": "none",
   "selector": ".col-form-label-sm",
   "declarations": "padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.875rem;line-height:1.5;"
 },
 {
   "media": "none",
   "selector": ".col-form-legend",
   "declarations": "padding-top:0.375rem;padding-bottom:0.375rem;margin-bottom:0;font-size:1rem;"
 },
 {
   "media": "none",
   "selector": ".form-control-plaintext",
   "declarations": "padding-top:0.375rem;padding-bottom:0.375rem;margin-bottom:0;line-height:1.5;background-color:transparent;border:solid transparent;border-width:1px 0;"
 },
 {
   "media": "none",
   "selector": ".form-control-plaintext.form-control-sm",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > .form-control-plaintext.form-control",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > .form-control-plaintext.input-group-addon",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > .input-group-btn > .form-control-plaintext.btn",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".form-control-plaintext.form-control-lg",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > .form-control-plaintext.form-control",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > .form-control-plaintext.input-group-addon",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > .input-group-btn > .form-control-plaintext.btn",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".form-control-sm",
   "declarations": "padding:0.25rem 0.5rem;font-size:0.875rem;line-height:1.5;border-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > .form-control",
   "declarations": "padding:0.25rem 0.5rem;font-size:0.875rem;line-height:1.5;border-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > .input-group-addon",
   "declarations": "padding:0.25rem 0.5rem;font-size:0.875rem;line-height:1.5;border-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > .input-group-btn > .btn",
   "declarations": "padding:0.25rem 0.5rem;font-size:0.875rem;line-height:1.5;border-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": "select.form-control-sm:not([size]):not([multiple])",
   "declarations": "height:calc(1.8125rem + 2px);"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > select.form-control:not([size]):not([multiple])",
   "declarations": "height:calc(1.8125rem + 2px);"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > select.input-group-addon:not([size]):not([multiple])",
   "declarations": "height:calc(1.8125rem + 2px);"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple])",
   "declarations": "height:calc(1.8125rem + 2px);"
 },
 {
   "media": "none",
   "selector": ".form-control-lg",
   "declarations": "padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > .form-control",
   "declarations": "padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > .input-group-addon",
   "declarations": "padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > .input-group-btn > .btn",
   "declarations": "padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": "select.form-control-lg:not([size]):not([multiple])",
   "declarations": "height:calc(2.875rem + 2px);"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > select.form-control:not([size]):not([multiple])",
   "declarations": "height:calc(2.875rem + 2px);"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > select.input-group-addon:not([size]):not([multiple])",
   "declarations": "height:calc(2.875rem + 2px);"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple])",
   "declarations": "height:calc(2.875rem + 2px);"
 },
 {
   "media": "none",
   "selector": ".form-group",
   "declarations": "margin-bottom:1rem;"
 },
 {
   "media": "none",
   "selector": ".form-text",
   "declarations": "display:block;margin-top:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".form-row",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px;"
 },
 {
   "media": "none",
   "selector": ".form-row > .col",
   "declarations": "padding-right:5px;padding-left:5px;"
 },
 {
   "media": "none",
   "selector": ".form-row > [class*=\"col-\"]",
   "declarations": "padding-right:5px;padding-left:5px;"
 },
 {
   "media": "none",
   "selector": ".form-check",
   "declarations": "position:relative;display:block;margin-bottom:0.5rem;"
 },
 {
   "media": "none",
   "selector": ".form-check.disabled .form-check-label",
   "declarations": "color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".form-check-label",
   "declarations": "padding-left:1.25rem;margin-bottom:0;"
 },
 {
   "media": "none",
   "selector": ".form-check-input",
   "declarations": "position:absolute;margin-top:0.25rem;margin-left:-1.25rem;"
 },
 {
   "media": "none",
   "selector": ".form-check-inline",
   "declarations": "display:inline-block;margin-right:0.75rem;"
 },
 {
   "media": "none",
   "selector": ".form-check-inline .form-check-label",
   "declarations": "vertical-align:middle;"
 },
 {
   "media": "none",
   "selector": ".valid-feedback",
   "declarations": "display:none;margin-top:.25rem;font-size:.875rem;color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".valid-tooltip",
   "declarations": "position:absolute;top:100%;z-index:5;display:none;width:250px;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(40, 167, 69, 0.8);border-radius:.2rem;"
 },
 {
   "media": "none",
   "selector": ".was-validated .form-control:valid",
   "declarations": "border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".form-control.is-valid",
   "declarations": "border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".was-validated",
   "declarations": "border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".custom-select:valid",
   "declarations": "border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".custom-select.is-valid",
   "declarations": "border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".was-validated .form-control:valid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".form-control.is-valid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".was-validated",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".custom-select:valid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".custom-select.is-valid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".was-validated .form-control:valid ~ .valid-feedback",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".was-validated .form-control:valid ~ .valid-tooltip",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".form-control.is-valid ~ .valid-feedback",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".form-control.is-valid ~ .valid-tooltip",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".was-validated",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".custom-select:valid ~ .valid-feedback",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".was-validated",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".custom-select:valid ~ .valid-tooltip",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".custom-select.is-valid ~ .valid-feedback",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".custom-select.is-valid ~ .valid-tooltip",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".was-validated .form-check-input:valid + .form-check-label",
   "declarations": "color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".form-check-input.is-valid + .form-check-label",
   "declarations": "color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".was-validated .custom-control-input:valid ~ .custom-control-indicator",
   "declarations": "background-color:rgba(40, 167, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".custom-control-input.is-valid ~ .custom-control-indicator",
   "declarations": "background-color:rgba(40, 167, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".was-validated .custom-control-input:valid ~ .custom-control-description",
   "declarations": "color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".custom-control-input.is-valid ~ .custom-control-description",
   "declarations": "color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".was-validated .custom-file-input:valid ~ .custom-file-control",
   "declarations": "border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".custom-file-input.is-valid ~ .custom-file-control",
   "declarations": "border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".was-validated .custom-file-input:valid ~ .custom-file-control::before",
   "declarations": "border-color:inherit;"
 },
 {
   "media": "none",
   "selector": ".custom-file-input.is-valid ~ .custom-file-control::before",
   "declarations": "border-color:inherit;"
 },
 {
   "media": "none",
   "selector": ".was-validated .custom-file-input:valid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".custom-file-input.is-valid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".invalid-feedback",
   "declarations": "display:none;margin-top:.25rem;font-size:.875rem;color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".invalid-tooltip",
   "declarations": "position:absolute;top:100%;z-index:5;display:none;width:250px;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(220, 53, 69, 0.8);border-radius:.2rem;"
 },
 {
   "media": "none",
   "selector": ".was-validated .form-control:invalid",
   "declarations": "border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".form-control.is-invalid",
   "declarations": "border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".was-validated",
   "declarations": "border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".custom-select:invalid",
   "declarations": "border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".custom-select.is-invalid",
   "declarations": "border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".was-validated .form-control:invalid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".form-control.is-invalid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".was-validated",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".custom-select:invalid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".custom-select.is-invalid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".was-validated .form-control:invalid ~ .invalid-feedback",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".was-validated .form-control:invalid ~ .invalid-tooltip",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".form-control.is-invalid ~ .invalid-feedback",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".form-control.is-invalid ~ .invalid-tooltip",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".was-validated",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".custom-select:invalid ~ .invalid-feedback",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".was-validated",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".custom-select:invalid ~ .invalid-tooltip",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".custom-select.is-invalid ~ .invalid-feedback",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".custom-select.is-invalid ~ .invalid-tooltip",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".was-validated .form-check-input:invalid + .form-check-label",
   "declarations": "color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".form-check-input.is-invalid + .form-check-label",
   "declarations": "color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".was-validated .custom-control-input:invalid ~ .custom-control-indicator",
   "declarations": "background-color:rgba(220, 53, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".custom-control-input.is-invalid ~ .custom-control-indicator",
   "declarations": "background-color:rgba(220, 53, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".was-validated .custom-control-input:invalid ~ .custom-control-description",
   "declarations": "color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".custom-control-input.is-invalid ~ .custom-control-description",
   "declarations": "color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".was-validated .custom-file-input:invalid ~ .custom-file-control",
   "declarations": "border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".custom-file-input.is-invalid ~ .custom-file-control",
   "declarations": "border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".was-validated .custom-file-input:invalid ~ .custom-file-control::before",
   "declarations": "border-color:inherit;"
 },
 {
   "media": "none",
   "selector": ".custom-file-input.is-invalid ~ .custom-file-control::before",
   "declarations": "border-color:inherit;"
 },
 {
   "media": "none",
   "selector": ".was-validated .custom-file-input:invalid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".custom-file-input.is-invalid:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.25);"
 },
 {
   "media": "none",
   "selector": ".form-inline",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;"
 },
 {
   "media": "none",
   "selector": ".form-inline .form-check",
   "declarations": "width:100%;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline label",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline .form-group",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;margin-bottom:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline .form-control",
   "declarations": "display:inline-block;width:auto;vertical-align:middle;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline .form-control-plaintext",
   "declarations": "display:inline-block;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline .input-group",
   "declarations": "width:auto;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline .form-check",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;margin-top:0;margin-bottom:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline .form-check-label",
   "declarations": "padding-left:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline .form-check-input",
   "declarations": "position:relative;margin-top:0;margin-right:0.25rem;margin-left:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline .custom-control",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-left:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline .custom-control-indicator",
   "declarations": "position:static;display:inline-block;margin-right:0.25rem;vertical-align:text-bottom;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".form-inline .has-feedback .form-control-feedback",
   "declarations": "top:0;"
 },
 {
   "media": "none",
   "selector": ".btn",
   "declarations": "display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;"
 },
 {
   "media": "none",
   "selector": ".btn:focus",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".btn:hover",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".btn:focus",
   "declarations": "outline:0;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.25);"
 },
 {
   "media": "none",
   "selector": ".btn.focus",
   "declarations": "outline:0;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.25);"
 },
 {
   "media": "none",
   "selector": ".btn.disabled",
   "declarations": "opacity:.65;"
 },
 {
   "media": "none",
   "selector": ".btn:disabled",
   "declarations": "opacity:.65;"
 },
 {
   "media": "none",
   "selector": ".btn:not([disabled]):not(.disabled):active",
   "declarations": "background-image:none;"
 },
 {
   "media": "none",
   "selector": ".btn:not([disabled]):not(.disabled).active",
   "declarations": "background-image:none;"
 },
 {
   "media": "none",
   "selector": "a.btn.disabled",
   "declarations": "pointer-events:none;"
 },
 {
   "media": "none",
   "selector": "fieldset[disabled] a.btn",
   "declarations": "pointer-events:none;"
 },
 {
   "media": "none",
   "selector": ".btn-primary",
   "declarations": "color:#fff;background-color:#007bff;border-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".btn-primary:hover",
   "declarations": "color:#fff;background-color:#0069d9;border-color:#0062cc;"
 },
 {
   "media": "none",
   "selector": ".btn-primary:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-primary.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-primary.disabled",
   "declarations": "background-color:#007bff;border-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".btn-primary:disabled",
   "declarations": "background-color:#007bff;border-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".btn-primary:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#0062cc;border-color:#005cbf;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-primary:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#0062cc;border-color:#005cbf;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-primary.dropdown-toggle",
   "declarations": "color:#fff;background-color:#0062cc;border-color:#005cbf;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-secondary",
   "declarations": "color:#fff;background-color:#868e96;border-color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".btn-secondary:hover",
   "declarations": "color:#fff;background-color:#727b84;border-color:#6c757d;"
 },
 {
   "media": "none",
   "selector": ".btn-secondary:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(134, 142, 150, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-secondary.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(134, 142, 150, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-secondary.disabled",
   "declarations": "background-color:#868e96;border-color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".btn-secondary:disabled",
   "declarations": "background-color:#868e96;border-color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".btn-secondary:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#6c757d;border-color:#666e76;box-shadow:0 0 0 0.2rem rgba(134, 142, 150, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-secondary:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#6c757d;border-color:#666e76;box-shadow:0 0 0 0.2rem rgba(134, 142, 150, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-secondary.dropdown-toggle",
   "declarations": "color:#fff;background-color:#6c757d;border-color:#666e76;box-shadow:0 0 0 0.2rem rgba(134, 142, 150, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-success",
   "declarations": "color:#fff;background-color:#28a745;border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".btn-success:hover",
   "declarations": "color:#fff;background-color:#218838;border-color:#1e7e34;"
 },
 {
   "media": "none",
   "selector": ".btn-success:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-success.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-success.disabled",
   "declarations": "background-color:#28a745;border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".btn-success:disabled",
   "declarations": "background-color:#28a745;border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".btn-success:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#1e7e34;border-color:#1c7430;box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-success:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#1e7e34;border-color:#1c7430;box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-success.dropdown-toggle",
   "declarations": "color:#fff;background-color:#1e7e34;border-color:#1c7430;box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-info",
   "declarations": "color:#fff;background-color:#17a2b8;border-color:#17a2b8;"
 },
 {
   "media": "none",
   "selector": ".btn-info:hover",
   "declarations": "color:#fff;background-color:#138496;border-color:#117a8b;"
 },
 {
   "media": "none",
   "selector": ".btn-info:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(23, 162, 184, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-info.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(23, 162, 184, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-info.disabled",
   "declarations": "background-color:#17a2b8;border-color:#17a2b8;"
 },
 {
   "media": "none",
   "selector": ".btn-info:disabled",
   "declarations": "background-color:#17a2b8;border-color:#17a2b8;"
 },
 {
   "media": "none",
   "selector": ".btn-info:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#117a8b;border-color:#10707f;box-shadow:0 0 0 0.2rem rgba(23, 162, 184, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-info:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#117a8b;border-color:#10707f;box-shadow:0 0 0 0.2rem rgba(23, 162, 184, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-info.dropdown-toggle",
   "declarations": "color:#fff;background-color:#117a8b;border-color:#10707f;box-shadow:0 0 0 0.2rem rgba(23, 162, 184, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-warning",
   "declarations": "color:#111;background-color:#ffc107;border-color:#ffc107;"
 },
 {
   "media": "none",
   "selector": ".btn-warning:hover",
   "declarations": "color:#111;background-color:#e0a800;border-color:#d39e00;"
 },
 {
   "media": "none",
   "selector": ".btn-warning:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-warning.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-warning.disabled",
   "declarations": "background-color:#ffc107;border-color:#ffc107;"
 },
 {
   "media": "none",
   "selector": ".btn-warning:disabled",
   "declarations": "background-color:#ffc107;border-color:#ffc107;"
 },
 {
   "media": "none",
   "selector": ".btn-warning:not([disabled]):not(.disabled):active",
   "declarations": "color:#111;background-color:#d39e00;border-color:#c69500;box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-warning:not([disabled]):not(.disabled).active",
   "declarations": "color:#111;background-color:#d39e00;border-color:#c69500;box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-warning.dropdown-toggle",
   "declarations": "color:#111;background-color:#d39e00;border-color:#c69500;box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-danger",
   "declarations": "color:#fff;background-color:#dc3545;border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".btn-danger:hover",
   "declarations": "color:#fff;background-color:#c82333;border-color:#bd2130;"
 },
 {
   "media": "none",
   "selector": ".btn-danger:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-danger.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-danger.disabled",
   "declarations": "background-color:#dc3545;border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".btn-danger:disabled",
   "declarations": "background-color:#dc3545;border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".btn-danger:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#bd2130;border-color:#b21f2d;box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-danger:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#bd2130;border-color:#b21f2d;box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-danger.dropdown-toggle",
   "declarations": "color:#fff;background-color:#bd2130;border-color:#b21f2d;box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-light",
   "declarations": "color:#111;background-color:#f8f9fa;border-color:#f8f9fa;"
 },
 {
   "media": "none",
   "selector": ".btn-light:hover",
   "declarations": "color:#111;background-color:#e2e6ea;border-color:#dae0e5;"
 },
 {
   "media": "none",
   "selector": ".btn-light:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(248, 249, 250, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-light.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(248, 249, 250, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-light.disabled",
   "declarations": "background-color:#f8f9fa;border-color:#f8f9fa;"
 },
 {
   "media": "none",
   "selector": ".btn-light:disabled",
   "declarations": "background-color:#f8f9fa;border-color:#f8f9fa;"
 },
 {
   "media": "none",
   "selector": ".btn-light:not([disabled]):not(.disabled):active",
   "declarations": "color:#111;background-color:#dae0e5;border-color:#d3d9df;box-shadow:0 0 0 0.2rem rgba(248, 249, 250, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-light:not([disabled]):not(.disabled).active",
   "declarations": "color:#111;background-color:#dae0e5;border-color:#d3d9df;box-shadow:0 0 0 0.2rem rgba(248, 249, 250, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-light.dropdown-toggle",
   "declarations": "color:#111;background-color:#dae0e5;border-color:#d3d9df;box-shadow:0 0 0 0.2rem rgba(248, 249, 250, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-dark",
   "declarations": "color:#fff;background-color:#343a40;border-color:#343a40;"
 },
 {
   "media": "none",
   "selector": ".btn-dark:hover",
   "declarations": "color:#fff;background-color:#23272b;border-color:#1d2124;"
 },
 {
   "media": "none",
   "selector": ".btn-dark:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(52, 58, 64, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-dark.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(52, 58, 64, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-dark.disabled",
   "declarations": "background-color:#343a40;border-color:#343a40;"
 },
 {
   "media": "none",
   "selector": ".btn-dark:disabled",
   "declarations": "background-color:#343a40;border-color:#343a40;"
 },
 {
   "media": "none",
   "selector": ".btn-dark:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#1d2124;border-color:#171a1d;box-shadow:0 0 0 0.2rem rgba(52, 58, 64, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-dark:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#1d2124;border-color:#171a1d;box-shadow:0 0 0 0.2rem rgba(52, 58, 64, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-dark.dropdown-toggle",
   "declarations": "color:#fff;background-color:#1d2124;border-color:#171a1d;box-shadow:0 0 0 0.2rem rgba(52, 58, 64, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-primary",
   "declarations": "color:#007bff;background-color:transparent;background-image:none;border-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-primary:hover",
   "declarations": "color:#fff;background-color:#007bff;border-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-primary:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-primary.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-primary.disabled",
   "declarations": "color:#007bff;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-primary:disabled",
   "declarations": "color:#007bff;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-primary:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#007bff;border-color:#007bff;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-primary:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#007bff;border-color:#007bff;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-outline-primary.dropdown-toggle",
   "declarations": "color:#fff;background-color:#007bff;border-color:#007bff;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-secondary",
   "declarations": "color:#868e96;background-color:transparent;background-image:none;border-color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-secondary:hover",
   "declarations": "color:#fff;background-color:#868e96;border-color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-secondary:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(134, 142, 150, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-secondary.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(134, 142, 150, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-secondary.disabled",
   "declarations": "color:#868e96;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-secondary:disabled",
   "declarations": "color:#868e96;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-secondary:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#868e96;border-color:#868e96;box-shadow:0 0 0 0.2rem rgba(134, 142, 150, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-secondary:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#868e96;border-color:#868e96;box-shadow:0 0 0 0.2rem rgba(134, 142, 150, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-outline-secondary.dropdown-toggle",
   "declarations": "color:#fff;background-color:#868e96;border-color:#868e96;box-shadow:0 0 0 0.2rem rgba(134, 142, 150, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-success",
   "declarations": "color:#28a745;background-color:transparent;background-image:none;border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-success:hover",
   "declarations": "color:#fff;background-color:#28a745;border-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-success:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-success.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-success.disabled",
   "declarations": "color:#28a745;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-success:disabled",
   "declarations": "color:#28a745;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-success:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#28a745;border-color:#28a745;box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-success:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#28a745;border-color:#28a745;box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-outline-success.dropdown-toggle",
   "declarations": "color:#fff;background-color:#28a745;border-color:#28a745;box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-info",
   "declarations": "color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-info:hover",
   "declarations": "color:#fff;background-color:#17a2b8;border-color:#17a2b8;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-info:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(23, 162, 184, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-info.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(23, 162, 184, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-info.disabled",
   "declarations": "color:#17a2b8;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-info:disabled",
   "declarations": "color:#17a2b8;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-info:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#17a2b8;border-color:#17a2b8;box-shadow:0 0 0 0.2rem rgba(23, 162, 184, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-info:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#17a2b8;border-color:#17a2b8;box-shadow:0 0 0 0.2rem rgba(23, 162, 184, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-outline-info.dropdown-toggle",
   "declarations": "color:#fff;background-color:#17a2b8;border-color:#17a2b8;box-shadow:0 0 0 0.2rem rgba(23, 162, 184, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-warning",
   "declarations": "color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-warning:hover",
   "declarations": "color:#fff;background-color:#ffc107;border-color:#ffc107;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-warning:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-warning.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-warning.disabled",
   "declarations": "color:#ffc107;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-warning:disabled",
   "declarations": "color:#ffc107;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-warning:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#ffc107;border-color:#ffc107;box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-warning:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#ffc107;border-color:#ffc107;box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-outline-warning.dropdown-toggle",
   "declarations": "color:#fff;background-color:#ffc107;border-color:#ffc107;box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-danger",
   "declarations": "color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-danger:hover",
   "declarations": "color:#fff;background-color:#dc3545;border-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-danger:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-danger.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-danger.disabled",
   "declarations": "color:#dc3545;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-danger:disabled",
   "declarations": "color:#dc3545;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-danger:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-danger:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-outline-danger.dropdown-toggle",
   "declarations": "color:#fff;background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-light",
   "declarations": "color:#f8f9fa;background-color:transparent;background-image:none;border-color:#f8f9fa;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-light:hover",
   "declarations": "color:#212529;background-color:#f8f9fa;border-color:#f8f9fa;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-light:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(248, 249, 250, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-light.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(248, 249, 250, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-light.disabled",
   "declarations": "color:#f8f9fa;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-light:disabled",
   "declarations": "color:#f8f9fa;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-light:not([disabled]):not(.disabled):active",
   "declarations": "color:#212529;background-color:#f8f9fa;border-color:#f8f9fa;box-shadow:0 0 0 0.2rem rgba(248, 249, 250, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-light:not([disabled]):not(.disabled).active",
   "declarations": "color:#212529;background-color:#f8f9fa;border-color:#f8f9fa;box-shadow:0 0 0 0.2rem rgba(248, 249, 250, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-outline-light.dropdown-toggle",
   "declarations": "color:#212529;background-color:#f8f9fa;border-color:#f8f9fa;box-shadow:0 0 0 0.2rem rgba(248, 249, 250, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-dark",
   "declarations": "color:#343a40;background-color:transparent;background-image:none;border-color:#343a40;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-dark:hover",
   "declarations": "color:#fff;background-color:#343a40;border-color:#343a40;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-dark:focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(52, 58, 64, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-dark.focus",
   "declarations": "box-shadow:0 0 0 0.2rem rgba(52, 58, 64, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-dark.disabled",
   "declarations": "color:#343a40;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-dark:disabled",
   "declarations": "color:#343a40;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-outline-dark:not([disabled]):not(.disabled):active",
   "declarations": "color:#fff;background-color:#343a40;border-color:#343a40;box-shadow:0 0 0 0.2rem rgba(52, 58, 64, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-outline-dark:not([disabled]):not(.disabled).active",
   "declarations": "color:#fff;background-color:#343a40;border-color:#343a40;box-shadow:0 0 0 0.2rem rgba(52, 58, 64, 0.5);"
 },
 {
   "media": "none",
   "selector": ".show > .btn-outline-dark.dropdown-toggle",
   "declarations": "color:#fff;background-color:#343a40;border-color:#343a40;box-shadow:0 0 0 0.2rem rgba(52, 58, 64, 0.5);"
 },
 {
   "media": "none",
   "selector": ".btn-link",
   "declarations": "font-weight:400;color:#007bff;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-link:hover",
   "declarations": "color:#0056b3;text-decoration:underline;background-color:transparent;border-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".btn-link:focus",
   "declarations": "border-color:transparent;box-shadow:none;"
 },
 {
   "media": "none",
   "selector": ".btn-link.focus",
   "declarations": "border-color:transparent;box-shadow:none;"
 },
 {
   "media": "none",
   "selector": ".btn-link:disabled",
   "declarations": "color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".btn-link.disabled",
   "declarations": "color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".btn-lg",
   "declarations": "padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".btn-group-lg > .btn",
   "declarations": "padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".btn-sm",
   "declarations": "padding:0.25rem 0.5rem;font-size:0.875rem;line-height:1.5;border-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": ".btn-group-sm > .btn",
   "declarations": "padding:0.25rem 0.5rem;font-size:0.875rem;line-height:1.5;border-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": ".btn-block",
   "declarations": "display:block;width:100%;"
 },
 {
   "media": "none",
   "selector": ".btn-block + .btn-block",
   "declarations": "margin-top:0.5rem;"
 },
 {
   "media": "none",
   "selector": "input[type=\"submit\"].btn-block",
   "declarations": "width:100%;"
 },
 {
   "media": "none",
   "selector": "input[type=\"reset\"].btn-block",
   "declarations": "width:100%;"
 },
 {
   "media": "none",
   "selector": "input[type=\"button\"].btn-block",
   "declarations": "width:100%;"
 },
 {
   "media": "none",
   "selector": ".fade",
   "declarations": "opacity:0;transition:opacity 0.15s linear;"
 },
 {
   "media": "none",
   "selector": ".fade.show",
   "declarations": "opacity:1;"
 },
 {
   "media": "none",
   "selector": ".collapse",
   "declarations": "display:none;"
 },
 {
   "media": "none",
   "selector": ".collapse.show",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": "tr.collapse.show",
   "declarations": "display:table-row;"
 },
 {
   "media": "none",
   "selector": "tbody.collapse.show",
   "declarations": "display:table-row-group;"
 },
 {
   "media": "none",
   "selector": ".collapsing",
   "declarations": "position:relative;height:0;overflow:hidden;transition:height 0.35s ease;"
 },
 {
   "media": "none",
   "selector": ".dropup",
   "declarations": "position:relative;"
 },
 {
   "media": "none",
   "selector": ".dropdown",
   "declarations": "position:relative;"
 },
 {
   "media": "none",
   "selector": ".dropdown-toggle::after",
   "declarations": "display:inline-block;width:0;height:0;margin-left:0.255em;vertical-align:0.255em;content:\"\";border-top:0.3em solid;border-right:0.3em solid transparent;border-bottom:0;border-left:0.3em solid transparent;"
 },
 {
   "media": "none",
   "selector": ".dropdown-toggle:empty::after",
   "declarations": "margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".dropdown-menu",
   "declarations": "position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:0.5rem 0;margin:0.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 0, 0, 0.15);border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".dropup .dropdown-menu",
   "declarations": "margin-top:0;margin-bottom:0.125rem;"
 },
 {
   "media": "none",
   "selector": ".dropup .dropdown-toggle::after",
   "declarations": "display:inline-block;width:0;height:0;margin-left:0.255em;vertical-align:0.255em;content:\"\";border-top:0;border-right:0.3em solid transparent;border-bottom:0.3em solid;border-left:0.3em solid transparent;"
 },
 {
   "media": "none",
   "selector": ".dropup .dropdown-toggle:empty::after",
   "declarations": "margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".dropdown-divider",
   "declarations": "height:0;margin:0.5rem 0;overflow:hidden;border-top:1px solid #e9ecef;"
 },
 {
   "media": "none",
   "selector": ".dropdown-item",
   "declarations": "display:block;width:100%;padding:0.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background:none;border:0;"
 },
 {
   "media": "none",
   "selector": ".dropdown-item:focus",
   "declarations": "color:#16181b;text-decoration:none;background-color:#f8f9fa;"
 },
 {
   "media": "none",
   "selector": ".dropdown-item:hover",
   "declarations": "color:#16181b;text-decoration:none;background-color:#f8f9fa;"
 },
 {
   "media": "none",
   "selector": ".dropdown-item.active",
   "declarations": "color:#fff;text-decoration:none;background-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".dropdown-item:active",
   "declarations": "color:#fff;text-decoration:none;background-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".dropdown-item.disabled",
   "declarations": "color:#868e96;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".dropdown-item:disabled",
   "declarations": "color:#868e96;background-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".dropdown-menu.show",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".dropdown-header",
   "declarations": "display:block;padding:0.5rem 1.5rem;margin-bottom:0;font-size:0.875rem;color:#868e96;white-space:nowrap;"
 },
 {
   "media": "none",
   "selector": ".btn-group",
   "declarations": "position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical",
   "declarations": "position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn",
   "declarations": "position:relative;-ms-flex:0 1 auto;flex:0 1 auto;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn",
   "declarations": "position:relative;-ms-flex:0 1 auto;flex:0 1 auto;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn:hover",
   "declarations": "z-index:2;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn:hover",
   "declarations": "z-index:2;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn:focus",
   "declarations": "z-index:2;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn:active",
   "declarations": "z-index:2;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn.active",
   "declarations": "z-index:2;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn:focus",
   "declarations": "z-index:2;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn:active",
   "declarations": "z-index:2;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn.active",
   "declarations": "z-index:2;"
 },
 {
   "media": "none",
   "selector": ".btn-group .btn + .btn",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".btn-group .btn + .btn-group",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".btn-group .btn-group + .btn",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".btn-group .btn-group + .btn-group",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical .btn + .btn",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical .btn + .btn-group",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical .btn-group + .btn",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical .btn-group + .btn-group",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".btn-toolbar",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start;"
 },
 {
   "media": "none",
   "selector": ".btn-toolbar .input-group",
   "declarations": "width:auto;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle)",
   "declarations": "border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn:first-child",
   "declarations": "margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle)",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn:last-child:not(:first-child)",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .dropdown-toggle:not(:first-child)",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn-group",
   "declarations": "float:left;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn-group:not(:first-child):not(:last-child) > .btn",
   "declarations": "border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn + .dropdown-toggle-split",
   "declarations": "padding-right:0.5625rem;padding-left:0.5625rem;"
 },
 {
   "media": "none",
   "selector": ".btn + .dropdown-toggle-split::after",
   "declarations": "margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".btn-sm + .dropdown-toggle-split",
   "declarations": "padding-right:0.375rem;padding-left:0.375rem;"
 },
 {
   "media": "none",
   "selector": ".btn-group-sm > .btn + .dropdown-toggle-split",
   "declarations": "padding-right:0.375rem;padding-left:0.375rem;"
 },
 {
   "media": "none",
   "selector": ".btn-lg + .dropdown-toggle-split",
   "declarations": "padding-right:0.75rem;padding-left:0.75rem;"
 },
 {
   "media": "none",
   "selector": ".btn-group-lg > .btn + .dropdown-toggle-split",
   "declarations": "padding-right:0.75rem;padding-left:0.75rem;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical",
   "declarations": "-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical .btn",
   "declarations": "width:100%;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical .btn-group",
   "declarations": "width:100%;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn + .btn",
   "declarations": "margin-top:-1px;margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn + .btn-group",
   "declarations": "margin-top:-1px;margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn-group + .btn",
   "declarations": "margin-top:-1px;margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn-group + .btn-group",
   "declarations": "margin-top:-1px;margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn:not(:first-child):not(:last-child)",
   "declarations": "border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn:first-child:not(:last-child)",
   "declarations": "border-bottom-right-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn:last-child:not(:first-child)",
   "declarations": "border-top-left-radius:0;border-top-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn",
   "declarations": "border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child",
   "declarations": "border-bottom-right-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle",
   "declarations": "border-bottom-right-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child",
   "declarations": "border-top-left-radius:0;border-top-right-radius:0;"
 },
 {
   "media": "none",
   "selector": "[data-toggle=\"buttons\"] > .btn input[type=\"radio\"]",
   "declarations": "position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none;"
 },
 {
   "media": "none",
   "selector": "[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"]",
   "declarations": "position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none;"
 },
 {
   "media": "none",
   "selector": "[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"]",
   "declarations": "position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none;"
 },
 {
   "media": "none",
   "selector": "[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"]",
   "declarations": "position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none;"
 },
 {
   "media": "none",
   "selector": ".input-group",
   "declarations": "position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;width:100%;"
 },
 {
   "media": "none",
   "selector": ".input-group .form-control",
   "declarations": "position:relative;z-index:2;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0;"
 },
 {
   "media": "none",
   "selector": ".input-group .form-control:focus",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group .form-control:active",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group .form-control:hover",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;"
 },
 {
   "media": "none",
   "selector": ".input-group .form-control",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon:not(:first-child):not(:last-child)",
   "declarations": "border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child):not(:last-child)",
   "declarations": "border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group .form-control:not(:first-child):not(:last-child)",
   "declarations": "border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon",
   "declarations": "white-space:nowrap;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn",
   "declarations": "white-space:nowrap;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon",
   "declarations": "padding:0.375rem 0.75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;background-color:#e9ecef;border:1px solid #ced4da;border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon.form-control-sm",
   "declarations": "padding:0.25rem 0.5rem;font-size:0.875rem;border-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > .input-group-addon",
   "declarations": "padding:0.25rem 0.5rem;font-size:0.875rem;border-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-sm > .input-group-btn > .input-group-addon.btn",
   "declarations": "padding:0.25rem 0.5rem;font-size:0.875rem;border-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon.form-control-lg",
   "declarations": "padding:0.5rem 1rem;font-size:1.25rem;border-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > .input-group-addon",
   "declarations": "padding:0.5rem 1rem;font-size:1.25rem;border-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-lg > .input-group-btn > .input-group-addon.btn",
   "declarations": "padding:0.5rem 1rem;font-size:1.25rem;border-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon input[type=\"radio\"]",
   "declarations": "margin-top:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon input[type=\"checkbox\"]",
   "declarations": "margin-top:0;"
 },
 {
   "media": "none",
   "selector": ".input-group .form-control:not(:last-child)",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon:not(:last-child)",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:last-child) > .btn",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:last-child) > .btn-group > .btn",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:last-child) > .dropdown-toggle",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle)",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon:not(:last-child)",
   "declarations": "border-right:0;"
 },
 {
   "media": "none",
   "selector": ".input-group .form-control:not(:first-child)",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-addon:not(:first-child)",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn-group > .btn",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .dropdown-toggle",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:last-child) > .btn:not(:first-child)",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "none",
   "selector": ".form-control + .input-group-addon:not(:first-child)",
   "declarations": "border-left:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn",
   "declarations": "position:relative;-ms-flex-align:stretch;align-items:stretch;font-size:0;white-space:nowrap;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn > .btn",
   "declarations": "position:relative;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn > .btn + .btn",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn > .btn:focus",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn > .btn:active",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn > .btn:hover",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:first-child > .btn + .btn",
   "declarations": "margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:last-child) > .btn",
   "declarations": "margin-right:-1px;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:last-child) > .btn-group",
   "declarations": "margin-right:-1px;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn",
   "declarations": "z-index:2;margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn-group",
   "declarations": "z-index:2;margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn:first-child",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn-group:first-child",
   "declarations": "margin-left:-1px;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn:focus",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn:active",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn:hover",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn-group:focus",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn-group:active",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".input-group-btn:not(:first-child) > .btn-group:hover",
   "declarations": "z-index:3;"
 },
 {
   "media": "none",
   "selector": ".custom-control",
   "declarations": "position:relative;display:-ms-inline-flexbox;display:inline-flex;min-height:1.5rem;padding-left:1.5rem;margin-right:1rem;"
 },
 {
   "media": "none",
   "selector": ".custom-control-input",
   "declarations": "position:absolute;z-index:-1;opacity:0;"
 },
 {
   "media": "none",
   "selector": ".custom-control-input:checked ~ .custom-control-indicator",
   "declarations": "color:#fff;background-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".custom-control-input:focus ~ .custom-control-indicator",
   "declarations": "box-shadow:0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);"
 },
 {
   "media": "none",
   "selector": ".custom-control-input:active ~ .custom-control-indicator",
   "declarations": "color:#fff;background-color:#b3d7ff;"
 },
 {
   "media": "none",
   "selector": ".custom-control-input:disabled ~ .custom-control-indicator",
   "declarations": "background-color:#e9ecef;"
 },
 {
   "media": "none",
   "selector": ".custom-control-input:disabled ~ .custom-control-description",
   "declarations": "color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".custom-control-indicator",
   "declarations": "position:absolute;top:0.25rem;left:0;display:block;width:1rem;height:1rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#ddd;background-repeat:no-repeat;background-position:center center;background-size:50% 50%;"
 },
 {
   "media": "none",
   "selector": ".custom-checkbox .custom-control-indicator",
   "declarations": "border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".custom-checkbox .custom-control-input:checked ~ .custom-control-indicator",
   "declarations": "background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");"
 },
 {
   "media": "none",
   "selector": ".custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator",
   "declarations": "background-color:#007bff;background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");"
 },
 {
   "media": "none",
   "selector": ".custom-radio .custom-control-indicator",
   "declarations": "border-radius:50%;"
 },
 {
   "media": "none",
   "selector": ".custom-radio .custom-control-input:checked ~ .custom-control-indicator",
   "declarations": "background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");"
 },
 {
   "media": "none",
   "selector": ".custom-controls-stacked",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;"
 },
 {
   "media": "none",
   "selector": ".custom-controls-stacked .custom-control",
   "declarations": "margin-bottom:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".custom-controls-stacked .custom-control + .custom-control",
   "declarations": "margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".custom-select",
   "declarations": "display:inline-block;max-width:100%;height:calc(2.25rem + 2px);padding:0.375rem 1.75rem 0.375rem 0.75rem;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;background-size:8px 10px;border:1px solid #ced4da;border-radius:0.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;"
 },
 {
   "media": "none",
   "selector": ".custom-select:focus",
   "declarations": "border-color:#80bdff;outline:none;"
 },
 {
   "media": "none",
   "selector": ".custom-select:focus::-ms-value",
   "declarations": "color:#495057;background-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".custom-select[multiple]",
   "declarations": "height:auto;background-image:none;"
 },
 {
   "media": "none",
   "selector": ".custom-select:disabled",
   "declarations": "color:#868e96;background-color:#e9ecef;"
 },
 {
   "media": "none",
   "selector": ".custom-select::-ms-expand",
   "declarations": "opacity:0;"
 },
 {
   "media": "none",
   "selector": ".custom-select-sm",
   "declarations": "height:calc(1.8125rem + 2px);padding-top:0.375rem;padding-bottom:0.375rem;font-size:75%;"
 },
 {
   "media": "none",
   "selector": ".custom-file",
   "declarations": "position:relative;display:inline-block;max-width:100%;height:calc(2.25rem + 2px);margin-bottom:0;"
 },
 {
   "media": "none",
   "selector": ".custom-file-input",
   "declarations": "min-width:14rem;max-width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0;"
 },
 {
   "media": "none",
   "selector": ".custom-file-input:focus ~ .custom-file-control",
   "declarations": "box-shadow:0 0 0 0.075rem #fff, 0 0 0 0.2rem #007bff;"
 },
 {
   "media": "none",
   "selector": ".custom-file-control",
   "declarations": "position:absolute;top:0;right:0;left:0;z-index:5;height:calc(2.25rem + 2px);padding:0.375rem 0.75rem;line-height:1.5;color:#495057;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;border:1px solid #ced4da;border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".custom-file-control:lang(en):empty::after",
   "declarations": "content:\"Choose file...\";"
 },
 {
   "media": "none",
   "selector": ".custom-file-control::before",
   "declarations": "position:absolute;top:-1px;right:-1px;bottom:-1px;z-index:6;display:block;height:calc(2.25rem + 2px);padding:0.375rem 0.75rem;line-height:1.5;color:#495057;background-color:#e9ecef;border:1px solid #ced4da;border-radius:0 0.25rem 0.25rem 0;"
 },
 {
   "media": "none",
   "selector": ".custom-file-control:lang(en)::before",
   "declarations": "content:\"Browse\";"
 },
 {
   "media": "none",
   "selector": ".nav",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none;"
 },
 {
   "media": "none",
   "selector": ".nav-link",
   "declarations": "display:block;padding:0.5rem 1rem;"
 },
 {
   "media": "none",
   "selector": ".nav-link:focus",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".nav-link:hover",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".nav-link.disabled",
   "declarations": "color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".nav-tabs",
   "declarations": "border-bottom:1px solid #ddd;"
 },
 {
   "media": "none",
   "selector": ".nav-tabs .nav-item",
   "declarations": "margin-bottom:-1px;"
 },
 {
   "media": "none",
   "selector": ".nav-tabs .nav-link",
   "declarations": "border:1px solid transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".nav-tabs .nav-link:focus",
   "declarations": "border-color:#e9ecef #e9ecef #ddd;"
 },
 {
   "media": "none",
   "selector": ".nav-tabs .nav-link:hover",
   "declarations": "border-color:#e9ecef #e9ecef #ddd;"
 },
 {
   "media": "none",
   "selector": ".nav-tabs .nav-link.disabled",
   "declarations": "color:#868e96;background-color:transparent;border-color:transparent;"
 },
 {
   "media": "none",
   "selector": ".nav-tabs .nav-link.active",
   "declarations": "color:#495057;background-color:#fff;border-color:#ddd #ddd #fff;"
 },
 {
   "media": "none",
   "selector": ".nav-tabs .nav-item.show .nav-link",
   "declarations": "color:#495057;background-color:#fff;border-color:#ddd #ddd #fff;"
 },
 {
   "media": "none",
   "selector": ".nav-tabs .dropdown-menu",
   "declarations": "margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0;"
 },
 {
   "media": "none",
   "selector": ".nav-pills .nav-link",
   "declarations": "border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".nav-pills .nav-link.active",
   "declarations": "color:#fff;background-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".nav-pills .show > .nav-link",
   "declarations": "color:#fff;background-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".nav-fill .nav-item",
   "declarations": "-ms-flex:1 1 auto;flex:1 1 auto;text-align:center;"
 },
 {
   "media": "none",
   "selector": ".nav-justified .nav-item",
   "declarations": "-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;text-align:center;"
 },
 {
   "media": "none",
   "selector": ".tab-content > .tab-pane",
   "declarations": "display:none;"
 },
 {
   "media": "none",
   "selector": ".tab-content > .active",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".navbar",
   "declarations": "position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:0.5rem 1rem;"
 },
 {
   "media": "none",
   "selector": ".navbar > .container",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;"
 },
 {
   "media": "none",
   "selector": ".navbar > .container-fluid",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;"
 },
 {
   "media": "none",
   "selector": ".navbar-brand",
   "declarations": "display:inline-block;padding-top:0.3125rem;padding-bottom:0.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap;"
 },
 {
   "media": "none",
   "selector": ".navbar-brand:focus",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".navbar-brand:hover",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".navbar-nav",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none;"
 },
 {
   "media": "none",
   "selector": ".navbar-nav .nav-link",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".navbar-nav .dropdown-menu",
   "declarations": "position:static;float:none;"
 },
 {
   "media": "none",
   "selector": ".navbar-text",
   "declarations": "display:inline-block;padding-top:0.5rem;padding-bottom:0.5rem;"
 },
 {
   "media": "none",
   "selector": ".navbar-collapse",
   "declarations": "-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;"
 },
 {
   "media": "none",
   "selector": ".navbar-toggler",
   "declarations": "padding:0.25rem 0.75rem;font-size:1.25rem;line-height:1;background:transparent;border:1px solid transparent;border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".navbar-toggler:focus",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".navbar-toggler:hover",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".navbar-toggler-icon",
   "declarations": "display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%;"
 },
 {
   "media": "@media (max-width:575px)",
   "selector": ".navbar-expand-sm > .container",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "@media (max-width:575px)",
   "selector": ".navbar-expand-sm > .container-fluid",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".navbar-expand-sm",
   "declarations": "-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".navbar-expand-sm .navbar-nav",
   "declarations": "-ms-flex-direction:row;flex-direction:row;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".navbar-expand-sm .navbar-nav .dropdown-menu",
   "declarations": "position:absolute;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".navbar-expand-sm .navbar-nav .dropdown-menu-right",
   "declarations": "right:0;left:auto;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".navbar-expand-sm .navbar-nav .nav-link",
   "declarations": "padding-right:.5rem;padding-left:.5rem;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".navbar-expand-sm > .container",
   "declarations": "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".navbar-expand-sm > .container-fluid",
   "declarations": "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".navbar-expand-sm .navbar-collapse",
   "declarations": "display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".navbar-expand-sm .navbar-toggler",
   "declarations": "display:none;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".navbar-expand-sm .dropup .dropdown-menu",
   "declarations": "top:auto;bottom:100%;"
 },
 {
   "media": "@media (max-width:767px)",
   "selector": ".navbar-expand-md > .container",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "@media (max-width:767px)",
   "selector": ".navbar-expand-md > .container-fluid",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".navbar-expand-md",
   "declarations": "-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".navbar-expand-md .navbar-nav",
   "declarations": "-ms-flex-direction:row;flex-direction:row;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".navbar-expand-md .navbar-nav .dropdown-menu",
   "declarations": "position:absolute;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".navbar-expand-md .navbar-nav .dropdown-menu-right",
   "declarations": "right:0;left:auto;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".navbar-expand-md .navbar-nav .nav-link",
   "declarations": "padding-right:.5rem;padding-left:.5rem;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".navbar-expand-md > .container",
   "declarations": "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".navbar-expand-md > .container-fluid",
   "declarations": "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".navbar-expand-md .navbar-collapse",
   "declarations": "display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".navbar-expand-md .navbar-toggler",
   "declarations": "display:none;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".navbar-expand-md .dropup .dropdown-menu",
   "declarations": "top:auto;bottom:100%;"
 },
 {
   "media": "@media (max-width:991px)",
   "selector": ".navbar-expand-lg > .container",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "@media (max-width:991px)",
   "selector": ".navbar-expand-lg > .container-fluid",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".navbar-expand-lg",
   "declarations": "-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".navbar-expand-lg .navbar-nav",
   "declarations": "-ms-flex-direction:row;flex-direction:row;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".navbar-expand-lg .navbar-nav .dropdown-menu",
   "declarations": "position:absolute;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".navbar-expand-lg .navbar-nav .dropdown-menu-right",
   "declarations": "right:0;left:auto;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".navbar-expand-lg .navbar-nav .nav-link",
   "declarations": "padding-right:.5rem;padding-left:.5rem;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".navbar-expand-lg > .container",
   "declarations": "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".navbar-expand-lg > .container-fluid",
   "declarations": "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".navbar-expand-lg .navbar-collapse",
   "declarations": "display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".navbar-expand-lg .navbar-toggler",
   "declarations": "display:none;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".navbar-expand-lg .dropup .dropdown-menu",
   "declarations": "top:auto;bottom:100%;"
 },
 {
   "media": "@media (max-width:1199px)",
   "selector": ".navbar-expand-xl > .container",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "@media (max-width:1199px)",
   "selector": ".navbar-expand-xl > .container-fluid",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".navbar-expand-xl",
   "declarations": "-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".navbar-expand-xl .navbar-nav",
   "declarations": "-ms-flex-direction:row;flex-direction:row;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".navbar-expand-xl .navbar-nav .dropdown-menu",
   "declarations": "position:absolute;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".navbar-expand-xl .navbar-nav .dropdown-menu-right",
   "declarations": "right:0;left:auto;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".navbar-expand-xl .navbar-nav .nav-link",
   "declarations": "padding-right:.5rem;padding-left:.5rem;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".navbar-expand-xl > .container",
   "declarations": "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".navbar-expand-xl > .container-fluid",
   "declarations": "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".navbar-expand-xl .navbar-collapse",
   "declarations": "display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".navbar-expand-xl .navbar-toggler",
   "declarations": "display:none;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".navbar-expand-xl .dropup .dropdown-menu",
   "declarations": "top:auto;bottom:100%;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand",
   "declarations": "-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand > .container",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand > .container-fluid",
   "declarations": "padding-right:0;padding-left:0;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand .navbar-nav",
   "declarations": "-ms-flex-direction:row;flex-direction:row;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand .navbar-nav .dropdown-menu",
   "declarations": "position:absolute;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand .navbar-nav .dropdown-menu-right",
   "declarations": "right:0;left:auto;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand .navbar-nav .nav-link",
   "declarations": "padding-right:.5rem;padding-left:.5rem;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand > .container",
   "declarations": "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand > .container-fluid",
   "declarations": "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand .navbar-collapse",
   "declarations": "display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand .navbar-toggler",
   "declarations": "display:none;"
 },
 {
   "media": "none",
   "selector": ".navbar-expand .dropup .dropdown-menu",
   "declarations": "top:auto;bottom:100%;"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-brand",
   "declarations": "color:rgba(0, 0, 0, 0.9);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-brand:focus",
   "declarations": "color:rgba(0, 0, 0, 0.9);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-brand:hover",
   "declarations": "color:rgba(0, 0, 0, 0.9);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-nav .nav-link",
   "declarations": "color:rgba(0, 0, 0, 0.5);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-nav .nav-link:focus",
   "declarations": "color:rgba(0, 0, 0, 0.7);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-nav .nav-link:hover",
   "declarations": "color:rgba(0, 0, 0, 0.7);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-nav .nav-link.disabled",
   "declarations": "color:rgba(0, 0, 0, 0.3);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-nav .show > .nav-link",
   "declarations": "color:rgba(0, 0, 0, 0.9);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-nav .active > .nav-link",
   "declarations": "color:rgba(0, 0, 0, 0.9);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-nav .nav-link.show",
   "declarations": "color:rgba(0, 0, 0, 0.9);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-nav .nav-link.active",
   "declarations": "color:rgba(0, 0, 0, 0.9);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-toggler",
   "declarations": "color:rgba(0, 0, 0, 0.5);border-color:rgba(0, 0, 0, 0.1);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-toggler-icon",
   "declarations": "background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-text",
   "declarations": "color:rgba(0, 0, 0, 0.5);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-text a",
   "declarations": "color:rgba(0, 0, 0, 0.9);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-text a:focus",
   "declarations": "color:rgba(0, 0, 0, 0.9);"
 },
 {
   "media": "none",
   "selector": ".navbar-light .navbar-text a:hover",
   "declarations": "color:rgba(0, 0, 0, 0.9);"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-brand",
   "declarations": "color:#fff;"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-brand:focus",
   "declarations": "color:#fff;"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-brand:hover",
   "declarations": "color:#fff;"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-nav .nav-link",
   "declarations": "color:rgba(255, 255, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-nav .nav-link:focus",
   "declarations": "color:rgba(255, 255, 255, 0.75);"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-nav .nav-link:hover",
   "declarations": "color:rgba(255, 255, 255, 0.75);"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-nav .nav-link.disabled",
   "declarations": "color:rgba(255, 255, 255, 0.25);"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-nav .show > .nav-link",
   "declarations": "color:#fff;"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-nav .active > .nav-link",
   "declarations": "color:#fff;"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-nav .nav-link.show",
   "declarations": "color:#fff;"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-nav .nav-link.active",
   "declarations": "color:#fff;"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-toggler",
   "declarations": "color:rgba(255, 255, 255, 0.5);border-color:rgba(255, 255, 255, 0.1);"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-toggler-icon",
   "declarations": "background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-text",
   "declarations": "color:rgba(255, 255, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-text a",
   "declarations": "color:#fff;"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-text a:focus",
   "declarations": "color:#fff;"
 },
 {
   "media": "none",
   "selector": ".navbar-dark .navbar-text a:hover",
   "declarations": "color:#fff;"
 },
 {
   "media": "none",
   "selector": ".card",
   "declarations": "position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0, 0, 0, 0.125);border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".card > hr",
   "declarations": "margin-right:0;margin-left:0;"
 },
 {
   "media": "none",
   "selector": ".card > .list-group:first-child .list-group-item:first-child",
   "declarations": "border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".card > .list-group:last-child .list-group-item:last-child",
   "declarations": "border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".card-body",
   "declarations": "-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem;"
 },
 {
   "media": "none",
   "selector": ".card-title",
   "declarations": "margin-bottom:0.75rem;"
 },
 {
   "media": "none",
   "selector": ".card-subtitle",
   "declarations": "margin-top:-0.375rem;margin-bottom:0;"
 },
 {
   "media": "none",
   "selector": ".card-text:last-child",
   "declarations": "margin-bottom:0;"
 },
 {
   "media": "none",
   "selector": ".card-link:hover",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".card-link + .card-link",
   "declarations": "margin-left:1.25rem;"
 },
 {
   "media": "none",
   "selector": ".card-header",
   "declarations": "padding:0.75rem 1.25rem;margin-bottom:0;background-color:rgba(0, 0, 0, 0.03);border-bottom:1px solid rgba(0, 0, 0, 0.125);"
 },
 {
   "media": "none",
   "selector": ".card-header:first-child",
   "declarations": "border-radius:calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;"
 },
 {
   "media": "none",
   "selector": ".card-header + .list-group .list-group-item:first-child",
   "declarations": "border-top:0;"
 },
 {
   "media": "none",
   "selector": ".card-footer",
   "declarations": "padding:0.75rem 1.25rem;background-color:rgba(0, 0, 0, 0.03);border-top:1px solid rgba(0, 0, 0, 0.125);"
 },
 {
   "media": "none",
   "selector": ".card-footer:last-child",
   "declarations": "border-radius:0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);"
 },
 {
   "media": "none",
   "selector": ".card-header-tabs",
   "declarations": "margin-right:-0.625rem;margin-bottom:-0.75rem;margin-left:-0.625rem;border-bottom:0;"
 },
 {
   "media": "none",
   "selector": ".card-header-pills",
   "declarations": "margin-right:-0.625rem;margin-left:-0.625rem;"
 },
 {
   "media": "none",
   "selector": ".card-img-overlay",
   "declarations": "position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;"
 },
 {
   "media": "none",
   "selector": ".card-img",
   "declarations": "width:100%;border-radius:calc(0.25rem - 1px);"
 },
 {
   "media": "none",
   "selector": ".card-img-top",
   "declarations": "width:100%;border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px);"
 },
 {
   "media": "none",
   "selector": ".card-img-bottom",
   "declarations": "width:100%;border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px);"
 },
 {
   "media": "none",
   "selector": ".card-deck",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;"
 },
 {
   "media": "none",
   "selector": ".card-deck .card",
   "declarations": "margin-bottom:15px;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-deck",
   "declarations": "-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-deck .card",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex:1 0 0%;flex:1 0 0%;-ms-flex-direction:column;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px;"
 },
 {
   "media": "none",
   "selector": ".card-group",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;"
 },
 {
   "media": "none",
   "selector": ".card-group .card",
   "declarations": "margin-bottom:15px;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group",
   "declarations": "-ms-flex-flow:row wrap;flex-flow:row wrap;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card",
   "declarations": "-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card + .card",
   "declarations": "margin-left:0;border-left:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:first-child",
   "declarations": "border-top-right-radius:0;border-bottom-right-radius:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:first-child .card-img-top",
   "declarations": "border-top-right-radius:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:first-child .card-img-bottom",
   "declarations": "border-bottom-right-radius:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:last-child",
   "declarations": "border-top-left-radius:0;border-bottom-left-radius:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:last-child .card-img-top",
   "declarations": "border-top-left-radius:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:last-child .card-img-bottom",
   "declarations": "border-bottom-left-radius:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:only-child",
   "declarations": "border-radius:0.25rem;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:only-child .card-img-top",
   "declarations": "border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:only-child .card-img-bottom",
   "declarations": "border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:not(:first-child):not(:last-child):not(:only-child)",
   "declarations": "border-radius:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top",
   "declarations": "border-radius:0;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom",
   "declarations": "border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".card-columns .card",
   "declarations": "margin-bottom:0.75rem;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-columns",
   "declarations": "-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;column-gap:1.25rem;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".card-columns .card",
   "declarations": "display:inline-block;width:100%;"
 },
 {
   "media": "none",
   "selector": ".breadcrumb",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".breadcrumb-item + .breadcrumb-item::before",
   "declarations": "display:inline-block;padding-right:0.5rem;padding-left:0.5rem;color:#868e96;content:\"/\";"
 },
 {
   "media": "none",
   "selector": ".breadcrumb-item + .breadcrumb-item:hover::before",
   "declarations": "text-decoration:underline;"
 },
 {
   "media": "none",
   "selector": ".breadcrumb-item + .breadcrumb-item:hover::before",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".breadcrumb-item.active",
   "declarations": "color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".pagination",
   "declarations": "display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".page-item:first-child .page-link",
   "declarations": "margin-left:0;border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".page-item:last-child .page-link",
   "declarations": "border-top-right-radius:0.25rem;border-bottom-right-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".page-item.active .page-link",
   "declarations": "z-index:2;color:#fff;background-color:#007bff;border-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".page-item.disabled .page-link",
   "declarations": "color:#868e96;pointer-events:none;background-color:#fff;border-color:#ddd;"
 },
 {
   "media": "none",
   "selector": ".page-link",
   "declarations": "position:relative;display:block;padding:0.5rem 0.75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #ddd;"
 },
 {
   "media": "none",
   "selector": ".page-link:focus",
   "declarations": "color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#ddd;"
 },
 {
   "media": "none",
   "selector": ".page-link:hover",
   "declarations": "color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#ddd;"
 },
 {
   "media": "none",
   "selector": ".pagination-lg .page-link",
   "declarations": "padding:0.75rem 1.5rem;font-size:1.25rem;line-height:1.5;"
 },
 {
   "media": "none",
   "selector": ".pagination-lg .page-item:first-child .page-link",
   "declarations": "border-top-left-radius:0.3rem;border-bottom-left-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".pagination-lg .page-item:last-child .page-link",
   "declarations": "border-top-right-radius:0.3rem;border-bottom-right-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".pagination-sm .page-link",
   "declarations": "padding:0.25rem 0.5rem;font-size:0.875rem;line-height:1.5;"
 },
 {
   "media": "none",
   "selector": ".pagination-sm .page-item:first-child .page-link",
   "declarations": "border-top-left-radius:0.2rem;border-bottom-left-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": ".pagination-sm .page-item:last-child .page-link",
   "declarations": "border-top-right-radius:0.2rem;border-bottom-right-radius:0.2rem;"
 },
 {
   "media": "none",
   "selector": ".badge",
   "declarations": "display:inline-block;padding:0.25em 0.4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".badge:empty",
   "declarations": "display:none;"
 },
 {
   "media": "none",
   "selector": ".btn .badge",
   "declarations": "position:relative;top:-1px;"
 },
 {
   "media": "none",
   "selector": ".badge-pill",
   "declarations": "padding-right:0.6em;padding-left:0.6em;border-radius:10rem;"
 },
 {
   "media": "none",
   "selector": ".badge-primary",
   "declarations": "color:#fff;background-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".badge-primary[href]:focus",
   "declarations": "color:#fff;text-decoration:none;background-color:#0062cc;"
 },
 {
   "media": "none",
   "selector": ".badge-primary[href]:hover",
   "declarations": "color:#fff;text-decoration:none;background-color:#0062cc;"
 },
 {
   "media": "none",
   "selector": ".badge-secondary",
   "declarations": "color:#fff;background-color:#868e96;"
 },
 {
   "media": "none",
   "selector": ".badge-secondary[href]:focus",
   "declarations": "color:#fff;text-decoration:none;background-color:#6c757d;"
 },
 {
   "media": "none",
   "selector": ".badge-secondary[href]:hover",
   "declarations": "color:#fff;text-decoration:none;background-color:#6c757d;"
 },
 {
   "media": "none",
   "selector": ".badge-success",
   "declarations": "color:#fff;background-color:#28a745;"
 },
 {
   "media": "none",
   "selector": ".badge-success[href]:focus",
   "declarations": "color:#fff;text-decoration:none;background-color:#1e7e34;"
 },
 {
   "media": "none",
   "selector": ".badge-success[href]:hover",
   "declarations": "color:#fff;text-decoration:none;background-color:#1e7e34;"
 },
 {
   "media": "none",
   "selector": ".badge-info",
   "declarations": "color:#fff;background-color:#17a2b8;"
 },
 {
   "media": "none",
   "selector": ".badge-info[href]:focus",
   "declarations": "color:#fff;text-decoration:none;background-color:#117a8b;"
 },
 {
   "media": "none",
   "selector": ".badge-info[href]:hover",
   "declarations": "color:#fff;text-decoration:none;background-color:#117a8b;"
 },
 {
   "media": "none",
   "selector": ".badge-warning",
   "declarations": "color:#111;background-color:#ffc107;"
 },
 {
   "media": "none",
   "selector": ".badge-warning[href]:focus",
   "declarations": "color:#111;text-decoration:none;background-color:#d39e00;"
 },
 {
   "media": "none",
   "selector": ".badge-warning[href]:hover",
   "declarations": "color:#111;text-decoration:none;background-color:#d39e00;"
 },
 {
   "media": "none",
   "selector": ".badge-danger",
   "declarations": "color:#fff;background-color:#dc3545;"
 },
 {
   "media": "none",
   "selector": ".badge-danger[href]:focus",
   "declarations": "color:#fff;text-decoration:none;background-color:#bd2130;"
 },
 {
   "media": "none",
   "selector": ".badge-danger[href]:hover",
   "declarations": "color:#fff;text-decoration:none;background-color:#bd2130;"
 },
 {
   "media": "none",
   "selector": ".badge-light",
   "declarations": "color:#111;background-color:#f8f9fa;"
 },
 {
   "media": "none",
   "selector": ".badge-light[href]:focus",
   "declarations": "color:#111;text-decoration:none;background-color:#dae0e5;"
 },
 {
   "media": "none",
   "selector": ".badge-light[href]:hover",
   "declarations": "color:#111;text-decoration:none;background-color:#dae0e5;"
 },
 {
   "media": "none",
   "selector": ".badge-dark",
   "declarations": "color:#fff;background-color:#343a40;"
 },
 {
   "media": "none",
   "selector": ".badge-dark[href]:focus",
   "declarations": "color:#fff;text-decoration:none;background-color:#1d2124;"
 },
 {
   "media": "none",
   "selector": ".badge-dark[href]:hover",
   "declarations": "color:#fff;text-decoration:none;background-color:#1d2124;"
 },
 {
   "media": "none",
   "selector": ".jumbotron",
   "declarations": "padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:0.3rem;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".jumbotron",
   "declarations": "padding:4rem 2rem;"
 },
 {
   "media": "none",
   "selector": ".jumbotron-fluid",
   "declarations": "padding-right:0;padding-left:0;border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".alert",
   "declarations": "position:relative;padding:0.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".alert-heading",
   "declarations": "color:inherit;"
 },
 {
   "media": "none",
   "selector": ".alert-link",
   "declarations": "font-weight:700;"
 },
 {
   "media": "none",
   "selector": ".alert-dismissible .close",
   "declarations": "position:absolute;top:0;right:0;padding:0.75rem 1.25rem;color:inherit;"
 },
 {
   "media": "none",
   "selector": ".alert-primary",
   "declarations": "color:#004085;background-color:#cce5ff;border-color:#b8daff;"
 },
 {
   "media": "none",
   "selector": ".alert-primary hr",
   "declarations": "border-top-color:#9fcdff;"
 },
 {
   "media": "none",
   "selector": ".alert-primary .alert-link",
   "declarations": "color:#002752;"
 },
 {
   "media": "none",
   "selector": ".alert-secondary",
   "declarations": "color:#464a4e;background-color:#e7e8ea;border-color:#dddfe2;"
 },
 {
   "media": "none",
   "selector": ".alert-secondary hr",
   "declarations": "border-top-color:#cfd2d6;"
 },
 {
   "media": "none",
   "selector": ".alert-secondary .alert-link",
   "declarations": "color:#2e3133;"
 },
 {
   "media": "none",
   "selector": ".alert-success",
   "declarations": "color:#155724;background-color:#d4edda;border-color:#c3e6cb;"
 },
 {
   "media": "none",
   "selector": ".alert-success hr",
   "declarations": "border-top-color:#b1dfbb;"
 },
 {
   "media": "none",
   "selector": ".alert-success .alert-link",
   "declarations": "color:#0b2e13;"
 },
 {
   "media": "none",
   "selector": ".alert-info",
   "declarations": "color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb;"
 },
 {
   "media": "none",
   "selector": ".alert-info hr",
   "declarations": "border-top-color:#abdde5;"
 },
 {
   "media": "none",
   "selector": ".alert-info .alert-link",
   "declarations": "color:#062c33;"
 },
 {
   "media": "none",
   "selector": ".alert-warning",
   "declarations": "color:#856404;background-color:#fff3cd;border-color:#ffeeba;"
 },
 {
   "media": "none",
   "selector": ".alert-warning hr",
   "declarations": "border-top-color:#ffe8a1;"
 },
 {
   "media": "none",
   "selector": ".alert-warning .alert-link",
   "declarations": "color:#533f03;"
 },
 {
   "media": "none",
   "selector": ".alert-danger",
   "declarations": "color:#721c24;background-color:#f8d7da;border-color:#f5c6cb;"
 },
 {
   "media": "none",
   "selector": ".alert-danger hr",
   "declarations": "border-top-color:#f1b0b7;"
 },
 {
   "media": "none",
   "selector": ".alert-danger .alert-link",
   "declarations": "color:#491217;"
 },
 {
   "media": "none",
   "selector": ".alert-light",
   "declarations": "color:#818182;background-color:#fefefe;border-color:#fdfdfe;"
 },
 {
   "media": "none",
   "selector": ".alert-light hr",
   "declarations": "border-top-color:#ececf6;"
 },
 {
   "media": "none",
   "selector": ".alert-light .alert-link",
   "declarations": "color:#686868;"
 },
 {
   "media": "none",
   "selector": ".alert-dark",
   "declarations": "color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca;"
 },
 {
   "media": "none",
   "selector": ".alert-dark hr",
   "declarations": "border-top-color:#b9bbbe;"
 },
 {
   "media": "none",
   "selector": ".alert-dark .alert-link",
   "declarations": "color:#040505;"
 },
 {
   "media": "@-webkit-keyframes progress-bar-stripes",
   "selector": "from",
   "declarations": "background-position:1rem 0;"
 },
 {
   "media": "@-webkit-keyframes progress-bar-stripes",
   "selector": "to",
   "declarations": "background-position:0 0;"
 },
 {
   "media": "@keyframes progress-bar-stripes",
   "selector": "from",
   "declarations": "background-position:1rem 0;"
 },
 {
   "media": "@keyframes progress-bar-stripes",
   "selector": "to",
   "declarations": "background-position:0 0;"
 },
 {
   "media": "none",
   "selector": ".progress",
   "declarations": "display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;font-size:0.75rem;background-color:#e9ecef;border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".progress-bar",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#fff;background-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".progress-bar-striped",
   "declarations": "background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem;"
 },
 {
   "media": "none",
   "selector": ".progress-bar-animated",
   "declarations": "-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite;"
 },
 {
   "media": "none",
   "selector": ".media",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;"
 },
 {
   "media": "none",
   "selector": ".media-body",
   "declarations": "-ms-flex:1;flex:1;"
 },
 {
   "media": "none",
   "selector": ".list-group",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-action",
   "declarations": "width:100%;color:#495057;text-align:inherit;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-action:focus",
   "declarations": "color:#495057;text-decoration:none;background-color:#f8f9fa;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-action:hover",
   "declarations": "color:#495057;text-decoration:none;background-color:#f8f9fa;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-action:active",
   "declarations": "color:#212529;background-color:#e9ecef;"
 },
 {
   "media": "none",
   "selector": ".list-group-item",
   "declarations": "position:relative;display:block;padding:0.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0, 0, 0, 0.125);"
 },
 {
   "media": "none",
   "selector": ".list-group-item:first-child",
   "declarations": "border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".list-group-item:last-child",
   "declarations": "margin-bottom:0;border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".list-group-item:focus",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".list-group-item:hover",
   "declarations": "text-decoration:none;"
 },
 {
   "media": "none",
   "selector": ".list-group-item.disabled",
   "declarations": "color:#868e96;background-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".list-group-item:disabled",
   "declarations": "color:#868e96;background-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".list-group-item.active",
   "declarations": "z-index:2;color:#fff;background-color:#007bff;border-color:#007bff;"
 },
 {
   "media": "none",
   "selector": ".list-group-flush .list-group-item",
   "declarations": "border-right:0;border-left:0;border-radius:0;"
 },
 {
   "media": "none",
   "selector": ".list-group-flush:first-child .list-group-item:first-child",
   "declarations": "border-top:0;"
 },
 {
   "media": "none",
   "selector": ".list-group-flush:last-child .list-group-item:last-child",
   "declarations": "border-bottom:0;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-primary",
   "declarations": "color:#004085;background-color:#b8daff;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-primary",
   "declarations": "color:#004085;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-primary",
   "declarations": "color:#004085;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-primary:focus a.list-group-item-primary:hover",
   "declarations": "color:#004085;background-color:#9fcdff;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-primary:focus",
   "declarations": "color:#004085;background-color:#9fcdff;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-primary:hover",
   "declarations": "color:#004085;background-color:#9fcdff;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-primary.active",
   "declarations": "color:#fff;background-color:#004085;border-color:#004085;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-primary.active",
   "declarations": "color:#fff;background-color:#004085;border-color:#004085;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-secondary",
   "declarations": "color:#464a4e;background-color:#dddfe2;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-secondary",
   "declarations": "color:#464a4e;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-secondary",
   "declarations": "color:#464a4e;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-secondary:focus a.list-group-item-secondary:hover",
   "declarations": "color:#464a4e;background-color:#cfd2d6;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-secondary:focus",
   "declarations": "color:#464a4e;background-color:#cfd2d6;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-secondary:hover",
   "declarations": "color:#464a4e;background-color:#cfd2d6;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-secondary.active",
   "declarations": "color:#fff;background-color:#464a4e;border-color:#464a4e;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-secondary.active",
   "declarations": "color:#fff;background-color:#464a4e;border-color:#464a4e;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-success",
   "declarations": "color:#155724;background-color:#c3e6cb;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-success",
   "declarations": "color:#155724;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-success",
   "declarations": "color:#155724;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-success:focus a.list-group-item-success:hover",
   "declarations": "color:#155724;background-color:#b1dfbb;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-success:focus",
   "declarations": "color:#155724;background-color:#b1dfbb;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-success:hover",
   "declarations": "color:#155724;background-color:#b1dfbb;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-success.active",
   "declarations": "color:#fff;background-color:#155724;border-color:#155724;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-success.active",
   "declarations": "color:#fff;background-color:#155724;border-color:#155724;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-info",
   "declarations": "color:#0c5460;background-color:#bee5eb;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-info",
   "declarations": "color:#0c5460;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-info",
   "declarations": "color:#0c5460;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-info:focus a.list-group-item-info:hover",
   "declarations": "color:#0c5460;background-color:#abdde5;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-info:focus",
   "declarations": "color:#0c5460;background-color:#abdde5;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-info:hover",
   "declarations": "color:#0c5460;background-color:#abdde5;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-info.active",
   "declarations": "color:#fff;background-color:#0c5460;border-color:#0c5460;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-info.active",
   "declarations": "color:#fff;background-color:#0c5460;border-color:#0c5460;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-warning",
   "declarations": "color:#856404;background-color:#ffeeba;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-warning",
   "declarations": "color:#856404;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-warning",
   "declarations": "color:#856404;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-warning:focus a.list-group-item-warning:hover",
   "declarations": "color:#856404;background-color:#ffe8a1;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-warning:focus",
   "declarations": "color:#856404;background-color:#ffe8a1;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-warning:hover",
   "declarations": "color:#856404;background-color:#ffe8a1;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-warning.active",
   "declarations": "color:#fff;background-color:#856404;border-color:#856404;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-warning.active",
   "declarations": "color:#fff;background-color:#856404;border-color:#856404;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-danger",
   "declarations": "color:#721c24;background-color:#f5c6cb;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-danger",
   "declarations": "color:#721c24;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-danger",
   "declarations": "color:#721c24;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-danger:focus a.list-group-item-danger:hover",
   "declarations": "color:#721c24;background-color:#f1b0b7;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-danger:focus",
   "declarations": "color:#721c24;background-color:#f1b0b7;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-danger:hover",
   "declarations": "color:#721c24;background-color:#f1b0b7;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-danger.active",
   "declarations": "color:#fff;background-color:#721c24;border-color:#721c24;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-danger.active",
   "declarations": "color:#fff;background-color:#721c24;border-color:#721c24;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-light",
   "declarations": "color:#818182;background-color:#fdfdfe;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-light",
   "declarations": "color:#818182;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-light",
   "declarations": "color:#818182;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-light:focus a.list-group-item-light:hover",
   "declarations": "color:#818182;background-color:#ececf6;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-light:focus",
   "declarations": "color:#818182;background-color:#ececf6;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-light:hover",
   "declarations": "color:#818182;background-color:#ececf6;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-light.active",
   "declarations": "color:#fff;background-color:#818182;border-color:#818182;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-light.active",
   "declarations": "color:#fff;background-color:#818182;border-color:#818182;"
 },
 {
   "media": "none",
   "selector": ".list-group-item-dark",
   "declarations": "color:#1b1e21;background-color:#c6c8ca;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-dark",
   "declarations": "color:#1b1e21;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-dark",
   "declarations": "color:#1b1e21;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-dark:focus a.list-group-item-dark:hover",
   "declarations": "color:#1b1e21;background-color:#b9bbbe;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-dark:focus",
   "declarations": "color:#1b1e21;background-color:#b9bbbe;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-dark:hover",
   "declarations": "color:#1b1e21;background-color:#b9bbbe;"
 },
 {
   "media": "none",
   "selector": "a.list-group-item-dark.active",
   "declarations": "color:#fff;background-color:#1b1e21;border-color:#1b1e21;"
 },
 {
   "media": "none",
   "selector": "button.list-group-item-dark.active",
   "declarations": "color:#fff;background-color:#1b1e21;border-color:#1b1e21;"
 },
 {
   "media": "none",
   "selector": ".close",
   "declarations": "float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5;"
 },
 {
   "media": "none",
   "selector": ".close:focus",
   "declarations": "color:#000;text-decoration:none;opacity:.75;"
 },
 {
   "media": "none",
   "selector": ".close:hover",
   "declarations": "color:#000;text-decoration:none;opacity:.75;"
 },
 {
   "media": "none",
   "selector": "button.close",
   "declarations": "padding:0;background:transparent;border:0;-webkit-appearance:none;"
 },
 {
   "media": "none",
   "selector": ".modal-open",
   "declarations": "overflow:hidden;"
 },
 {
   "media": "none",
   "selector": ".modal",
   "declarations": "position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0;"
 },
 {
   "media": "none",
   "selector": ".modal.fade .modal-dialog",
   "declarations": "transition:-webkit-transform 0.3s ease-out;transition:transform 0.3s ease-out;transition:transform 0.3s ease-out, -webkit-transform 0.3s ease-out;-webkit-transform:translate(0, -25%);transform:translate(0, -25%);"
 },
 {
   "media": "none",
   "selector": ".modal.show .modal-dialog",
   "declarations": "-webkit-transform:translate(0, 0);transform:translate(0, 0);"
 },
 {
   "media": "none",
   "selector": ".modal-open .modal",
   "declarations": "overflow-x:hidden;overflow-y:auto;"
 },
 {
   "media": "none",
   "selector": ".modal-dialog",
   "declarations": "position:relative;width:auto;margin:10px;pointer-events:none;"
 },
 {
   "media": "none",
   "selector": ".modal-content",
   "declarations": "position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 0, 0, 0.2);border-radius:0.3rem;outline:0;"
 },
 {
   "media": "none",
   "selector": ".modal-backdrop",
   "declarations": "position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000;"
 },
 {
   "media": "none",
   "selector": ".modal-backdrop.fade",
   "declarations": "opacity:0;"
 },
 {
   "media": "none",
   "selector": ".modal-backdrop.show",
   "declarations": "opacity:0.5;"
 },
 {
   "media": "none",
   "selector": ".modal-header",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:15px;border-bottom:1px solid #e9ecef;border-top-left-radius:0.3rem;border-top-right-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".modal-header .close",
   "declarations": "padding:15px;margin:-15px -15px -15px auto;"
 },
 {
   "media": "none",
   "selector": ".modal-title",
   "declarations": "margin-bottom:0;line-height:1.5;"
 },
 {
   "media": "none",
   "selector": ".modal-body",
   "declarations": "position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:15px;"
 },
 {
   "media": "none",
   "selector": ".modal-footer",
   "declarations": "display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:15px;border-top:1px solid #e9ecef;"
 },
 {
   "media": "none",
   "selector": ".modal-footer > :not(:first-child)",
   "declarations": "margin-left:.25rem;"
 },
 {
   "media": "none",
   "selector": ".modal-footer > :not(:last-child)",
   "declarations": "margin-right:.25rem;"
 },
 {
   "media": "none",
   "selector": ".modal-scrollbar-measure",
   "declarations": "position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".modal-dialog",
   "declarations": "max-width:500px;margin:30px auto;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".modal-sm",
   "declarations": "max-width:300px;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".modal-lg",
   "declarations": "max-width:800px;"
 },
 {
   "media": "none",
   "selector": ".tooltip",
   "declarations": "position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.875rem;word-wrap:break-word;opacity:0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.show",
   "declarations": "opacity:0.9;"
 },
 {
   "media": "none",
   "selector": ".tooltip .arrow",
   "declarations": "position:absolute;display:block;width:5px;height:5px;"
 },
 {
   "media": "none",
   "selector": ".tooltip .arrow::before",
   "declarations": "position:absolute;border-color:transparent;border-style:solid;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-top",
   "declarations": "padding:5px 0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"top\"]",
   "declarations": "padding:5px 0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-top .arrow",
   "declarations": "bottom:0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow",
   "declarations": "bottom:0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-top .arrow::before",
   "declarations": "margin-left:-3px;content:\"\";border-width:5px 5px 0;border-top-color:#000;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow::before",
   "declarations": "margin-left:-3px;content:\"\";border-width:5px 5px 0;border-top-color:#000;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-right",
   "declarations": "padding:0 5px;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"right\"]",
   "declarations": "padding:0 5px;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-right .arrow",
   "declarations": "left:0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow",
   "declarations": "left:0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-right .arrow::before",
   "declarations": "margin-top:-3px;content:\"\";border-width:5px 5px 5px 0;border-right-color:#000;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow::before",
   "declarations": "margin-top:-3px;content:\"\";border-width:5px 5px 5px 0;border-right-color:#000;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-bottom",
   "declarations": "padding:5px 0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"bottom\"]",
   "declarations": "padding:5px 0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-bottom .arrow",
   "declarations": "top:0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow",
   "declarations": "top:0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-bottom .arrow::before",
   "declarations": "margin-left:-3px;content:\"\";border-width:0 5px 5px;border-bottom-color:#000;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before",
   "declarations": "margin-left:-3px;content:\"\";border-width:0 5px 5px;border-bottom-color:#000;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-left",
   "declarations": "padding:0 5px;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"left\"]",
   "declarations": "padding:0 5px;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-left .arrow",
   "declarations": "right:0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow",
   "declarations": "right:0;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-left .arrow::before",
   "declarations": "right:0;margin-top:-3px;content:\"\";border-width:5px 0 5px 5px;border-left-color:#000;"
 },
 {
   "media": "none",
   "selector": ".tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow::before",
   "declarations": "right:0;margin-top:-3px;content:\"\";border-width:5px 0 5px 5px;border-left-color:#000;"
 },
 {
   "media": "none",
   "selector": ".tooltip-inner",
   "declarations": "max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:0.25rem;"
 },
 {
   "media": "none",
   "selector": ".popover",
   "declarations": "position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 0, 0, 0.2);border-radius:0.3rem;"
 },
 {
   "media": "none",
   "selector": ".popover .arrow",
   "declarations": "position:absolute;display:block;width:0.8rem;height:0.4rem;"
 },
 {
   "media": "none",
   "selector": ".popover .arrow::before",
   "declarations": "position:absolute;display:block;border-color:transparent;border-style:solid;"
 },
 {
   "media": "none",
   "selector": ".popover .arrow::after",
   "declarations": "position:absolute;display:block;border-color:transparent;border-style:solid;"
 },
 {
   "media": "none",
   "selector": ".popover .arrow::before",
   "declarations": "content:\"\";border-width:0.8rem;"
 },
 {
   "media": "none",
   "selector": ".popover .arrow::after",
   "declarations": "content:\"\";border-width:0.8rem;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-top",
   "declarations": "margin-bottom:0.8rem;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"top\"]",
   "declarations": "margin-bottom:0.8rem;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-top .arrow",
   "declarations": "bottom:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"top\"] .arrow",
   "declarations": "bottom:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-top .arrow::before",
   "declarations": "border-bottom-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before",
   "declarations": "border-bottom-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-top .arrow::after",
   "declarations": "border-bottom-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after",
   "declarations": "border-bottom-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-top .arrow::before",
   "declarations": "bottom:-0.8rem;margin-left:-0.8rem;border-top-color:rgba(0, 0, 0, 0.25);"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before",
   "declarations": "bottom:-0.8rem;margin-left:-0.8rem;border-top-color:rgba(0, 0, 0, 0.25);"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-top .arrow::after",
   "declarations": "bottom:calc((0.8rem - 1px) * -1);margin-left:-0.8rem;border-top-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after",
   "declarations": "bottom:calc((0.8rem - 1px) * -1);margin-left:-0.8rem;border-top-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-right",
   "declarations": "margin-left:0.8rem;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"right\"]",
   "declarations": "margin-left:0.8rem;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-right .arrow",
   "declarations": "left:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"right\"] .arrow",
   "declarations": "left:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-right .arrow::before",
   "declarations": "margin-top:-0.8rem;border-left-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before",
   "declarations": "margin-top:-0.8rem;border-left-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-right .arrow::after",
   "declarations": "margin-top:-0.8rem;border-left-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after",
   "declarations": "margin-top:-0.8rem;border-left-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-right .arrow::before",
   "declarations": "left:-0.8rem;border-right-color:rgba(0, 0, 0, 0.25);"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before",
   "declarations": "left:-0.8rem;border-right-color:rgba(0, 0, 0, 0.25);"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-right .arrow::after",
   "declarations": "left:calc((0.8rem - 1px) * -1);border-right-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after",
   "declarations": "left:calc((0.8rem - 1px) * -1);border-right-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-bottom",
   "declarations": "margin-top:0.8rem;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"bottom\"]",
   "declarations": "margin-top:0.8rem;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-bottom .arrow",
   "declarations": "top:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow",
   "declarations": "top:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-bottom .arrow::before",
   "declarations": "margin-left:-0.8rem;border-top-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before",
   "declarations": "margin-left:-0.8rem;border-top-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-bottom .arrow::after",
   "declarations": "margin-left:-0.8rem;border-top-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after",
   "declarations": "margin-left:-0.8rem;border-top-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-bottom .arrow::before",
   "declarations": "top:-0.8rem;border-bottom-color:rgba(0, 0, 0, 0.25);"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before",
   "declarations": "top:-0.8rem;border-bottom-color:rgba(0, 0, 0, 0.25);"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-bottom .arrow::after",
   "declarations": "top:calc((0.8rem - 1px) * -1);border-bottom-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after",
   "declarations": "top:calc((0.8rem - 1px) * -1);border-bottom-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-bottom .popover-header::before",
   "declarations": "position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:\"\";border-bottom:1px solid #f7f7f7;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before",
   "declarations": "position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:\"\";border-bottom:1px solid #f7f7f7;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-left",
   "declarations": "margin-right:0.8rem;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"left\"]",
   "declarations": "margin-right:0.8rem;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-left .arrow",
   "declarations": "right:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"left\"] .arrow",
   "declarations": "right:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-left .arrow::before",
   "declarations": "margin-top:-0.8rem;border-right-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before",
   "declarations": "margin-top:-0.8rem;border-right-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-left .arrow::after",
   "declarations": "margin-top:-0.8rem;border-right-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after",
   "declarations": "margin-top:-0.8rem;border-right-width:0;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-left .arrow::before",
   "declarations": "right:-0.8rem;border-left-color:rgba(0, 0, 0, 0.25);"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before",
   "declarations": "right:-0.8rem;border-left-color:rgba(0, 0, 0, 0.25);"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-left .arrow::after",
   "declarations": "right:calc((0.8rem - 1px) * -1);border-left-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after",
   "declarations": "right:calc((0.8rem - 1px) * -1);border-left-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".popover-header",
   "declarations": "padding:0.5rem 0.75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px);"
 },
 {
   "media": "none",
   "selector": ".popover-header:empty",
   "declarations": "display:none;"
 },
 {
   "media": "none",
   "selector": ".popover-body",
   "declarations": "padding:0.5rem 0.75rem;color:#212529;"
 },
 {
   "media": "none",
   "selector": ".carousel",
   "declarations": "position:relative;"
 },
 {
   "media": "none",
   "selector": ".carousel-inner",
   "declarations": "position:relative;width:100%;overflow:hidden;"
 },
 {
   "media": "none",
   "selector": ".carousel-item",
   "declarations": "position:relative;display:none;-ms-flex-align:center;align-items:center;width:100%;transition:-webkit-transform 0.6s ease;transition:transform 0.6s ease;transition:transform 0.6s ease, -webkit-transform 0.6s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px;"
 },
 {
   "media": "none",
   "selector": ".carousel-item.active",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".carousel-item-next",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".carousel-item-prev",
   "declarations": "display:block;"
 },
 {
   "media": "none",
   "selector": ".carousel-item-next",
   "declarations": "position:absolute;top:0;"
 },
 {
   "media": "none",
   "selector": ".carousel-item-prev",
   "declarations": "position:absolute;top:0;"
 },
 {
   "media": "none",
   "selector": ".carousel-item-next.carousel-item-left",
   "declarations": "-webkit-transform:translateX(0);transform:translateX(0);"
 },
 {
   "media": "none",
   "selector": ".carousel-item-prev.carousel-item-right",
   "declarations": "-webkit-transform:translateX(0);transform:translateX(0);"
 },
 {
   "media": "@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d))",
   "selector": ".carousel-item-next.carousel-item-left",
   "declarations": "-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);"
 },
 {
   "media": "@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d))",
   "selector": ".carousel-item-prev.carousel-item-right",
   "declarations": "-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);"
 },
 {
   "media": "none",
   "selector": ".carousel-item-next",
   "declarations": "-webkit-transform:translateX(100%);transform:translateX(100%);"
 },
 {
   "media": "none",
   "selector": ".active.carousel-item-right",
   "declarations": "-webkit-transform:translateX(100%);transform:translateX(100%);"
 },
 {
   "media": "@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d))",
   "selector": ".carousel-item-next",
   "declarations": "-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);"
 },
 {
   "media": "@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d))",
   "selector": ".active.carousel-item-right",
   "declarations": "-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);"
 },
 {
   "media": "none",
   "selector": ".carousel-item-prev",
   "declarations": "-webkit-transform:translateX(-100%);transform:translateX(-100%);"
 },
 {
   "media": "none",
   "selector": ".active.carousel-item-left",
   "declarations": "-webkit-transform:translateX(-100%);transform:translateX(-100%);"
 },
 {
   "media": "@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d))",
   "selector": ".carousel-item-prev",
   "declarations": "-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);"
 },
 {
   "media": "@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d))",
   "selector": ".active.carousel-item-left",
   "declarations": "-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);"
 },
 {
   "media": "none",
   "selector": ".carousel-control-prev",
   "declarations": "position:absolute;top:0;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:0.5;"
 },
 {
   "media": "none",
   "selector": ".carousel-control-next",
   "declarations": "position:absolute;top:0;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:0.5;"
 },
 {
   "media": "none",
   "selector": ".carousel-control-prev:focus",
   "declarations": "color:#fff;text-decoration:none;outline:0;opacity:.9;"
 },
 {
   "media": "none",
   "selector": ".carousel-control-prev:hover",
   "declarations": "color:#fff;text-decoration:none;outline:0;opacity:.9;"
 },
 {
   "media": "none",
   "selector": ".carousel-control-next:focus",
   "declarations": "color:#fff;text-decoration:none;outline:0;opacity:.9;"
 },
 {
   "media": "none",
   "selector": ".carousel-control-next:hover",
   "declarations": "color:#fff;text-decoration:none;outline:0;opacity:.9;"
 },
 {
   "media": "none",
   "selector": ".carousel-control-prev",
   "declarations": "left:0;"
 },
 {
   "media": "none",
   "selector": ".carousel-control-next",
   "declarations": "right:0;"
 },
 {
   "media": "none",
   "selector": ".carousel-control-prev-icon",
   "declarations": "display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;background-size:100% 100%;"
 },
 {
   "media": "none",
   "selector": ".carousel-control-next-icon",
   "declarations": "display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;background-size:100% 100%;"
 },
 {
   "media": "none",
   "selector": ".carousel-control-prev-icon",
   "declarations": "background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");"
 },
 {
   "media": "none",
   "selector": ".carousel-control-next-icon",
   "declarations": "background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");"
 },
 {
   "media": "none",
   "selector": ".carousel-indicators",
   "declarations": "position:absolute;right:0;bottom:10px;left:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none;"
 },
 {
   "media": "none",
   "selector": ".carousel-indicators li",
   "declarations": "position:relative;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;background-color:rgba(255, 255, 255, 0.5);"
 },
 {
   "media": "none",
   "selector": ".carousel-indicators li::before",
   "declarations": "position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:\"\";"
 },
 {
   "media": "none",
   "selector": ".carousel-indicators li::after",
   "declarations": "position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:\"\";"
 },
 {
   "media": "none",
   "selector": ".carousel-indicators .active",
   "declarations": "background-color:#fff;"
 },
 {
   "media": "none",
   "selector": ".carousel-caption",
   "declarations": "position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;"
 },
 {
   "media": "none",
   "selector": ".align-baseline",
   "declarations": "vertical-align:baseline!important;"
 },
 {
   "media": "none",
   "selector": ".align-top",
   "declarations": "vertical-align:top!important;"
 },
 {
   "media": "none",
   "selector": ".align-middle",
   "declarations": "vertical-align:middle!important;"
 },
 {
   "media": "none",
   "selector": ".align-bottom",
   "declarations": "vertical-align:bottom!important;"
 },
 {
   "media": "none",
   "selector": ".align-text-bottom",
   "declarations": "vertical-align:text-bottom!important;"
 },
 {
   "media": "none",
   "selector": ".align-text-top",
   "declarations": "vertical-align:text-top!important;"
 },
 {
   "media": "none",
   "selector": ".bg-primary",
   "declarations": "background-color:#007bff!important;"
 },
 {
   "media": "none",
   "selector": "a.bg-primary:focus, a.bg-primary:hover",
   "declarations": "background-color:#0062cc!important;"
 },
 {
   "media": "none",
   "selector": ".bg-secondary",
   "declarations": "background-color:#868e96!important;"
 },
 {
   "media": "none",
   "selector": "a.bg-secondary:focus, a.bg-secondary:hover",
   "declarations": "background-color:#6c757d!important;"
 },
 {
   "media": "none",
   "selector": ".bg-success",
   "declarations": "background-color:#28a745!important;"
 },
 {
   "media": "none",
   "selector": "a.bg-success:focus, a.bg-success:hover",
   "declarations": "background-color:#1e7e34!important;"
 },
 {
   "media": "none",
   "selector": ".bg-info",
   "declarations": "background-color:#17a2b8!important;"
 },
 {
   "media": "none",
   "selector": "a.bg-info:focus, a.bg-info:hover",
   "declarations": "background-color:#117a8b!important;"
 },
 {
   "media": "none",
   "selector": ".bg-warning",
   "declarations": "background-color:#ffc107!important;"
 },
 {
   "media": "none",
   "selector": "a.bg-warning:focus, a.bg-warning:hover",
   "declarations": "background-color:#d39e00!important;"
 },
 {
   "media": "none",
   "selector": ".bg-danger",
   "declarations": "background-color:#dc3545!important;"
 },
 {
   "media": "none",
   "selector": "a.bg-danger:focus, a.bg-danger:hover",
   "declarations": "background-color:#bd2130!important;"
 },
 {
   "media": "none",
   "selector": ".bg-light",
   "declarations": "background-color:#f8f9fa!important;"
 },
 {
   "media": "none",
   "selector": "a.bg-light:focus, a.bg-light:hover",
   "declarations": "background-color:#dae0e5!important;"
 },
 {
   "media": "none",
   "selector": ".bg-dark",
   "declarations": "background-color:#343a40!important;"
 },
 {
   "media": "none",
   "selector": "a.bg-dark:focus, a.bg-dark:hover",
   "declarations": "background-color:#1d2124!important;"
 },
 {
   "media": "none",
   "selector": ".bg-white",
   "declarations": "background-color:#fff!important;"
 },
 {
   "media": "none",
   "selector": ".bg-transparent",
   "declarations": "background-color:transparent!important;"
 },
 {
   "media": "none",
   "selector": ".border",
   "declarations": "border:1px solid #e9ecef!important;"
 },
 {
   "media": "none",
   "selector": ".border-0",
   "declarations": "border:0!important;"
 },
 {
   "media": "none",
   "selector": ".border-top-0",
   "declarations": "border-top:0!important;"
 },
 {
   "media": "none",
   "selector": ".border-right-0",
   "declarations": "border-right:0!important;"
 },
 {
   "media": "none",
   "selector": ".border-bottom-0",
   "declarations": "border-bottom:0!important;"
 },
 {
   "media": "none",
   "selector": ".border-left-0",
   "declarations": "border-left:0!important;"
 },
 {
   "media": "none",
   "selector": ".border-primary",
   "declarations": "border-color:#007bff!important;"
 },
 {
   "media": "none",
   "selector": ".border-secondary",
   "declarations": "border-color:#868e96!important;"
 },
 {
   "media": "none",
   "selector": ".border-success",
   "declarations": "border-color:#28a745!important;"
 },
 {
   "media": "none",
   "selector": ".border-info",
   "declarations": "border-color:#17a2b8!important;"
 },
 {
   "media": "none",
   "selector": ".border-warning",
   "declarations": "border-color:#ffc107!important;"
 },
 {
   "media": "none",
   "selector": ".border-danger",
   "declarations": "border-color:#dc3545!important;"
 },
 {
   "media": "none",
   "selector": ".border-light",
   "declarations": "border-color:#f8f9fa!important;"
 },
 {
   "media": "none",
   "selector": ".border-dark",
   "declarations": "border-color:#343a40!important;"
 },
 {
   "media": "none",
   "selector": ".border-white",
   "declarations": "border-color:#fff!important;"
 },
 {
   "media": "none",
   "selector": ".rounded",
   "declarations": "border-radius:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".rounded-top",
   "declarations": "border-top-left-radius:0.25rem!important;border-top-right-radius:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".rounded-right",
   "declarations": "border-top-right-radius:0.25rem!important;border-bottom-right-radius:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".rounded-bottom",
   "declarations": "border-bottom-right-radius:0.25rem!important;border-bottom-left-radius:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".rounded-left",
   "declarations": "border-top-left-radius:0.25rem!important;border-bottom-left-radius:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".rounded-circle",
   "declarations": "border-radius:50%!important;"
 },
 {
   "media": "none",
   "selector": ".rounded-0",
   "declarations": "border-radius:0!important;"
 },
 {
   "media": "none",
   "selector": ".clearfix::after",
   "declarations": "display:block;clear:both;content:\"\";"
 },
 {
   "media": "none",
   "selector": ".d-none",
   "declarations": "display:none!important;"
 },
 {
   "media": "none",
   "selector": ".d-inline",
   "declarations": "display:inline!important;"
 },
 {
   "media": "none",
   "selector": ".d-inline-block",
   "declarations": "display:inline-block!important;"
 },
 {
   "media": "none",
   "selector": ".d-block",
   "declarations": "display:block!important;"
 },
 {
   "media": "none",
   "selector": ".d-table",
   "declarations": "display:table!important;"
 },
 {
   "media": "none",
   "selector": ".d-table-row",
   "declarations": "display:table-row!important;"
 },
 {
   "media": "none",
   "selector": ".d-table-cell",
   "declarations": "display:table-cell!important;"
 },
 {
   "media": "none",
   "selector": ".d-flex",
   "declarations": "display:-ms-flexbox!important;display:flex!important;"
 },
 {
   "media": "none",
   "selector": ".d-inline-flex",
   "declarations": "display:-ms-inline-flexbox!important;display:inline-flex!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".d-sm-none",
   "declarations": "display:none!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".d-sm-inline",
   "declarations": "display:inline!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".d-sm-inline-block",
   "declarations": "display:inline-block!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".d-sm-block",
   "declarations": "display:block!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".d-sm-table",
   "declarations": "display:table!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".d-sm-table-row",
   "declarations": "display:table-row!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".d-sm-table-cell",
   "declarations": "display:table-cell!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".d-sm-flex",
   "declarations": "display:-ms-flexbox!important;display:flex!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".d-sm-inline-flex",
   "declarations": "display:-ms-inline-flexbox!important;display:inline-flex!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".d-md-none",
   "declarations": "display:none!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".d-md-inline",
   "declarations": "display:inline!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".d-md-inline-block",
   "declarations": "display:inline-block!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".d-md-block",
   "declarations": "display:block!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".d-md-table",
   "declarations": "display:table!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".d-md-table-row",
   "declarations": "display:table-row!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".d-md-table-cell",
   "declarations": "display:table-cell!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".d-md-flex",
   "declarations": "display:-ms-flexbox!important;display:flex!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".d-md-inline-flex",
   "declarations": "display:-ms-inline-flexbox!important;display:inline-flex!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".d-lg-none",
   "declarations": "display:none!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".d-lg-inline",
   "declarations": "display:inline!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".d-lg-inline-block",
   "declarations": "display:inline-block!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".d-lg-block",
   "declarations": "display:block!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".d-lg-table",
   "declarations": "display:table!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".d-lg-table-row",
   "declarations": "display:table-row!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".d-lg-table-cell",
   "declarations": "display:table-cell!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".d-lg-flex",
   "declarations": "display:-ms-flexbox!important;display:flex!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".d-lg-inline-flex",
   "declarations": "display:-ms-inline-flexbox!important;display:inline-flex!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".d-xl-none",
   "declarations": "display:none!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".d-xl-inline",
   "declarations": "display:inline!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".d-xl-inline-block",
   "declarations": "display:inline-block!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".d-xl-block",
   "declarations": "display:block!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".d-xl-table",
   "declarations": "display:table!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".d-xl-table-row",
   "declarations": "display:table-row!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".d-xl-table-cell",
   "declarations": "display:table-cell!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".d-xl-flex",
   "declarations": "display:-ms-flexbox!important;display:flex!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".d-xl-inline-flex",
   "declarations": "display:-ms-inline-flexbox!important;display:inline-flex!important;"
 },
 {
   "media": "none",
   "selector": ".d-print-block",
   "declarations": "display:none!important;"
 },
 {
   "media": "none",
   "selector": ".d-print-inline",
   "declarations": "display:none!important;"
 },
 {
   "media": "none",
   "selector": ".d-print-inline-block",
   "declarations": "display:none!important;"
 },
 {
   "media": "none",
   "selector": ".embed-responsive",
   "declarations": "position:relative;display:block;width:100%;padding:0;overflow:hidden;"
 },
 {
   "media": "none",
   "selector": ".embed-responsive::before",
   "declarations": "display:block;content:\"\";"
 },
 {
   "media": "none",
   "selector": ".embed-responsive .embed-responsive-item",
   "declarations": "position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;"
 },
 {
   "media": "none",
   "selector": ".embed-responsive iframe",
   "declarations": "position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;"
 },
 {
   "media": "none",
   "selector": ".embed-responsive embed",
   "declarations": "position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;"
 },
 {
   "media": "none",
   "selector": ".embed-responsive object",
   "declarations": "position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;"
 },
 {
   "media": "none",
   "selector": ".embed-responsive video",
   "declarations": "position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;"
 },
 {
   "media": "none",
   "selector": ".embed-responsive-21by9::before",
   "declarations": "padding-top:42.857143%;"
 },
 {
   "media": "none",
   "selector": ".embed-responsive-16by9::before",
   "declarations": "padding-top:56.25%;"
 },
 {
   "media": "none",
   "selector": ".embed-responsive-4by3::before",
   "declarations": "padding-top:75%;"
 },
 {
   "media": "none",
   "selector": ".embed-responsive-1by1::before",
   "declarations": "padding-top:100%;"
 },
 {
   "media": "none",
   "selector": ".flex-row",
   "declarations": "-ms-flex-direction:row!important;flex-direction:row!important;"
 },
 {
   "media": "none",
   "selector": ".flex-column",
   "declarations": "-ms-flex-direction:column!important;flex-direction:column!important;"
 },
 {
   "media": "none",
   "selector": ".flex-row-reverse",
   "declarations": "-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important;"
 },
 {
   "media": "none",
   "selector": ".flex-column-reverse",
   "declarations": "-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important;"
 },
 {
   "media": "none",
   "selector": ".flex-wrap",
   "declarations": "-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;"
 },
 {
   "media": "none",
   "selector": ".flex-nowrap",
   "declarations": "-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important;"
 },
 {
   "media": "none",
   "selector": ".flex-wrap-reverse",
   "declarations": "-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important;"
 },
 {
   "media": "none",
   "selector": ".justify-content-start",
   "declarations": "-ms-flex-pack:start!important;justify-content:flex-start!important;"
 },
 {
   "media": "none",
   "selector": ".justify-content-end",
   "declarations": "-ms-flex-pack:end!important;justify-content:flex-end!important;"
 },
 {
   "media": "none",
   "selector": ".justify-content-center",
   "declarations": "-ms-flex-pack:center!important;justify-content:center!important;"
 },
 {
   "media": "none",
   "selector": ".justify-content-between",
   "declarations": "-ms-flex-pack:justify!important;justify-content:space-between!important;"
 },
 {
   "media": "none",
   "selector": ".justify-content-around",
   "declarations": "-ms-flex-pack:distribute!important;justify-content:space-around!important;"
 },
 {
   "media": "none",
   "selector": ".align-items-start",
   "declarations": "-ms-flex-align:start!important;align-items:flex-start!important;"
 },
 {
   "media": "none",
   "selector": ".align-items-end",
   "declarations": "-ms-flex-align:end!important;align-items:flex-end!important;"
 },
 {
   "media": "none",
   "selector": ".align-items-center",
   "declarations": "-ms-flex-align:center!important;align-items:center!important;"
 },
 {
   "media": "none",
   "selector": ".align-items-baseline",
   "declarations": "-ms-flex-align:baseline!important;align-items:baseline!important;"
 },
 {
   "media": "none",
   "selector": ".align-items-stretch",
   "declarations": "-ms-flex-align:stretch!important;align-items:stretch!important;"
 },
 {
   "media": "none",
   "selector": ".align-content-start",
   "declarations": "-ms-flex-line-pack:start!important;align-content:flex-start!important;"
 },
 {
   "media": "none",
   "selector": ".align-content-end",
   "declarations": "-ms-flex-line-pack:end!important;align-content:flex-end!important;"
 },
 {
   "media": "none",
   "selector": ".align-content-center",
   "declarations": "-ms-flex-line-pack:center!important;align-content:center!important;"
 },
 {
   "media": "none",
   "selector": ".align-content-between",
   "declarations": "-ms-flex-line-pack:justify!important;align-content:space-between!important;"
 },
 {
   "media": "none",
   "selector": ".align-content-around",
   "declarations": "-ms-flex-line-pack:distribute!important;align-content:space-around!important;"
 },
 {
   "media": "none",
   "selector": ".align-content-stretch",
   "declarations": "-ms-flex-line-pack:stretch!important;align-content:stretch!important;"
 },
 {
   "media": "none",
   "selector": ".align-self-auto",
   "declarations": "-ms-flex-item-align:auto!important;align-self:auto!important;"
 },
 {
   "media": "none",
   "selector": ".align-self-start",
   "declarations": "-ms-flex-item-align:start!important;align-self:flex-start!important;"
 },
 {
   "media": "none",
   "selector": ".align-self-end",
   "declarations": "-ms-flex-item-align:end!important;align-self:flex-end!important;"
 },
 {
   "media": "none",
   "selector": ".align-self-center",
   "declarations": "-ms-flex-item-align:center!important;align-self:center!important;"
 },
 {
   "media": "none",
   "selector": ".align-self-baseline",
   "declarations": "-ms-flex-item-align:baseline!important;align-self:baseline!important;"
 },
 {
   "media": "none",
   "selector": ".align-self-stretch",
   "declarations": "-ms-flex-item-align:stretch!important;align-self:stretch!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".flex-sm-row",
   "declarations": "-ms-flex-direction:row!important;flex-direction:row!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".flex-sm-column",
   "declarations": "-ms-flex-direction:column!important;flex-direction:column!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".flex-sm-row-reverse",
   "declarations": "-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".flex-sm-column-reverse",
   "declarations": "-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".flex-sm-wrap",
   "declarations": "-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".flex-sm-nowrap",
   "declarations": "-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".flex-sm-wrap-reverse",
   "declarations": "-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".justify-content-sm-start",
   "declarations": "-ms-flex-pack:start!important;justify-content:flex-start!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".justify-content-sm-end",
   "declarations": "-ms-flex-pack:end!important;justify-content:flex-end!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".justify-content-sm-center",
   "declarations": "-ms-flex-pack:center!important;justify-content:center!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".justify-content-sm-between",
   "declarations": "-ms-flex-pack:justify!important;justify-content:space-between!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".justify-content-sm-around",
   "declarations": "-ms-flex-pack:distribute!important;justify-content:space-around!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-items-sm-start",
   "declarations": "-ms-flex-align:start!important;align-items:flex-start!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-items-sm-end",
   "declarations": "-ms-flex-align:end!important;align-items:flex-end!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-items-sm-center",
   "declarations": "-ms-flex-align:center!important;align-items:center!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-items-sm-baseline",
   "declarations": "-ms-flex-align:baseline!important;align-items:baseline!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-items-sm-stretch",
   "declarations": "-ms-flex-align:stretch!important;align-items:stretch!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-content-sm-start",
   "declarations": "-ms-flex-line-pack:start!important;align-content:flex-start!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-content-sm-end",
   "declarations": "-ms-flex-line-pack:end!important;align-content:flex-end!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-content-sm-center",
   "declarations": "-ms-flex-line-pack:center!important;align-content:center!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-content-sm-between",
   "declarations": "-ms-flex-line-pack:justify!important;align-content:space-between!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-content-sm-around",
   "declarations": "-ms-flex-line-pack:distribute!important;align-content:space-around!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-content-sm-stretch",
   "declarations": "-ms-flex-line-pack:stretch!important;align-content:stretch!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-self-sm-auto",
   "declarations": "-ms-flex-item-align:auto!important;align-self:auto!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-self-sm-start",
   "declarations": "-ms-flex-item-align:start!important;align-self:flex-start!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-self-sm-end",
   "declarations": "-ms-flex-item-align:end!important;align-self:flex-end!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-self-sm-center",
   "declarations": "-ms-flex-item-align:center!important;align-self:center!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-self-sm-baseline",
   "declarations": "-ms-flex-item-align:baseline!important;align-self:baseline!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".align-self-sm-stretch",
   "declarations": "-ms-flex-item-align:stretch!important;align-self:stretch!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".flex-md-row",
   "declarations": "-ms-flex-direction:row!important;flex-direction:row!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".flex-md-column",
   "declarations": "-ms-flex-direction:column!important;flex-direction:column!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".flex-md-row-reverse",
   "declarations": "-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".flex-md-column-reverse",
   "declarations": "-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".flex-md-wrap",
   "declarations": "-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".flex-md-nowrap",
   "declarations": "-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".flex-md-wrap-reverse",
   "declarations": "-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".justify-content-md-start",
   "declarations": "-ms-flex-pack:start!important;justify-content:flex-start!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".justify-content-md-end",
   "declarations": "-ms-flex-pack:end!important;justify-content:flex-end!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".justify-content-md-center",
   "declarations": "-ms-flex-pack:center!important;justify-content:center!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".justify-content-md-between",
   "declarations": "-ms-flex-pack:justify!important;justify-content:space-between!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".justify-content-md-around",
   "declarations": "-ms-flex-pack:distribute!important;justify-content:space-around!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-items-md-start",
   "declarations": "-ms-flex-align:start!important;align-items:flex-start!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-items-md-end",
   "declarations": "-ms-flex-align:end!important;align-items:flex-end!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-items-md-center",
   "declarations": "-ms-flex-align:center!important;align-items:center!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-items-md-baseline",
   "declarations": "-ms-flex-align:baseline!important;align-items:baseline!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-items-md-stretch",
   "declarations": "-ms-flex-align:stretch!important;align-items:stretch!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-content-md-start",
   "declarations": "-ms-flex-line-pack:start!important;align-content:flex-start!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-content-md-end",
   "declarations": "-ms-flex-line-pack:end!important;align-content:flex-end!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-content-md-center",
   "declarations": "-ms-flex-line-pack:center!important;align-content:center!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-content-md-between",
   "declarations": "-ms-flex-line-pack:justify!important;align-content:space-between!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-content-md-around",
   "declarations": "-ms-flex-line-pack:distribute!important;align-content:space-around!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-content-md-stretch",
   "declarations": "-ms-flex-line-pack:stretch!important;align-content:stretch!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-self-md-auto",
   "declarations": "-ms-flex-item-align:auto!important;align-self:auto!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-self-md-start",
   "declarations": "-ms-flex-item-align:start!important;align-self:flex-start!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-self-md-end",
   "declarations": "-ms-flex-item-align:end!important;align-self:flex-end!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-self-md-center",
   "declarations": "-ms-flex-item-align:center!important;align-self:center!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-self-md-baseline",
   "declarations": "-ms-flex-item-align:baseline!important;align-self:baseline!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".align-self-md-stretch",
   "declarations": "-ms-flex-item-align:stretch!important;align-self:stretch!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".flex-lg-row",
   "declarations": "-ms-flex-direction:row!important;flex-direction:row!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".flex-lg-column",
   "declarations": "-ms-flex-direction:column!important;flex-direction:column!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".flex-lg-row-reverse",
   "declarations": "-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".flex-lg-column-reverse",
   "declarations": "-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".flex-lg-wrap",
   "declarations": "-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".flex-lg-nowrap",
   "declarations": "-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".flex-lg-wrap-reverse",
   "declarations": "-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".justify-content-lg-start",
   "declarations": "-ms-flex-pack:start!important;justify-content:flex-start!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".justify-content-lg-end",
   "declarations": "-ms-flex-pack:end!important;justify-content:flex-end!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".justify-content-lg-center",
   "declarations": "-ms-flex-pack:center!important;justify-content:center!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".justify-content-lg-between",
   "declarations": "-ms-flex-pack:justify!important;justify-content:space-between!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".justify-content-lg-around",
   "declarations": "-ms-flex-pack:distribute!important;justify-content:space-around!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-items-lg-start",
   "declarations": "-ms-flex-align:start!important;align-items:flex-start!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-items-lg-end",
   "declarations": "-ms-flex-align:end!important;align-items:flex-end!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-items-lg-center",
   "declarations": "-ms-flex-align:center!important;align-items:center!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-items-lg-baseline",
   "declarations": "-ms-flex-align:baseline!important;align-items:baseline!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-items-lg-stretch",
   "declarations": "-ms-flex-align:stretch!important;align-items:stretch!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-content-lg-start",
   "declarations": "-ms-flex-line-pack:start!important;align-content:flex-start!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-content-lg-end",
   "declarations": "-ms-flex-line-pack:end!important;align-content:flex-end!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-content-lg-center",
   "declarations": "-ms-flex-line-pack:center!important;align-content:center!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-content-lg-between",
   "declarations": "-ms-flex-line-pack:justify!important;align-content:space-between!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-content-lg-around",
   "declarations": "-ms-flex-line-pack:distribute!important;align-content:space-around!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-content-lg-stretch",
   "declarations": "-ms-flex-line-pack:stretch!important;align-content:stretch!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-self-lg-auto",
   "declarations": "-ms-flex-item-align:auto!important;align-self:auto!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-self-lg-start",
   "declarations": "-ms-flex-item-align:start!important;align-self:flex-start!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-self-lg-end",
   "declarations": "-ms-flex-item-align:end!important;align-self:flex-end!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-self-lg-center",
   "declarations": "-ms-flex-item-align:center!important;align-self:center!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-self-lg-baseline",
   "declarations": "-ms-flex-item-align:baseline!important;align-self:baseline!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".align-self-lg-stretch",
   "declarations": "-ms-flex-item-align:stretch!important;align-self:stretch!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".flex-xl-row",
   "declarations": "-ms-flex-direction:row!important;flex-direction:row!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".flex-xl-column",
   "declarations": "-ms-flex-direction:column!important;flex-direction:column!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".flex-xl-row-reverse",
   "declarations": "-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".flex-xl-column-reverse",
   "declarations": "-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".flex-xl-wrap",
   "declarations": "-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".flex-xl-nowrap",
   "declarations": "-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".flex-xl-wrap-reverse",
   "declarations": "-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".justify-content-xl-start",
   "declarations": "-ms-flex-pack:start!important;justify-content:flex-start!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".justify-content-xl-end",
   "declarations": "-ms-flex-pack:end!important;justify-content:flex-end!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".justify-content-xl-center",
   "declarations": "-ms-flex-pack:center!important;justify-content:center!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".justify-content-xl-between",
   "declarations": "-ms-flex-pack:justify!important;justify-content:space-between!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".justify-content-xl-around",
   "declarations": "-ms-flex-pack:distribute!important;justify-content:space-around!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-items-xl-start",
   "declarations": "-ms-flex-align:start!important;align-items:flex-start!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-items-xl-end",
   "declarations": "-ms-flex-align:end!important;align-items:flex-end!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-items-xl-center",
   "declarations": "-ms-flex-align:center!important;align-items:center!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-items-xl-baseline",
   "declarations": "-ms-flex-align:baseline!important;align-items:baseline!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-items-xl-stretch",
   "declarations": "-ms-flex-align:stretch!important;align-items:stretch!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-content-xl-start",
   "declarations": "-ms-flex-line-pack:start!important;align-content:flex-start!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-content-xl-end",
   "declarations": "-ms-flex-line-pack:end!important;align-content:flex-end!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-content-xl-center",
   "declarations": "-ms-flex-line-pack:center!important;align-content:center!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-content-xl-between",
   "declarations": "-ms-flex-line-pack:justify!important;align-content:space-between!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-content-xl-around",
   "declarations": "-ms-flex-line-pack:distribute!important;align-content:space-around!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-content-xl-stretch",
   "declarations": "-ms-flex-line-pack:stretch!important;align-content:stretch!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-self-xl-auto",
   "declarations": "-ms-flex-item-align:auto!important;align-self:auto!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-self-xl-start",
   "declarations": "-ms-flex-item-align:start!important;align-self:flex-start!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-self-xl-end",
   "declarations": "-ms-flex-item-align:end!important;align-self:flex-end!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-self-xl-center",
   "declarations": "-ms-flex-item-align:center!important;align-self:center!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-self-xl-baseline",
   "declarations": "-ms-flex-item-align:baseline!important;align-self:baseline!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".align-self-xl-stretch",
   "declarations": "-ms-flex-item-align:stretch!important;align-self:stretch!important;"
 },
 {
   "media": "none",
   "selector": ".float-left",
   "declarations": "float:left!important;"
 },
 {
   "media": "none",
   "selector": ".float-right",
   "declarations": "float:right!important;"
 },
 {
   "media": "none",
   "selector": ".float-none",
   "declarations": "float:none!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".float-sm-left",
   "declarations": "float:left!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".float-sm-right",
   "declarations": "float:right!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".float-sm-none",
   "declarations": "float:none!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".float-md-left",
   "declarations": "float:left!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".float-md-right",
   "declarations": "float:right!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".float-md-none",
   "declarations": "float:none!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".float-lg-left",
   "declarations": "float:left!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".float-lg-right",
   "declarations": "float:right!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".float-lg-none",
   "declarations": "float:none!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".float-xl-left",
   "declarations": "float:left!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".float-xl-right",
   "declarations": "float:right!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".float-xl-none",
   "declarations": "float:none!important;"
 },
 {
   "media": "none",
   "selector": ".position-static",
   "declarations": "position:static!important;"
 },
 {
   "media": "none",
   "selector": ".position-relative",
   "declarations": "position:relative!important;"
 },
 {
   "media": "none",
   "selector": ".position-absolute",
   "declarations": "position:absolute!important;"
 },
 {
   "media": "none",
   "selector": ".position-fixed",
   "declarations": "position:fixed!important;"
 },
 {
   "media": "none",
   "selector": ".position-sticky",
   "declarations": "position:-webkit-sticky!important;position:sticky!important;"
 },
 {
   "media": "none",
   "selector": ".fixed-top",
   "declarations": "position:fixed;top:0;right:0;left:0;z-index:1030;"
 },
 {
   "media": "none",
   "selector": ".fixed-bottom",
   "declarations": "position:fixed;right:0;bottom:0;left:0;z-index:1030;"
 },
 {
   "media": "@supports ((position:-webkit-sticky) or (position:sticky))",
   "selector": ".sticky-top",
   "declarations": "position:-webkit-sticky;position:sticky;top:0;z-index:1020;"
 },
 {
   "media": "none",
   "selector": ".sr-only",
   "declarations": "position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0;"
 },
 {
   "media": "none",
   "selector": ".sr-only-focusable:active",
   "declarations": "position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal;-webkit-clip-path:none;clip-path:none;"
 },
 {
   "media": "none",
   "selector": ".sr-only-focusable:focus",
   "declarations": "position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal;-webkit-clip-path:none;clip-path:none;"
 },
 {
   "media": "none",
   "selector": ".w-25",
   "declarations": "width:25%!important;"
 },
 {
   "media": "none",
   "selector": ".w-50",
   "declarations": "width:50%!important;"
 },
 {
   "media": "none",
   "selector": ".w-75",
   "declarations": "width:75%!important;"
 },
 {
   "media": "none",
   "selector": ".w-100",
   "declarations": "width:100%!important;"
 },
 {
   "media": "none",
   "selector": ".h-25",
   "declarations": "height:25%!important;"
 },
 {
   "media": "none",
   "selector": ".h-50",
   "declarations": "height:50%!important;"
 },
 {
   "media": "none",
   "selector": ".h-75",
   "declarations": "height:75%!important;"
 },
 {
   "media": "none",
   "selector": ".h-100",
   "declarations": "height:100%!important;"
 },
 {
   "media": "none",
   "selector": ".mw-100",
   "declarations": "max-width:100%!important;"
 },
 {
   "media": "none",
   "selector": ".mh-100",
   "declarations": "max-height:100%!important;"
 },
 {
   "media": "none",
   "selector": ".m-0",
   "declarations": "margin:0!important;"
 },
 {
   "media": "none",
   "selector": ".mt-0",
   "declarations": "margin-top:0!important;"
 },
 {
   "media": "none",
   "selector": ".my-0",
   "declarations": "margin-top:0!important;"
 },
 {
   "media": "none",
   "selector": ".mr-0",
   "declarations": "margin-right:0!important;"
 },
 {
   "media": "none",
   "selector": ".mx-0",
   "declarations": "margin-right:0!important;"
 },
 {
   "media": "none",
   "selector": ".mb-0",
   "declarations": "margin-bottom:0!important;"
 },
 {
   "media": "none",
   "selector": ".my-0",
   "declarations": "margin-bottom:0!important;"
 },
 {
   "media": "none",
   "selector": ".ml-0",
   "declarations": "margin-left:0!important;"
 },
 {
   "media": "none",
   "selector": ".mx-0",
   "declarations": "margin-left:0!important;"
 },
 {
   "media": "none",
   "selector": ".m-1",
   "declarations": "margin:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".mt-1",
   "declarations": "margin-top:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".my-1",
   "declarations": "margin-top:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".mr-1",
   "declarations": "margin-right:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".mx-1",
   "declarations": "margin-right:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".mb-1",
   "declarations": "margin-bottom:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".my-1",
   "declarations": "margin-bottom:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".ml-1",
   "declarations": "margin-left:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".mx-1",
   "declarations": "margin-left:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".m-2",
   "declarations": "margin:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".mt-2",
   "declarations": "margin-top:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".my-2",
   "declarations": "margin-top:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".mr-2",
   "declarations": "margin-right:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".mx-2",
   "declarations": "margin-right:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".mb-2",
   "declarations": "margin-bottom:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".my-2",
   "declarations": "margin-bottom:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".ml-2",
   "declarations": "margin-left:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".mx-2",
   "declarations": "margin-left:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".m-3",
   "declarations": "margin:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".mt-3",
   "declarations": "margin-top:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".my-3",
   "declarations": "margin-top:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".mr-3",
   "declarations": "margin-right:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".mx-3",
   "declarations": "margin-right:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".mb-3",
   "declarations": "margin-bottom:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".my-3",
   "declarations": "margin-bottom:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".ml-3",
   "declarations": "margin-left:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".mx-3",
   "declarations": "margin-left:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".m-4",
   "declarations": "margin:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".mt-4",
   "declarations": "margin-top:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".my-4",
   "declarations": "margin-top:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".mr-4",
   "declarations": "margin-right:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".mx-4",
   "declarations": "margin-right:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".mb-4",
   "declarations": "margin-bottom:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".my-4",
   "declarations": "margin-bottom:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".ml-4",
   "declarations": "margin-left:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".mx-4",
   "declarations": "margin-left:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".m-5",
   "declarations": "margin:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".mt-5",
   "declarations": "margin-top:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".my-5",
   "declarations": "margin-top:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".mr-5",
   "declarations": "margin-right:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".mx-5",
   "declarations": "margin-right:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".mb-5",
   "declarations": "margin-bottom:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".my-5",
   "declarations": "margin-bottom:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".ml-5",
   "declarations": "margin-left:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".mx-5",
   "declarations": "margin-left:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".p-0",
   "declarations": "padding:0!important;"
 },
 {
   "media": "none",
   "selector": ".pt-0",
   "declarations": "padding-top:0!important;"
 },
 {
   "media": "none",
   "selector": ".py-0",
   "declarations": "padding-top:0!important;"
 },
 {
   "media": "none",
   "selector": ".pr-0",
   "declarations": "padding-right:0!important;"
 },
 {
   "media": "none",
   "selector": ".px-0",
   "declarations": "padding-right:0!important;"
 },
 {
   "media": "none",
   "selector": ".pb-0",
   "declarations": "padding-bottom:0!important;"
 },
 {
   "media": "none",
   "selector": ".py-0",
   "declarations": "padding-bottom:0!important;"
 },
 {
   "media": "none",
   "selector": ".pl-0",
   "declarations": "padding-left:0!important;"
 },
 {
   "media": "none",
   "selector": ".px-0",
   "declarations": "padding-left:0!important;"
 },
 {
   "media": "none",
   "selector": ".p-1",
   "declarations": "padding:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".pt-1",
   "declarations": "padding-top:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".py-1",
   "declarations": "padding-top:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".pr-1",
   "declarations": "padding-right:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".px-1",
   "declarations": "padding-right:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".pb-1",
   "declarations": "padding-bottom:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".py-1",
   "declarations": "padding-bottom:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".pl-1",
   "declarations": "padding-left:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".px-1",
   "declarations": "padding-left:0.25rem!important;"
 },
 {
   "media": "none",
   "selector": ".p-2",
   "declarations": "padding:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".pt-2",
   "declarations": "padding-top:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".py-2",
   "declarations": "padding-top:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".pr-2",
   "declarations": "padding-right:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".px-2",
   "declarations": "padding-right:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".pb-2",
   "declarations": "padding-bottom:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".py-2",
   "declarations": "padding-bottom:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".pl-2",
   "declarations": "padding-left:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".px-2",
   "declarations": "padding-left:0.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".p-3",
   "declarations": "padding:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".pt-3",
   "declarations": "padding-top:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".py-3",
   "declarations": "padding-top:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".pr-3",
   "declarations": "padding-right:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".px-3",
   "declarations": "padding-right:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".pb-3",
   "declarations": "padding-bottom:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".py-3",
   "declarations": "padding-bottom:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".pl-3",
   "declarations": "padding-left:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".px-3",
   "declarations": "padding-left:1rem!important;"
 },
 {
   "media": "none",
   "selector": ".p-4",
   "declarations": "padding:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".pt-4",
   "declarations": "padding-top:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".py-4",
   "declarations": "padding-top:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".pr-4",
   "declarations": "padding-right:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".px-4",
   "declarations": "padding-right:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".pb-4",
   "declarations": "padding-bottom:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".py-4",
   "declarations": "padding-bottom:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".pl-4",
   "declarations": "padding-left:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".px-4",
   "declarations": "padding-left:1.5rem!important;"
 },
 {
   "media": "none",
   "selector": ".p-5",
   "declarations": "padding:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".pt-5",
   "declarations": "padding-top:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".py-5",
   "declarations": "padding-top:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".pr-5",
   "declarations": "padding-right:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".px-5",
   "declarations": "padding-right:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".pb-5",
   "declarations": "padding-bottom:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".py-5",
   "declarations": "padding-bottom:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".pl-5",
   "declarations": "padding-left:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".px-5",
   "declarations": "padding-left:3rem!important;"
 },
 {
   "media": "none",
   "selector": ".m-auto",
   "declarations": "margin:auto!important;"
 },
 {
   "media": "none",
   "selector": ".mt-auto",
   "declarations": "margin-top:auto!important;"
 },
 {
   "media": "none",
   "selector": ".my-auto",
   "declarations": "margin-top:auto!important;"
 },
 {
   "media": "none",
   "selector": ".mr-auto",
   "declarations": "margin-right:auto!important;"
 },
 {
   "media": "none",
   "selector": ".mx-auto",
   "declarations": "margin-right:auto!important;"
 },
 {
   "media": "none",
   "selector": ".mb-auto",
   "declarations": "margin-bottom:auto!important;"
 },
 {
   "media": "none",
   "selector": ".my-auto",
   "declarations": "margin-bottom:auto!important;"
 },
 {
   "media": "none",
   "selector": ".ml-auto",
   "declarations": "margin-left:auto!important;"
 },
 {
   "media": "none",
   "selector": ".mx-auto",
   "declarations": "margin-left:auto!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".m-sm-0",
   "declarations": "margin:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mt-sm-0",
   "declarations": "margin-top:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-0",
   "declarations": "margin-top:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mr-sm-0",
   "declarations": "margin-right:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-0",
   "declarations": "margin-right:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mb-sm-0",
   "declarations": "margin-bottom:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-0",
   "declarations": "margin-bottom:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".ml-sm-0",
   "declarations": "margin-left:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-0",
   "declarations": "margin-left:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".m-sm-1",
   "declarations": "margin:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mt-sm-1",
   "declarations": "margin-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-1",
   "declarations": "margin-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mr-sm-1",
   "declarations": "margin-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-1",
   "declarations": "margin-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mb-sm-1",
   "declarations": "margin-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-1",
   "declarations": "margin-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".ml-sm-1",
   "declarations": "margin-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-1",
   "declarations": "margin-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".m-sm-2",
   "declarations": "margin:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mt-sm-2",
   "declarations": "margin-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-2",
   "declarations": "margin-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mr-sm-2",
   "declarations": "margin-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-2",
   "declarations": "margin-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mb-sm-2",
   "declarations": "margin-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-2",
   "declarations": "margin-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".ml-sm-2",
   "declarations": "margin-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-2",
   "declarations": "margin-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".m-sm-3",
   "declarations": "margin:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mt-sm-3",
   "declarations": "margin-top:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-3",
   "declarations": "margin-top:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mr-sm-3",
   "declarations": "margin-right:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-3",
   "declarations": "margin-right:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mb-sm-3",
   "declarations": "margin-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-3",
   "declarations": "margin-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".ml-sm-3",
   "declarations": "margin-left:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-3",
   "declarations": "margin-left:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".m-sm-4",
   "declarations": "margin:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mt-sm-4",
   "declarations": "margin-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-4",
   "declarations": "margin-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mr-sm-4",
   "declarations": "margin-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-4",
   "declarations": "margin-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mb-sm-4",
   "declarations": "margin-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-4",
   "declarations": "margin-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".ml-sm-4",
   "declarations": "margin-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-4",
   "declarations": "margin-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".m-sm-5",
   "declarations": "margin:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mt-sm-5",
   "declarations": "margin-top:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-5",
   "declarations": "margin-top:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mr-sm-5",
   "declarations": "margin-right:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-5",
   "declarations": "margin-right:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mb-sm-5",
   "declarations": "margin-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-5",
   "declarations": "margin-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".ml-sm-5",
   "declarations": "margin-left:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-5",
   "declarations": "margin-left:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".p-sm-0",
   "declarations": "padding:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pt-sm-0",
   "declarations": "padding-top:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-0",
   "declarations": "padding-top:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pr-sm-0",
   "declarations": "padding-right:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-0",
   "declarations": "padding-right:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pb-sm-0",
   "declarations": "padding-bottom:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-0",
   "declarations": "padding-bottom:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pl-sm-0",
   "declarations": "padding-left:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-0",
   "declarations": "padding-left:0!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".p-sm-1",
   "declarations": "padding:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pt-sm-1",
   "declarations": "padding-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-1",
   "declarations": "padding-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pr-sm-1",
   "declarations": "padding-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-1",
   "declarations": "padding-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pb-sm-1",
   "declarations": "padding-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-1",
   "declarations": "padding-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pl-sm-1",
   "declarations": "padding-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-1",
   "declarations": "padding-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".p-sm-2",
   "declarations": "padding:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pt-sm-2",
   "declarations": "padding-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-2",
   "declarations": "padding-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pr-sm-2",
   "declarations": "padding-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-2",
   "declarations": "padding-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pb-sm-2",
   "declarations": "padding-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-2",
   "declarations": "padding-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pl-sm-2",
   "declarations": "padding-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-2",
   "declarations": "padding-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".p-sm-3",
   "declarations": "padding:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pt-sm-3",
   "declarations": "padding-top:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-3",
   "declarations": "padding-top:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pr-sm-3",
   "declarations": "padding-right:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-3",
   "declarations": "padding-right:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pb-sm-3",
   "declarations": "padding-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-3",
   "declarations": "padding-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pl-sm-3",
   "declarations": "padding-left:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-3",
   "declarations": "padding-left:1rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".p-sm-4",
   "declarations": "padding:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pt-sm-4",
   "declarations": "padding-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-4",
   "declarations": "padding-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pr-sm-4",
   "declarations": "padding-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-4",
   "declarations": "padding-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pb-sm-4",
   "declarations": "padding-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-4",
   "declarations": "padding-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pl-sm-4",
   "declarations": "padding-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-4",
   "declarations": "padding-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".p-sm-5",
   "declarations": "padding:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pt-sm-5",
   "declarations": "padding-top:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-5",
   "declarations": "padding-top:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pr-sm-5",
   "declarations": "padding-right:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-5",
   "declarations": "padding-right:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pb-sm-5",
   "declarations": "padding-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".py-sm-5",
   "declarations": "padding-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".pl-sm-5",
   "declarations": "padding-left:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".px-sm-5",
   "declarations": "padding-left:3rem!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".m-sm-auto",
   "declarations": "margin:auto!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mt-sm-auto",
   "declarations": "margin-top:auto!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-auto",
   "declarations": "margin-top:auto!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mr-sm-auto",
   "declarations": "margin-right:auto!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-auto",
   "declarations": "margin-right:auto!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mb-sm-auto",
   "declarations": "margin-bottom:auto!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".my-sm-auto",
   "declarations": "margin-bottom:auto!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".ml-sm-auto",
   "declarations": "margin-left:auto!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".mx-sm-auto",
   "declarations": "margin-left:auto!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".m-md-0",
   "declarations": "margin:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mt-md-0",
   "declarations": "margin-top:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-0",
   "declarations": "margin-top:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mr-md-0",
   "declarations": "margin-right:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-0",
   "declarations": "margin-right:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mb-md-0",
   "declarations": "margin-bottom:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-0",
   "declarations": "margin-bottom:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".ml-md-0",
   "declarations": "margin-left:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-0",
   "declarations": "margin-left:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".m-md-1",
   "declarations": "margin:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mt-md-1",
   "declarations": "margin-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-1",
   "declarations": "margin-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mr-md-1",
   "declarations": "margin-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-1",
   "declarations": "margin-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mb-md-1",
   "declarations": "margin-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-1",
   "declarations": "margin-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".ml-md-1",
   "declarations": "margin-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-1",
   "declarations": "margin-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".m-md-2",
   "declarations": "margin:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mt-md-2",
   "declarations": "margin-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-2",
   "declarations": "margin-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mr-md-2",
   "declarations": "margin-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-2",
   "declarations": "margin-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mb-md-2",
   "declarations": "margin-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-2",
   "declarations": "margin-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".ml-md-2",
   "declarations": "margin-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-2",
   "declarations": "margin-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".m-md-3",
   "declarations": "margin:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mt-md-3",
   "declarations": "margin-top:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-3",
   "declarations": "margin-top:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mr-md-3",
   "declarations": "margin-right:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-3",
   "declarations": "margin-right:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mb-md-3",
   "declarations": "margin-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-3",
   "declarations": "margin-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".ml-md-3",
   "declarations": "margin-left:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-3",
   "declarations": "margin-left:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".m-md-4",
   "declarations": "margin:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mt-md-4",
   "declarations": "margin-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-4",
   "declarations": "margin-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mr-md-4",
   "declarations": "margin-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-4",
   "declarations": "margin-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mb-md-4",
   "declarations": "margin-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-4",
   "declarations": "margin-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".ml-md-4",
   "declarations": "margin-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-4",
   "declarations": "margin-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".m-md-5",
   "declarations": "margin:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mt-md-5",
   "declarations": "margin-top:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-5",
   "declarations": "margin-top:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mr-md-5",
   "declarations": "margin-right:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-5",
   "declarations": "margin-right:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mb-md-5",
   "declarations": "margin-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-5",
   "declarations": "margin-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".ml-md-5",
   "declarations": "margin-left:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-5",
   "declarations": "margin-left:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".p-md-0",
   "declarations": "padding:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pt-md-0",
   "declarations": "padding-top:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-0",
   "declarations": "padding-top:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pr-md-0",
   "declarations": "padding-right:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-0",
   "declarations": "padding-right:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pb-md-0",
   "declarations": "padding-bottom:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-0",
   "declarations": "padding-bottom:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pl-md-0",
   "declarations": "padding-left:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-0",
   "declarations": "padding-left:0!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".p-md-1",
   "declarations": "padding:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pt-md-1",
   "declarations": "padding-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-1",
   "declarations": "padding-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pr-md-1",
   "declarations": "padding-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-1",
   "declarations": "padding-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pb-md-1",
   "declarations": "padding-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-1",
   "declarations": "padding-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pl-md-1",
   "declarations": "padding-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-1",
   "declarations": "padding-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".p-md-2",
   "declarations": "padding:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pt-md-2",
   "declarations": "padding-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-2",
   "declarations": "padding-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pr-md-2",
   "declarations": "padding-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-2",
   "declarations": "padding-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pb-md-2",
   "declarations": "padding-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-2",
   "declarations": "padding-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pl-md-2",
   "declarations": "padding-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-2",
   "declarations": "padding-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".p-md-3",
   "declarations": "padding:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pt-md-3",
   "declarations": "padding-top:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-3",
   "declarations": "padding-top:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pr-md-3",
   "declarations": "padding-right:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-3",
   "declarations": "padding-right:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pb-md-3",
   "declarations": "padding-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-3",
   "declarations": "padding-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pl-md-3",
   "declarations": "padding-left:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-3",
   "declarations": "padding-left:1rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".p-md-4",
   "declarations": "padding:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pt-md-4",
   "declarations": "padding-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-4",
   "declarations": "padding-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pr-md-4",
   "declarations": "padding-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-4",
   "declarations": "padding-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pb-md-4",
   "declarations": "padding-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-4",
   "declarations": "padding-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pl-md-4",
   "declarations": "padding-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-4",
   "declarations": "padding-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".p-md-5",
   "declarations": "padding:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pt-md-5",
   "declarations": "padding-top:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-5",
   "declarations": "padding-top:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pr-md-5",
   "declarations": "padding-right:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-5",
   "declarations": "padding-right:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pb-md-5",
   "declarations": "padding-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".py-md-5",
   "declarations": "padding-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".pl-md-5",
   "declarations": "padding-left:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".px-md-5",
   "declarations": "padding-left:3rem!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".m-md-auto",
   "declarations": "margin:auto!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mt-md-auto",
   "declarations": "margin-top:auto!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-auto",
   "declarations": "margin-top:auto!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mr-md-auto",
   "declarations": "margin-right:auto!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-auto",
   "declarations": "margin-right:auto!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mb-md-auto",
   "declarations": "margin-bottom:auto!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".my-md-auto",
   "declarations": "margin-bottom:auto!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".ml-md-auto",
   "declarations": "margin-left:auto!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".mx-md-auto",
   "declarations": "margin-left:auto!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".m-lg-0",
   "declarations": "margin:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mt-lg-0",
   "declarations": "margin-top:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-0",
   "declarations": "margin-top:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mr-lg-0",
   "declarations": "margin-right:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-0",
   "declarations": "margin-right:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mb-lg-0",
   "declarations": "margin-bottom:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-0",
   "declarations": "margin-bottom:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".ml-lg-0",
   "declarations": "margin-left:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-0",
   "declarations": "margin-left:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".m-lg-1",
   "declarations": "margin:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mt-lg-1",
   "declarations": "margin-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-1",
   "declarations": "margin-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mr-lg-1",
   "declarations": "margin-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-1",
   "declarations": "margin-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mb-lg-1",
   "declarations": "margin-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-1",
   "declarations": "margin-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".ml-lg-1",
   "declarations": "margin-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-1",
   "declarations": "margin-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".m-lg-2",
   "declarations": "margin:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mt-lg-2",
   "declarations": "margin-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-2",
   "declarations": "margin-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mr-lg-2",
   "declarations": "margin-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-2",
   "declarations": "margin-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mb-lg-2",
   "declarations": "margin-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-2",
   "declarations": "margin-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".ml-lg-2",
   "declarations": "margin-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-2",
   "declarations": "margin-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".m-lg-3",
   "declarations": "margin:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mt-lg-3",
   "declarations": "margin-top:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-3",
   "declarations": "margin-top:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mr-lg-3",
   "declarations": "margin-right:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-3",
   "declarations": "margin-right:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mb-lg-3",
   "declarations": "margin-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-3",
   "declarations": "margin-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".ml-lg-3",
   "declarations": "margin-left:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-3",
   "declarations": "margin-left:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".m-lg-4",
   "declarations": "margin:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mt-lg-4",
   "declarations": "margin-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-4",
   "declarations": "margin-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mr-lg-4",
   "declarations": "margin-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-4",
   "declarations": "margin-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mb-lg-4",
   "declarations": "margin-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-4",
   "declarations": "margin-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".ml-lg-4",
   "declarations": "margin-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-4",
   "declarations": "margin-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".m-lg-5",
   "declarations": "margin:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mt-lg-5",
   "declarations": "margin-top:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-5",
   "declarations": "margin-top:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mr-lg-5",
   "declarations": "margin-right:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-5",
   "declarations": "margin-right:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mb-lg-5",
   "declarations": "margin-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-5",
   "declarations": "margin-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".ml-lg-5",
   "declarations": "margin-left:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-5",
   "declarations": "margin-left:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".p-lg-0",
   "declarations": "padding:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pt-lg-0",
   "declarations": "padding-top:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-0",
   "declarations": "padding-top:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pr-lg-0",
   "declarations": "padding-right:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-0",
   "declarations": "padding-right:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pb-lg-0",
   "declarations": "padding-bottom:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-0",
   "declarations": "padding-bottom:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pl-lg-0",
   "declarations": "padding-left:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-0",
   "declarations": "padding-left:0!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".p-lg-1",
   "declarations": "padding:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pt-lg-1",
   "declarations": "padding-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-1",
   "declarations": "padding-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pr-lg-1",
   "declarations": "padding-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-1",
   "declarations": "padding-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pb-lg-1",
   "declarations": "padding-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-1",
   "declarations": "padding-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pl-lg-1",
   "declarations": "padding-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-1",
   "declarations": "padding-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".p-lg-2",
   "declarations": "padding:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pt-lg-2",
   "declarations": "padding-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-2",
   "declarations": "padding-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pr-lg-2",
   "declarations": "padding-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-2",
   "declarations": "padding-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pb-lg-2",
   "declarations": "padding-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-2",
   "declarations": "padding-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pl-lg-2",
   "declarations": "padding-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-2",
   "declarations": "padding-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".p-lg-3",
   "declarations": "padding:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pt-lg-3",
   "declarations": "padding-top:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-3",
   "declarations": "padding-top:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pr-lg-3",
   "declarations": "padding-right:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-3",
   "declarations": "padding-right:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pb-lg-3",
   "declarations": "padding-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-3",
   "declarations": "padding-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pl-lg-3",
   "declarations": "padding-left:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-3",
   "declarations": "padding-left:1rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".p-lg-4",
   "declarations": "padding:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pt-lg-4",
   "declarations": "padding-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-4",
   "declarations": "padding-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pr-lg-4",
   "declarations": "padding-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-4",
   "declarations": "padding-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pb-lg-4",
   "declarations": "padding-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-4",
   "declarations": "padding-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pl-lg-4",
   "declarations": "padding-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-4",
   "declarations": "padding-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".p-lg-5",
   "declarations": "padding:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pt-lg-5",
   "declarations": "padding-top:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-5",
   "declarations": "padding-top:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pr-lg-5",
   "declarations": "padding-right:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-5",
   "declarations": "padding-right:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pb-lg-5",
   "declarations": "padding-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".py-lg-5",
   "declarations": "padding-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".pl-lg-5",
   "declarations": "padding-left:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".px-lg-5",
   "declarations": "padding-left:3rem!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".m-lg-auto",
   "declarations": "margin:auto!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mt-lg-auto",
   "declarations": "margin-top:auto!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-auto",
   "declarations": "margin-top:auto!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mr-lg-auto",
   "declarations": "margin-right:auto!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-auto",
   "declarations": "margin-right:auto!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mb-lg-auto",
   "declarations": "margin-bottom:auto!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".my-lg-auto",
   "declarations": "margin-bottom:auto!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".ml-lg-auto",
   "declarations": "margin-left:auto!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".mx-lg-auto",
   "declarations": "margin-left:auto!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".m-xl-0",
   "declarations": "margin:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mt-xl-0",
   "declarations": "margin-top:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-0",
   "declarations": "margin-top:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mr-xl-0",
   "declarations": "margin-right:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-0",
   "declarations": "margin-right:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mb-xl-0",
   "declarations": "margin-bottom:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-0",
   "declarations": "margin-bottom:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".ml-xl-0",
   "declarations": "margin-left:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-0",
   "declarations": "margin-left:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".m-xl-1",
   "declarations": "margin:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mt-xl-1",
   "declarations": "margin-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-1",
   "declarations": "margin-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mr-xl-1",
   "declarations": "margin-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-1",
   "declarations": "margin-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mb-xl-1",
   "declarations": "margin-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-1",
   "declarations": "margin-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".ml-xl-1",
   "declarations": "margin-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-1",
   "declarations": "margin-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".m-xl-2",
   "declarations": "margin:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mt-xl-2",
   "declarations": "margin-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-2",
   "declarations": "margin-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mr-xl-2",
   "declarations": "margin-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-2",
   "declarations": "margin-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mb-xl-2",
   "declarations": "margin-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-2",
   "declarations": "margin-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".ml-xl-2",
   "declarations": "margin-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-2",
   "declarations": "margin-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".m-xl-3",
   "declarations": "margin:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mt-xl-3",
   "declarations": "margin-top:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-3",
   "declarations": "margin-top:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mr-xl-3",
   "declarations": "margin-right:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-3",
   "declarations": "margin-right:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mb-xl-3",
   "declarations": "margin-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-3",
   "declarations": "margin-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".ml-xl-3",
   "declarations": "margin-left:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-3",
   "declarations": "margin-left:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".m-xl-4",
   "declarations": "margin:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mt-xl-4",
   "declarations": "margin-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-4",
   "declarations": "margin-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mr-xl-4",
   "declarations": "margin-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-4",
   "declarations": "margin-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mb-xl-4",
   "declarations": "margin-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-4",
   "declarations": "margin-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".ml-xl-4",
   "declarations": "margin-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-4",
   "declarations": "margin-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".m-xl-5",
   "declarations": "margin:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mt-xl-5",
   "declarations": "margin-top:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-5",
   "declarations": "margin-top:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mr-xl-5",
   "declarations": "margin-right:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-5",
   "declarations": "margin-right:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mb-xl-5",
   "declarations": "margin-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-5",
   "declarations": "margin-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".ml-xl-5",
   "declarations": "margin-left:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-5",
   "declarations": "margin-left:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".p-xl-0",
   "declarations": "padding:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pt-xl-0",
   "declarations": "padding-top:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-0",
   "declarations": "padding-top:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pr-xl-0",
   "declarations": "padding-right:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-0",
   "declarations": "padding-right:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pb-xl-0",
   "declarations": "padding-bottom:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-0",
   "declarations": "padding-bottom:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pl-xl-0",
   "declarations": "padding-left:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-0",
   "declarations": "padding-left:0!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".p-xl-1",
   "declarations": "padding:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pt-xl-1",
   "declarations": "padding-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-1",
   "declarations": "padding-top:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pr-xl-1",
   "declarations": "padding-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-1",
   "declarations": "padding-right:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pb-xl-1",
   "declarations": "padding-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-1",
   "declarations": "padding-bottom:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pl-xl-1",
   "declarations": "padding-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-1",
   "declarations": "padding-left:0.25rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".p-xl-2",
   "declarations": "padding:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pt-xl-2",
   "declarations": "padding-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-2",
   "declarations": "padding-top:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pr-xl-2",
   "declarations": "padding-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-2",
   "declarations": "padding-right:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pb-xl-2",
   "declarations": "padding-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-2",
   "declarations": "padding-bottom:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pl-xl-2",
   "declarations": "padding-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-2",
   "declarations": "padding-left:0.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".p-xl-3",
   "declarations": "padding:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pt-xl-3",
   "declarations": "padding-top:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-3",
   "declarations": "padding-top:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pr-xl-3",
   "declarations": "padding-right:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-3",
   "declarations": "padding-right:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pb-xl-3",
   "declarations": "padding-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-3",
   "declarations": "padding-bottom:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pl-xl-3",
   "declarations": "padding-left:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-3",
   "declarations": "padding-left:1rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".p-xl-4",
   "declarations": "padding:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pt-xl-4",
   "declarations": "padding-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-4",
   "declarations": "padding-top:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pr-xl-4",
   "declarations": "padding-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-4",
   "declarations": "padding-right:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pb-xl-4",
   "declarations": "padding-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-4",
   "declarations": "padding-bottom:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pl-xl-4",
   "declarations": "padding-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-4",
   "declarations": "padding-left:1.5rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".p-xl-5",
   "declarations": "padding:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pt-xl-5",
   "declarations": "padding-top:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-5",
   "declarations": "padding-top:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pr-xl-5",
   "declarations": "padding-right:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-5",
   "declarations": "padding-right:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pb-xl-5",
   "declarations": "padding-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".py-xl-5",
   "declarations": "padding-bottom:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".pl-xl-5",
   "declarations": "padding-left:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".px-xl-5",
   "declarations": "padding-left:3rem!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".m-xl-auto",
   "declarations": "margin:auto!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mt-xl-auto",
   "declarations": "margin-top:auto!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-auto",
   "declarations": "margin-top:auto!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mr-xl-auto",
   "declarations": "margin-right:auto!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-auto",
   "declarations": "margin-right:auto!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mb-xl-auto",
   "declarations": "margin-bottom:auto!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".my-xl-auto",
   "declarations": "margin-bottom:auto!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".ml-xl-auto",
   "declarations": "margin-left:auto!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".mx-xl-auto",
   "declarations": "margin-left:auto!important;"
 },
 {
   "media": "none",
   "selector": ".text-justify",
   "declarations": "text-align:justify!important;"
 },
 {
   "media": "none",
   "selector": ".text-nowrap",
   "declarations": "white-space:nowrap!important;"
 },
 {
   "media": "none",
   "selector": ".text-truncate",
   "declarations": "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
 },
 {
   "media": "none",
   "selector": ".text-left",
   "declarations": "text-align:left!important;"
 },
 {
   "media": "none",
   "selector": ".text-right",
   "declarations": "text-align:right!important;"
 },
 {
   "media": "none",
   "selector": ".text-center",
   "declarations": "text-align:center!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".text-sm-left",
   "declarations": "text-align:left!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".text-sm-right",
   "declarations": "text-align:right!important;"
 },
 {
   "media": "@media (min-width:576px)",
   "selector": ".text-sm-center",
   "declarations": "text-align:center!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".text-md-left",
   "declarations": "text-align:left!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".text-md-right",
   "declarations": "text-align:right!important;"
 },
 {
   "media": "@media (min-width:768px)",
   "selector": ".text-md-center",
   "declarations": "text-align:center!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".text-lg-left",
   "declarations": "text-align:left!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".text-lg-right",
   "declarations": "text-align:right!important;"
 },
 {
   "media": "@media (min-width:992px)",
   "selector": ".text-lg-center",
   "declarations": "text-align:center!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".text-xl-left",
   "declarations": "text-align:left!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".text-xl-right",
   "declarations": "text-align:right!important;"
 },
 {
   "media": "@media (min-width:1200px)",
   "selector": ".text-xl-center",
   "declarations": "text-align:center!important;"
 },
 {
   "media": "none",
   "selector": ".text-lowercase",
   "declarations": "text-transform:lowercase!important;"
 },
 {
   "media": "none",
   "selector": ".text-uppercase",
   "declarations": "text-transform:uppercase!important;"
 },
 {
   "media": "none",
   "selector": ".text-capitalize",
   "declarations": "text-transform:capitalize!important;"
 },
 {
   "media": "none",
   "selector": ".font-weight-light",
   "declarations": "font-weight:300!important;"
 },
 {
   "media": "none",
   "selector": ".font-weight-normal",
   "declarations": "font-weight:400!important;"
 },
 {
   "media": "none",
   "selector": ".font-weight-bold",
   "declarations": "font-weight:700!important;"
 },
 {
   "media": "none",
   "selector": ".font-italic",
   "declarations": "font-style:italic!important;"
 },
 {
   "media": "none",
   "selector": ".text-white",
   "declarations": "color:#fff!important;"
 },
 {
   "media": "none",
   "selector": ".text-primary",
   "declarations": "color:#007bff!important;"
 },
 {
   "media": "none",
   "selector": "a.text-primary:focus, a.text-primary:hover",
   "declarations": "color:#0062cc!important;"
 },
 {
   "media": "none",
   "selector": ".text-secondary",
   "declarations": "color:#868e96!important;"
 },
 {
   "media": "none",
   "selector": "a.text-secondary:focus, a.text-secondary:hover",
   "declarations": "color:#6c757d!important;"
 },
 {
   "media": "none",
   "selector": ".text-success",
   "declarations": "color:#28a745!important;"
 },
 {
   "media": "none",
   "selector": "a.text-success:focus, a.text-success:hover",
   "declarations": "color:#1e7e34!important;"
 },
 {
   "media": "none",
   "selector": ".text-info",
   "declarations": "color:#17a2b8!important;"
 },
 {
   "media": "none",
   "selector": "a.text-info:focus, a.text-info:hover",
   "declarations": "color:#117a8b!important;"
 },
 {
   "media": "none",
   "selector": ".text-warning",
   "declarations": "color:#ffc107!important;"
 },
 {
   "media": "none",
   "selector": "a.text-warning:focus, a.text-warning:hover",
   "declarations": "color:#d39e00!important;"
 },
 {
   "media": "none",
   "selector": ".text-danger",
   "declarations": "color:#dc3545!important;"
 },
 {
   "media": "none",
   "selector": "a.text-danger:focus, a.text-danger:hover",
   "declarations": "color:#bd2130!important;"
 },
 {
   "media": "none",
   "selector": ".text-light",
   "declarations": "color:#f8f9fa!important;"
 },
 {
   "media": "none",
   "selector": "a.text-light:focus, a.text-light:hover",
   "declarations": "color:#dae0e5!important;"
 },
 {
   "media": "none",
   "selector": ".text-dark",
   "declarations": "color:#343a40!important;"
 },
 {
   "media": "none",
   "selector": "a.text-dark:focus, a.text-dark:hover",
   "declarations": "color:#1d2124!important;"
 },
 {
   "media": "none",
   "selector": ".text-muted",
   "declarations": "color:#868e96!important;"
 },
 {
   "media": "none",
   "selector": ".text-hide",
   "declarations": "font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0;"
 },
 {
   "media": "none",
   "selector": ".visible",
   "declarations": "visibility:visible!important;"
 },
 {
   "media": "none",
   "selector": ".invisible",
   "declarations": "visibility:hidden!important;"
 }
];

module.exports = bootstrap;