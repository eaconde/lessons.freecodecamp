// ===================================
// Superclass
var Car = function(loc) {
  this.loc = loc
};
Car.prototype.move = function() { this.loc++; };

// ===================================
// Subclass
var Van = function(loc) {
  Car.call(this, loc); // with this Van.prototype delegates to Object.prototype
  // see 2_using_call.js as to why we used call
}
// Van.prototype.__proto__ = Car.prototype; // OR
Van.prototype = Object.create(Car.prototype); // NOTE: we need to delegate to the Car.prototype and not the Car alone
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
