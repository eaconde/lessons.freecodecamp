var product = function(num, b) {
  return num * b;
};

var double = function(num) {
  return product(num, 2);
};

double(3);


// ==============================

var product = function(b) {
  return this * b;
};

var double = function() {
  return product.call(this, 2);
};

double.call(3); 
