var hero = aHero();               // 1
var newSaga = function() {        // 2
  var foil = aFoil();
  var saga = function() {
    var deed = aDead();           // 5
    console.log(hero+deed+foil);  // 6
  };
  saga();                         // 4
  saga();                         // 7 (called for 2nd time)
};

newSaga();                        // 3
newSaga();                        // 8



/*************************************************
**
** > 1 hero = 'Gal'
** > 2 newSaga = (f)
**    >> foil = 'Cow'
**    >> saga = (f)
**        >>> deed = 'Eyes'
**        log == 'GalEyesCow'
**
**    >> saga = (f)               // new execution context with new bindings
**        >>> deed = 'Tips'       // new variable in new context
**        log == 'GalTipsCow'
**
** > 2 newSaga = (f)              // called 2nd time
**    >> foil = 'Cat'
**    >> saga = (f)
**        >>> deed = 'Rubs'
**        log == 'GalRubsCat'
**
**    >> saga = (f)               // new execution context with new bindings
**        >>> deed = 'Robs'       // new variable in new context
**        log == 'GalRobsCat'
**
**  NOTE: (newSaga1 === newSaga2) = false; the functions are identical but are have different context
**
**
**************************************************/
