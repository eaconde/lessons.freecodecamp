// http://www.freecodecamp.com/challenges/bonfire-reverse-a-string

function reverseString(str) {
    console.log(str.split('').reverse().join().replace(/,/g, ''));
    return str.split('').reverse().join().replace(/,/g, '');
}

reverseString('hello');
