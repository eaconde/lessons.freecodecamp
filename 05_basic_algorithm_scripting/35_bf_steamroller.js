// http://www.freecodecamp.com/challenges/bonfire-steamroller

// converts a multi-dimentional array into a single flat array by using recursion
Array.prototype.flatten = function() {
  var newArr = [];
  this.map(function(value) {
    if (Array.isArray(value)) {
      newArr = newArr.concat(value.flatten());
    } else {
      newArr.push(value);
    }
  });
  return newArr;
};

function steamroller(arr) {
  // I'm a steamroller, baby
  var flat = arr.flatten();
  console.log('flat', flat);
  return flat;
}

steamroller([1, [2], [3, [[4]]]]);
