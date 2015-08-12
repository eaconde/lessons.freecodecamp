// Exercise 13: Implement concatMap()

// Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.

// add minified version of Array.prototype.concatAll | exercise 10
Array.prototype.concatAll=function(){var n=[];return this.forEach(function(o){o.forEach(function(o){n.push(o)})}),n};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  console.log(projectionFunctionThatReturnsArray);
	return this.
		map(function(item) {
			// ------------   INSERT CODE HERE!  ----------------------------
			// Apply the projection function to each item. The projection
			// function will return an new child array. This will create a
			// two-dimensional array.
      return projectionFunctionThatReturnsArray(item);
			// ------------   INSERT CODE HERE!  ----------------------------
		}).
		// apply the concatAll function to flatten the two-dimensional array
		concatAll();
};


var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
// collect all the words for each number, in every language, in a single, flat list
var allWords = [0,1,2].
	concatMap(function(index) {
		return spanishFrenchEnglishWords[index];
	});

console.log(allWords);
return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
