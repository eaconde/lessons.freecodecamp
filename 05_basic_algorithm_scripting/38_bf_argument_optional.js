// http://www.freecodecamp.com/challenges/bonfire-arguments-optional

Number.prototype.isNumber = function() {
  return (typeof this === 'number');
};

function add() {
  var val1 = arguments[0],
      val2 = arguments[1];

  if (val1.isNumber && arguments.length === 1) {
      return function(num) {
          if (num.isNumber) { return val1 + num; }
          return undefined;
      };
  } else if (val1.isNumber && val2.isNumber) {
    return val1 + val2;
  }
  return undefined;
}

console.log(add(2)([3]));
