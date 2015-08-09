// http://www.freecodecamp.com/challenges/bonfire-diff-two-arrays

function diff(arr1, arr2) {
  var newArr = [];

  // extend Array prototype. returns a new array with unique values
  Array.prototype.unique = function(arr) {
    var distinct = [];
    this.filter(function(value) {
      if (arr.indexOf(value) < 0) { distinct.push(value); }
    });
    return distinct;
  };
  // create add function that will push value to newArr
  var add = function (value) { newArr.push(value); };
  // call for each arr
  arr1.unique(arr2).map(add);
  arr2.unique(arr1).map(add);

  console.log('result: ', newArr);
  return newArr;
}

diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);
