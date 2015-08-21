
var gold = {a: 1};
console.log(gold.a);  // 1
console.log(gold.z);  // undefined

// One time property copying
var blue = $.extend({}, gold); // on jsFiddle, we reference jQuery on load to make this work.
blue.b = 2;
console.log(blue.a);  // 1
console.log(blue.b);  // 2
console.log(blue.z);  // undefined

// On-going lookup-time delegation | Prototype
var rose = Object.create(gold);
rose.b = 2;
console.log(rose.a);  // 1
console.log(rose.b);  // 2
console.log(rose.z);  // undefined

// add a new z property to gold
gold.z = 3;
console.log(blue.z);  // undefined
console.log(rose.z);  // 3 . object will look to its prototype for the property missing in itself
