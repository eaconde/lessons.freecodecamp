// http://www.freecodecamp.com/challenges/bonfire-slasher-flick

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.splice(howMany);
}

slasher([1, 2, 3], 2);
