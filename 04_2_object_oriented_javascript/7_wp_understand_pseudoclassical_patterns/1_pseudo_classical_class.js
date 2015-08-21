// pseudo-classical because it attempts to resemble the class systems from other
//  languages by adding a thin layer of syntactic conveniences.

var Car = function(loc) {
  // 1. notice we removed obj declaration via Object.create
  // 2. we will also rename the obj to this since it no longer exist
  this.loc = loc;
  // 3. we also removed the return statement
};

// with constructor mode, all Car.prototype methods are already included
Car.prototype.move = function() { this.loc++; };
Car.prototype.on = function() { console.log('on'); };

var amy = new Car(1); // constructor mode with 'new'
amy.on();
