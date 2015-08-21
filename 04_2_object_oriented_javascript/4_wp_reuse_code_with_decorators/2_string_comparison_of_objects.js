var makeAnObject = function() {
  return { example: 'property' };
}

var obj1 = makeAnObject();
var obj2 = makeAnObject();
console.log(obj1 === obj2); // false. they are not the same as they different objects/identities


var makeAnObject2 = function() {
  return function(){};
}

obj1 = makeAnObject2();
obj2 = makeAnObject2();
console.log(obj1 === obj2); // false. === asks for equality not indentity
