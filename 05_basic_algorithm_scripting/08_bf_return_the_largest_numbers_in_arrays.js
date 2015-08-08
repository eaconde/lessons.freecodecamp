// http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays

function largestOfFour(arr) {
  var result = arr.map(function(list) {
    return list.reduce(function(c,i) {
      if (c > i) { return c; } else { return i; }
    });
  });
  console.log(result);
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
