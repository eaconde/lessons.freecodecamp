// variable access
// scoping limitations

var hero = aHero(); // is in global scope so it can be accessed in newSaga
var newSaga = function() { // newSaga itself is also in global scope
  var foil = aFoil(); // is in the scope of body function and can only be accessed within the function

  bad = aFoil(); // THIS IS BAD PRACTICE. Although this will be identified as a globally scoped variable. || scoping limitations

  //...
};

log(foil); // error!
log(hero); // this is ok
log(saga); // ok as well

// ==========================
// calling the functions
var hero = aHero();
var newSaga = function() {
  var foil = aFoil();
  var saga = function() {
    var deed = aDead();
    console.log(hero+deed+foil);
  };
  saga();
  saga();
};

newSaga();
newSaga();
