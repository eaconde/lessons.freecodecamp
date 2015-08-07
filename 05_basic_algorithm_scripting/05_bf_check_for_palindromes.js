// http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes

function palindrome(str) {
    str = str.toLowerCase().replace(/[\s\.\,]/g, '');
    return str === str.split('').reverse().join().replace(/,/g, '');
}

palindrome("eye");
