// http://www.freecodecamp.com/challenges/bonfire-everything-be-true

// task requires all values of the collection to be true based on the predicate, hence Array.prototype.every was used

function every(collection, pre) {
  // Does everyone have one of these?
  return collection.every(function(obj) {
    return obj.hasOwnProperty(pre);
  });
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
