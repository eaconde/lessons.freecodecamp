// http://www.freecodecamp.com/challenges/bonfire-smallest-common-multiple
// resolved via factorization

// this is used to count how many times a value exists in an array
Array.prototype.countedInstance = function(c) {
  var ctr = 0;
  this.filter(function(val) {
    if (val === c) {
      ctr += 1;
      return true;
    }
  });
  return ctr;
};

// this is used to determin the prime factor numbers of a number.
// returns a preformatted object as to how many times the same number appears
//    a set. for instance, 4.factor = [2,2] = {2: 2}
Number.prototype.factors = function() {
  function counted(arr) {
    var t = {};
    arr.map(function(num) {
      if (t[num] === undefined) {
        t[num] = 1;
      } else {
        t[num] += 1;
      }
    });
    return t;
  }

  var num = this, factors = [], d = 2;
  while (num > 1) {
    while (num % d === 0) {
      factors.push(d);
      num /= d;
    }
    d += 1;
  }
  if (factors.length === 1) {
    factors.push(1);
  }
  return counted(factors);
};

function smallestCommons(arr) {
  arr.sort();
  // create a new array from min..max value from array
  var newArr = Array.apply(null, {
    length: arr[arr.length - 1]
  }).map(function(_, val) {
    return val + 1;
  }).reverse();

  var factors = [];
  newArr.map(function(value) {
    // get factors. see Numbers.prototype.factors
    var numFactors = value.factors();

    for (var key in numFactors) {
      if (factors.indexOf(key) === 0) {
        factors.push(key);
      } else {
        // already exists. we will add the difference
        var addCount = factors.countedInstance(key);
        while (addCount < numFactors[key]) {
          factors.push(key);
          addCount += 1;
        }
      }
    }
  });

  var result = factors.reduce(function(c, i) { return c * i; });
  console.log('result', result);
  return result;
}

smallestCommons([4, 1]);
