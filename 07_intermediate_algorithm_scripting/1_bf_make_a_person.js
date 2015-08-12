// http://www.freecodecamp.com/challenges/bonfire-make-a-person

var Person = function(firstAndLast) {
    var nameArr = firstAndLast.split(' ');
    this.fullName = firstAndLast;
    this.first = nameArr[0];
    this.last = nameArr[1];
    this.getFirstName = getFirstName;
    this.getLastName = getLastName;
    this.getFullName = getFullName;
    return firstAndLast;
};

function getFirstName() {
  return this.first;
}

function getLastName() {
  return this.last;
}

function getFullName() {
  return this.fullName;
}

Person.prototype.setFirstName = function(first) {
  this.first = first;
};

Person.prototype.setLastName = function(last) {
  this.last = last;
};

Person.prototype.setFullName = function(firstAndLast) {
  this.fullName = firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

// RESOURCES:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
