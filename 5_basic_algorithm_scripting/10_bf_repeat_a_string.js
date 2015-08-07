// repeating a string can be done usint Array(n).join(string)
// http://www.freecodecamp.com/challenges/bonfire-repeat-a-string-repeat-a-string

function repeat(str, num) {
    var newStr = Array(parseInt(num)+1).join(str);
    console.log(newStr);
    return newStr;
}

repeat('*', 3);
