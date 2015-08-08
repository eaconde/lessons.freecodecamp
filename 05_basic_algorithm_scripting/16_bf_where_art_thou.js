// http://www.freecodecamp.com/challenges/bonfire-where-art-thou

function where(collection, source) {
  var arr = [];
  arr = collection.filter(function(data) {
    return data.last === source.last;
  });
  console.log(arr);
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
