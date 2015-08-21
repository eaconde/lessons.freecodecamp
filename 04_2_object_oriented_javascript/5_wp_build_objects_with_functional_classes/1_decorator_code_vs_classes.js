// A class builds the object that it is going to augment vs decorator requires the object as its input

/************************************
** // decorator we used in previous task
** var carLike = function(obj, loc) {
**   obj.loc = loc;
**   obj.move = function() {
**     obj.loc++;
**   }
**   return obj;
** }
**
************************************/

var Car = function(loc) {
  var obj = {loc: loc};
  obj.move = function() {
    obj.loc++;
  }
  return obj;
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();
