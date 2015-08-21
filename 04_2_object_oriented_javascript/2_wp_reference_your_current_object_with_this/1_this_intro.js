
// this = is an identifier that gets a value bound to it


var fn = function(a, b) {
  console.log(this);
};

var ob2 = {method: fn};

...
var obj = {
  fn: function(a, b) {
    console.log(this);
  };
};
 obj.fn(3,4); // obj is this

/***************************************
** what is 'this' not bound to...
** > {f}     the function object 'this' appears within
** > {...}   'a new instance of' the function 'this' appears within
** > {m: fn} an object happens to have that function as a property
** > {obj:}   the object created by the literal 'this' appears within
** > {a:,b:}  an 'execution context' or 'scope' of that function call
**
** what 'this' is bound to...
** > generally, left of the dot will be the approximate source of 'this'
**    - i.e., obj.fn(3,4) will have obj = this within fn
**
***************************************/
