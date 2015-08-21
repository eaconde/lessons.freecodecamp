var Car = function(loc) {
  var obj = {loc: loc};
  // modify 'methods' so that it is more tightly bundled/encapsulated within
  //  our own class.
  // $.extend(obj, methods);
  $.extend(obj, Car.methods);
  return obj;
};

// the code below will move the 'methods' object out of the global objects.
//  here, we're just adding another property to car which contains its own
//  properties containing functions as values.
Car.methods = {
  move: function() { this.loc++; },
  on: function() { console.log('on'); },
  off: function() { console.log('off'); }
};

var amy = Car(1);
console.log(amy);
console.log(amy.methods)    // logs as undefined
console.log(amy.methods())  // logs no function methods()
amy.on();   // logs 'on'.
amy.off();  // logs 'off'
