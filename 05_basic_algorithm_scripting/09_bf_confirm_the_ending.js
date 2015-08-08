// http://www.freecodecamp.com/challenges/bonfire-confirm-the-ending

function end(str, target) {
  // check if word or sentence
  var words = str.split(' ');
  console.log(words.length);
  if (words.length > 1) {
    return words[words.length - 1] === target;
  } else {
    return str.charAt(str.length - 1) === target;
  }

}

end('Bastian', 'n');
