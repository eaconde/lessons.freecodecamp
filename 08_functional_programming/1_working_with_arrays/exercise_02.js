// Exercise 2: Use forEach to print all the names in an array

function(console) {
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

	names.forEach(function(name) {
		console.log(name);
	});
}

// Notice that forEach lets us specify what we want to happen to each item in the array, but hides how the array is traversed.
