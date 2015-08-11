// NOTE: Object literals (var obj = {...}) doesn't define a prototype for the object hence,
/*************************************
** var Dog = function() {
**     return {legs:4, back:'alert'};
** };
** var fido = Dog();
** console.log(fido instanceof Dog); // logs false! since fido is just an object literal and have no prototypes
*************************************/

var Car = function(loc) {
  var obj = Object.create(Car.prototype); // prototype is just a convention name and just purely cosmetic
  obj.loc = loc;
  return obj;
};

Car.prototype.move = function() { this.loc++; };
Car.prototype.on = function() { console.log('on'); };

var amy = Car(1);
amy.move();

// creating a new object that uses Car.prototype as its prototype
var Truck = function() {
  return Object.create(Car.prototype);
};

var rig = Truck();
console.log('rig', rig);  // object with prototype of Car
console.log(rig.loc);     // logs undefined since Truck does not have loc property
rig.on();                 // logs on
