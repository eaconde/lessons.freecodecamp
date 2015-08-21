var Car = function(loc) {
  var obj = {loc: loc};
  obj.move = function() { obj.loc++; };
  return obj;
}

var Van = function(loc) {
  var obj = Car(loc); // creating Car as the obj makes Car Van's superclass
  obj.grab = function() { console.log('grabbing...'); };
  return obj;
};

// duplication of most of the code and only different on added props and methods...
var Cop = function(loc) {
  var obj = Car(loc); // creating Car as the obj makes Car Cop's superclass
  obj.call = function() { console.log('calling...'); };
  return obj;
};

var amy = Van(1);
amy.grab();
var ben = Van(9);
ben.grab();
var cal = Cop(2);
cal.call();
