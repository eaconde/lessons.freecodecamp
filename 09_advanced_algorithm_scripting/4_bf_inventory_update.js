// http://www.freecodecamp.com/challenges/bonfire-inventory-update

Array.prototype.productSort = function() {
  // transfer in a new Array with distinct items
  var products = [];
  var inventory = [];
  this.map(function(item) {
    var itemIndex = products.indexOf(item[1]);
    if (itemIndex < 0) {
      products.push(item[1]);
      inventory.push(item);
    } else {
      inventory.filter(function(prod) {
        if (prod[1] === item[1]) {
          prod[0] += item[0];
          return prod;
        }
      });

    }
  });
  // use default sorting passing our sorting function
  return inventory.sort(function(a, b) {
    if (a[1] > b[1]) { return 1; }
    if (a[1] < b[1]) { return -1; }
    return 0;
  });
};


function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var result = arr1.concat(arr2).productSort();
    console.log('result', JSON.stringify(result));
    return result;
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);
