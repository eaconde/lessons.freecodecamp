// http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number

function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        var result = num * factorialize(num - 1);
        console.log(result);
        return result;
    }
}
factorialize(5);
