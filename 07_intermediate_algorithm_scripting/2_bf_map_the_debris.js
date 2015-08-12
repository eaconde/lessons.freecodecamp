// http://www.freecodecamp.com/challenges/bonfire-map-the-debris
// https://en.wikipedia.org/wiki/Orbital_period

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
  arr.map(function(object) {
    period = Math.round(2 * Math.PI * Math.pow((Math.pow(object.avgAlt + earthRadius, 3) / GM), 0.5));
    newArr.push({name: object.name, orbitalPeriod: period});
  });

  console.log(newArr);
  return newArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

// RESOURCES
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
