// Exercise 17: Retrieve the largest rating.

// add minified version of Array.prototype.reduce | exercise 16
Array.prototype.reduce=function(t,e){var r,n;if(0===this.length)return this;if(1===arguments.length)r=1,n=this[0];else{if(!(arguments.length>=2))throw"Invalid arguments.";r=0,n=e}for(;r<this.length;)n=t(n,this[r]),r++;return[n]};

var ratings = [2, 3, 1, 4, 5];

// You should return an array containing only the largest rating. Remember that
//  reduce always returns an array with one item.
var result = ratings.
reduce(function(acc, curr) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});

console.log(result);
return result;
