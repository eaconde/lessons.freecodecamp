// when the move method was moved inside the carLike decorator
//  everytime we create a new object, a new move object is created
//  this can make it very expensive in resources.

// we can improve the existing code so that 'this' is replaced with the local object obj like so
var carLike = function(obj, loc) {
  obj.loc = loc;
  obj.move = function() {
    // this is bound to a new value each time move is invoked.
    // if we change to the closure variable 'obj'
    //  each time move is invoked it will always refer the same 'car' obj
    obj.loc++;
  }
  return obj;
}

var amy = carLike({}, 1)
amy.move();
var ben = { loc: 9 };
ben.move();

// generally, we would use the object decorator pattern to add some functionality
//  to an already existing object and already have some functionlity in it.
