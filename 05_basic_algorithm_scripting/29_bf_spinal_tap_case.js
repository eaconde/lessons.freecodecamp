// http://www.freecodecamp.com/challenges/bonfire-spinal-tap-case

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var newStr = str.replace(/([A-Z])/g, function(match, _, index) {
        var previous = str[index - 1];
        if (previous === " " || previous === "_" || previous === undefined) {
            return match;
        } else {
            return " ".concat(match); // add space when uppercased
        }
    }).toLowerCase().replace(/[\s|_]/g, '-');
    console.log(newStr);
    return newStr;
}

spinalCase('thisIsSpinalTap');
