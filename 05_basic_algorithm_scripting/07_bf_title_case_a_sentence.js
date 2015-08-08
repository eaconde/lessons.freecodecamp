// http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join().replace(/\,/g,' ');
}

titleCase("I'm a little tea pot");
