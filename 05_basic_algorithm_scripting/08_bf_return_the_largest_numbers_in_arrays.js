// http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays

function largestOfFour(arr) {
  var result = arr.map(function(list) {
    return list.reduce(function(c,i) {
      if (c > i) { return c; } else { return i; }
    });

    // an alternate to reduce would be to use the Math.max function ie
    // return Math.max.apply(null, list);
  });
  console.log(result);
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
