Array.prototype.pair = function(total) {
  var pairIndexes = [];
  // transfer arr value of this to another variable called 'self' so we
  //  can pass this later to a .call when scope has changed.
  var self = this;
  this.map(function(num, i) {
    var numNeeded = total - num;
    // note that here we are using call method to pass our 'this' which
    //  should be our array. since we are in an inner scope, the 'this' here
    //  would be different than what we want.
    updateValue.call(self, num); // update before we find numNeeded index
    var pairIdx = self.indexOf(numNeeded);

    if (pairIdx >= 0) {
      pairIndexes.push(i);
      pairIndexes.push(pairIdx);
      // once paired, we also update to prevent being added again
      // note that here we still use call()
      updateValue.call(self, numNeeded);
    }
  });
  return pairIndexes;

  // used to simply update the value found in array by param to -1
  //  so it will be excluded in the pairing process
  function updateValue(num) {
    this[this.indexOf(num)] = -1;
  }
};

function pairwise(arr, arg) {
  // just exit if length 0 to save time
  if (arr.length === 0) { return 0; }
  // abstracted a pair method in the Array.prototype chain
  var pairs = arr.pair(arg);
  // finally, sum indexes
  var sum = pairs.reduce(function(c, i) { return c + i; });
  console.log('sum is: ',sum);
  return sum;
}

pairwise([1, 4, 2, 3, 0, 5], 7);
