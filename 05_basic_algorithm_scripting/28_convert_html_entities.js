// http://www.freecodecamp.com/challenges/bonfire-convert-html-entities

function convert(str) {
  // &colon;&rpar;
  var charrefs = {
    "\&": "\&amp;",
    "\<": "&lt;",
    "\>": "&gt;",
    "\"": "&quot;",
    "\'": "&apos;"
  };

  var match = new RegExp("(" + Object.keys(charrefs).join("|") +")", "g");
  var newStr = str.replace(match, function(m) { return charrefs[m]; });
  console.log(newStr);
  return newStr;
}

convert('Dolce & Gabbana');
