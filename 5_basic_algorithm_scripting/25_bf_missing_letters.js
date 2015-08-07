// With use of charCodeAt and fromCharCode, returns the missing letter from the alphabet
// http://www.freecodecamp.com/challenges/bonfire-missing-letters

function fearNotLetter(str) {
    var missing = [], letter = undefined;
    missing = str.split('').map(function(letter) { return letter.charCodeAt(); });
    missing.some(getLetter);

    function getLetter(value, index, array) {
        // if over index, simply exit
        if (array.length <= index+1) { return true; }
        // find missing letter here...
        if (value + 1 !== array[index + 1]) {
            letter = String.fromCharCode(value + 1);
            return true;
        }
    }
    console.log(letter);
    return letter;
}

fearNotLetter('ghik');
