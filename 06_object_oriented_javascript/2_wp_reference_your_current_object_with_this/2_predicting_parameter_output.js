var fn = function(one, two) {
  console.log(this, one, two); // NOTE: positional parameters have no binding until a function is called
};

var r={}, b='blue', g='green';

fn(g, b);                 // <global>, green, blue

r.method = fn;
r.method(g, b);           // red, green, blue
// dot notation synonymous with brackets with regards to finding 'this'
r['method'](g, b);        // red, green, blue

// if not stored as a property, we can specify what gets to be 'this'
fn.call(r, g, b);         // red, green, blue

// first parameter will always be 'this' regardless if called from an object that has the actual function getting called
var y='yellow';
r.method.call(y, g, b);   // {0: "y", 1: "e", 2: "l", 3: "l", 4: "o", 5: "w", length: 6, [[PrimitiveValue]]: "yellow"}, green, blue

setTimeout(fn, 1000);     // <global>, undefined, undefined. since fn was called with no arguments

var setTimeout = function(cb, ms) {
  // waitSomehow(ms);
  cb();   // no value in params as setTimeout don't know what would the params be hence undefined

};
setTimeout(fn, 1000);     //  <global>, undefined, undefined. since inside setTimeout, cb is the invoking method hence the this to fn as the default case.

setTimeout(r.method, 1000); //  <global>, undefined, undefined. remember that only in the moment of invocation influences what the value of this will be. that would be cb() inside the setTimeout

// functions accepting functions commonly loses parameter bindings as shown above.
// to override this, we can implement as below to override the method invocation instead of within the setTimeout
setTimeout(function() {
  r.method(g,b);
}, 1000);

console.log(one);           // should throw exception since it is outside the global scope
console.log(this);          // <global>
new r.method(g,y);          // a brand new object, green, yellow
