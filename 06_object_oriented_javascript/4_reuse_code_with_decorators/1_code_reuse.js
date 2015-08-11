//========================================
// starting with a little piece of code
// we identify code duplication
var amy = { loc: 1 };
amy.loc++;

var ben = { loc: 9 }; // same behaviour of creating new object and passing in property values
ben.loc++; // same behaviour of modifying an objects property

// we then refactor duplicate code so it can be reused, simplified, and easier for maintainability

//========================================
// we can refactor car movement like so
var move = function(car) {
  car.loc++;
  // note that other property modications for the car can also be done here...
}
// then change car movement for amy and ben like so.
move(amy);
move(ben);

//========================================
// we can refactor object creation via a decorator like so
var carLike = function(obj, loc /*,objects normally have more props here...*/) {
  obj.loc++;
  // we can initialize the obj's other properties here as well
  return obj
};

// then chance object creation for amy and ben.
var amy = carLike({}, 1);
var ben = carLike({}, 9);

// NOTE: adjectives are common names for decorators
//========================================

// we can enhance this further by allowing the obj to control
//  its own 'move'ment by being a function within its decorator

var carLike = function(obj, loc) {
  obj.loc = loc;
  obj.move = function() {
    this.loc++;
  }
  return obj;
}

var amy = carLike({}, 1)
amy.move(); // this on move function would be 'amy'
var ben = { loc: 9 };
ben.move(); // this on move function would be 'ben'
