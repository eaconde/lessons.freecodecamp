
// ======================================
// Convert the functional type tyo prototypal class
var Car = function(loc) {
  var obj = Object.create(Car.methods);
  obj.loc = loc;
  return obj;
};

Car.methods = {
  move: function() { this.loc++; },
  on: function() { console.log('on'); },
  off: function() { console.log('off'); }
};

// ======================================
// using protypes...
var Car = function(loc) {
  var obj = Object.create(Car.prototype);
  obj.loc = loc;
  return obj;
};

Car.prototype.move = function() { this.loc++; };
Car.prototype.on = function() { console.log('on'); };
Car.prototype.off = function() { console.log('off'); };

// ======================================
// using either of the above, an instance of the Car class will have its
//  methods delagated to the Car.methods || Car.prototype instead of
//  copying the methods and properties to the instance object on the obj variable
