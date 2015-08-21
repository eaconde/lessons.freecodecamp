var Car = function(loc) {
  var obj = Object.create(Car.prototype);
  obj.loc = loc;
  return obj;
};

Car.prototype.move = function() { this.loc++; };
Car.prototype.on = function() { console.log('on'); };

var amy = Car(1);
console.log(Car.prototype.__proto__.constructor); // Object
console.log(amy.__proto__.constructor);      // will delagate constructor property to Car.prototype.constructor
console.log(amy instanceof Car);  // logs true
