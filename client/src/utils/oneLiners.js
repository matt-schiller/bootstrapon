const lines = [
  "Get intimate with Bootstrap",
  "Bootstrap like you’ve never seen it before",
  "What you do with Bootstrap is your business",
  "Get a little more adventurous with Bootstrap",
  "F*** with Bootstrap",
  "Don’t mock Bootstrap until you’ve tried it",
  "CSS uncensored",
  "The rumors abut Bootstrap are true",
  "Give your CSS a kick up the backside",
  "Bootstrap from top to bottom",
  "Get deep into Bootstrap",
  "Stop f***ing around with your CSS",
  "Go hell for leather with Bootstrap",
  "Make your CSS leather-bound",
  "Play safely with Bootstrap",
  "The naughty bits of Bootstrap",
  "Bootstrap laid bare",
  "Insert Bootstrap into your app like never before",
  "The bits that Twitter didn’t want you to see",
  "Try Bootstrap, you might just enjoy it",
  "Are you sure you can take Bootstrap?",
  "Dominate the DOM"
];

function oneLiners(str) {
  var line = lines[Math.floor(Math.random()*lines.length)];
  console.log(line);
  return line;
}

export default oneLiners;