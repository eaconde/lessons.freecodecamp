// http://www.freecodecamp.com/challenges/bonfire-where-do-i-belong

function where(arr, num) {
  arr.push(num);
  return arr.sort().indexOf(num);
}

where([40, 60], 50);
