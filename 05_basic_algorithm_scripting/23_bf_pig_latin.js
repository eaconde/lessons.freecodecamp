// http://www.freecodecamp.com/challenges/bonfire-pig-latin
// https://en.wikipedia.org/wiki/Pig_Latin

function translate(str) {
    var vowels = /[aeiou]/g;
    var except = /(gl|th)/g;
    var word = '';
    if (str.charAt(0).match(vowels)) {
        word = "".concat(str, 'way');
    } else {
        if (str.match(except)) {
          word = "".concat(str.slice(2), str.charAt(0), str.charAt(1), 'ay');
        } else {
          word = "".concat(str.slice(1), str.charAt(0), 'ay');
        }
    }
    console.log(word);
    return word;
}

translate("glove");
