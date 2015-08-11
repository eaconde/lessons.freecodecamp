// Exercise 7: Implement filter()

// To make filtering easier, let's add a filter() function to the Array type. The filter() function accepts a predicate. A predicate is a function that accepts an item in the array, and returns a boolean indicating whether the item should be retained in the new array.

Array.prototype.filter = function(predicateFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    if (predicateFunction(itemInArray)) {
      results.push(itemInArray);
    }
  });

  console.log(results);
  return results;
};

JSON.stringify([1, 2, 3].filter(function(x) {
  return x > 2
})) === "[3]"

// Like map(), filter() lets us express what data we want without requiring us to specify how we want to collect the data.
