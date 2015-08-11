// http://www.freecodecamp.com/challenges/bonfire-drop-it

function drop(arr, func) {
  // Drop them elements.
  var newArr = arr.slice();
  arr.map(function(val) {
    if (!func(val)) { newArr.shift(); }
  });

  console.log('final', newArr);
  return newArr;
}

drop([1, 2, 3], function(n) {return n > 0; });
