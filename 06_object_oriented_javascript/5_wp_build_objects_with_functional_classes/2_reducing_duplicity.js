
/****************************
** var Car = function(loc) {
**   var obj = {loc: loc};
**
**   // NOTE: the code below will cause each instance to have its own
**   //       move() instance. it would be better if we just create a
**   //       shared move() method instead so that it is cheaper on resources
**   obj.move = function() {
**     obj.loc++;
**   }
**   return obj;
** };
****************************/


var Car = function(loc) {
  var obj = {loc: loc};
  obj.move = move;
  return obj;
};

var move = function() {
  // note that since we move the function outside of the Car class,
  //  it will no longer have access to the 'obj'. to remedy this,
  //  we simply replace it with 'this'
  this.loc++;
}

var amy = Car(1);
amy.move(); // compiler will refer to the shared move method
var ben = Car(9);
ben.move(); // compiler will refer to the shared move method
