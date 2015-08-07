// returns a new array after filtering out values from arguments
// http://www.freecodecamp.com/challenges/bonfire-seek-and-destroy

function destroyer(arr) {
  var filtered = [];
  for (var i=1;i<arguments.length;i++) {
    var argValue = arguments[i];
    filtered = arr.filter(function(item) {
      console.log('arguments[i] ', i, argValue);
      console.log('item ', item);
      return parseInt(item) !== parseInt(argValue);
    });
    arr = filtered;
    console.log(arr);
  }

  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
