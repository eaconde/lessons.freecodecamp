// All objects delegate to the Object.prototype
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

// for instance, accessing the constructor property of the gold object will lookup to the
//  Object.prototype.constructor for its definition of its constructor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
var gold = {a: 1};
console.log(gold.constructor); // function Object()

// the same goes for objects inherited/created from objects that does not have the said property.
// lookup will always delegate to the Object.prototype chain
var rose = Object.create(gold);
console.log(rose.constructor); // function Object()

// Arrays for instance is another object that inherits from the Object.
// However, Array have its own implementation on some of the objects and properties that is different from its parent
var arr = [1,2,3];
console.log(arr.constructor); // function Array()


// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
