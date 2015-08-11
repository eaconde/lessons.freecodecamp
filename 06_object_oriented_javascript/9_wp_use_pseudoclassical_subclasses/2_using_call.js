var product = function(num, b) {
  return num * b;
};

var double = function(num) {
  return product(num, 2);
};

double(3);


// ==============================
// the code below will have the same effect as the one above.
// by using call, we are able to override the default object used as 'this'

var product = function(b) {
  return this * b;
};

var double = function() {
  return product.call(this, 2);
};

double.call(3);
