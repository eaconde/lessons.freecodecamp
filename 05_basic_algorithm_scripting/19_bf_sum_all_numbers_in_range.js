// http://www.freecodecamp.com/challenges/bonfire-sum-all-numbers-in-a-range

// =======================
// SUMS total of values in array
// v1: using sort and for loop
// =======================
function sumAll(arr) {
    arr = arr.sort(function compareNumbers(a, b) { return a - b; });
    var sum = 0;
    for (var i = arr[0]; i <= arr[arr.length - 1]; i++) { sum += i; }

    console.log('v1 sum: ', sum);
    return sum;
}

sumAll([10, 5]);


// =======================
// SUMS total of values in array
// v2: using Math.max Math.min and reduce. Also used dynamic creation of a new array
// =======================
function sumAll2(arr) {
    var sum = 0, min = Math.min.apply(null, arr), max = Math.max.apply(null, arr) + 1;
    // create a new array from the min and max values...
    var newArr = Array.apply(null, {length: max-min}).map(function(_, val) {
            return val + min;
        });

    // reduce to finally get the sum of the array
    sum = newArr.reduce(function(previous, current) {
            return previous + current;
        });

    console.log('v2 sum: ', sum);
    return sum;
}

sumAll2([10, 5]);
