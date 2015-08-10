// http://www.freecodecamp.com/challenges/bonfire-sum-all-primes

function sumPrimes(num) {
    // create new array with numbers from 2 to num
    var newArr = Array.apply(null, {
        length: num
    }).map(function(_, val) {
        return val + 1;
    }).slice(1);

    // filter from arr factors of the number
    var primes = newArr.filter(function(val) {
        if ((num / val) % 1 === 0) {
            return val;
        }
    });

    // reduce to a single value to sum of all prime numbers
    var result = primes.reduce(function(c, i) {
      return c+i;
    });

    console.log(result);
    return result;
}

sumPrimes(977);

// NOTE: test on freecodecamp tells that this code fails as it is expecting the result to be 73156.
//       will be confirming once help or additional info is gathered from chat.
