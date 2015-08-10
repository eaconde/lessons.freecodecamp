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
        // check divisibility
        var isPrime = true;
        if (val === 2) { return val; } // 2 is automatically a prime
        for (var i=2;i<=Math.sqrt(val)+1;i++) {
          if (val % i === 0) { isPrime = false; break; }
        }
        if (isPrime) { return val; }
    });

    // reduce to a single value to sum of all prime numbers
    var result = primes.reduce(function(c, i) {
      return c + i;
    });

    console.log(result);
    return result;
}

sumPrimes(977);

// NOTE: clarification on the subject. task requires to get ALL primes in between 2 .. num.
//       my original code, only gets the prime factors then sums it up. this is why the original code was failing.
