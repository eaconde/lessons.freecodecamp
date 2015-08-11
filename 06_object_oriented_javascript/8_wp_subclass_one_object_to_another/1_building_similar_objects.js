
/*****************************
** var Car = function(loc) {
**   var obj = {loc: loc};
**   obj.move = function() {
**     obj.loc++;
**   }
**   return obj;
** };
*****************************/

// create a new class derived from car but have their own unique properties and methods
var Van = function(loc) {
  var obj = {loc: loc};
  obj.move = function() { obj.loc++; };
  obj.grab = function() { console.log('calling...'); };
  return obj;
};

// duplication of most of the code and only different on added props and methods...
var Cop = function(loc) {
  var obj = {loc: loc};
  obj.move = function() { obj.loc++; }; //same in car...
  obj.call = function() { console.log('calling...'); };
  return obj;
};

var amy = Van(1);
amy.grab();
var ben = Van(9);
ben.grab();
var cal = Cop(2); // this is a cop's car
cal.move();
cal.call();
