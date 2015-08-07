// http://www.freecodecamp.com/challenges/bonfire-falsey-bouncer

function bouncer(arr) {
  var result = arr.filter(function(value) {
      console.log(value, value !== '');
    return value !== false && value !== '' && value !== [] && value !== null && value !== 0;
  });
    console.log(result);
  return result;
}

bouncer([7, 'ate', '', false, 9]);
