var hero = aHero();               // 1
var newSaga = function() {        // 2
  var foil = aFoil();
  var saga = function() {
    var deed = aDead();           // 5
    console.log(hero+deed+foil);  // 6
  };
  saga();                         // 4
  saga();
};

newSaga();                        // 3
newSaga();



/*************************************************
** Execution Context === In-memory scopes
** Storage systems for holding keys and values
**
** In-memory data stores
** > 1 hero = 'Gal'
** > 2 newSaga = (f) // no value until func is called
**
** In-memory scopes vs In-memory objects
** - they are not the same as access to context is limited vs objects
** -
**
** Predicting execution context output
**
**    >> foil = 'Cow'
**    >> saga = (f)
**        >>> deed = 'Eyes'
**
**************************************************/
