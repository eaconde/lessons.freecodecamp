// http://www.freecodecamp.com/challenges/bonfire-sum-all-odd-fibonacci-numbers

function sumFibs(num) {
  var a = 0, b = 1, f = 1, result = 0;
  for(var i = 0; i <= num; i++) {
      if (b % 2 === 1) { result += b; }
      f = a + b;
      a = b;
      b = f;
      if (f > num) { break; }
  }
  console.log(result);
  return result;
}

sumFibs(4);
