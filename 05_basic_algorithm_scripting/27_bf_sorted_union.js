// http://www.freecodecamp.com/challenges/bonfire-sorted-union

function unite(arr1, arr2, arr3) {
  var process = function(value) {
    if (arr1.indexOf(value) < 0) {
      arr1.push(value);
    }
  };

  arr2.map(process);
  arr3.map(process);

  console.log(arr1);
  return arr1;
}

unite([1, 3, 2], [1, [5]], [2, [4]]);
