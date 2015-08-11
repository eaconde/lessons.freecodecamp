// ===================================
// Superclass
var Car = function(loc) {
  this.loc = loc
};
Car.prototype.move = function() { this.loc++; };

// ===================================
// Subclass
var Van = function(loc) {
  // the Van delegates to Object.prototype
  // Using .call, we are able to override the 'this' which is used by the Car
  //  object when setting its local properties. if we simply used
  //  Car(loc), properties of the Car will still belong to Car even for Van
  //  NOTE: This will not however override the prototype used by Van.
  Car.call(this, loc); // this = Van thus this.loc in Car = Van
}

// We need to do this so methods under the prototype chain of Car will
//  also be available for Van.
// NOTE: we need to delegate to the Car.prototype and not the Car alone
// Van.prototype.__proto__ = Car.prototype; // OR
Van.prototype = Object.create(Car.prototype);

// when we assigned the Car.prototype as the Van's prototype, the Van's constructor was removed.
//  to remedy this, we simply reassign the correct constructor to the Van.prototype.constructor which is the Van
Van.prototype.constructor = Van;

// as usual, we add other methods specific to the subclass in the prototype chain.
Van.prototype.grab = function() { console.log('grabbing...'); };


var zed = new Car(3); // I'm a superclass
zed.move();
var amy = new Van(9); // I'm a subclass
amy.move();
amy.grab();
