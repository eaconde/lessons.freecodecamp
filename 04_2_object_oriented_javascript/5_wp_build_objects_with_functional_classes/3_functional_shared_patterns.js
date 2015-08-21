
// this is well and good... however, if we have multiple methods that we want
//  to assign as properties to the car class, we will have to name them
//  two different locations. this is prone to user error as if we simply
//  created and forgot to add, or created then add the wront function name,
//  our class would not work as expected.
// consider below...

/****************************************
** var Car = function(loc) {
**   var obj = {loc: loc};
**   obj.move = move;
**   obj.on = on;
**   obj.off = off;
**   return obj;
** };
**
** var move = function() { this.loc++; }
** var on = function() { console.log('on'); };
** var off = function() { console.log('off'); };
****************************************/

// what if we can add all the methods we want to add to our car in an object like so...
// NOTE: $.extend requires jQuery to work

var Car = function(loc) {
  var obj = {loc: loc};
  $.extend(obj, methods);
  return obj;
};

var methods = {
  move: function() { this.loc++; },
  on: function() { console.log('on'); },
  off: function() { console.log('off'); }
};

var amy = Car(1);
console.log(amy);
