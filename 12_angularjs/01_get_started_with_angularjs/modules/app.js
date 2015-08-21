(function() {
  var gems = [
    { name: 'Dodecahedron', price: 2.95, description: '. . .', canPurchase: true, soldOut: false},
    { name: 'Gem2', price: 4.95, description: '. . .', canPurchase: true, soldOut: true},
    { name: 'Pentagonal Gem', price: 3.95, description: '. . .', canPurchase: false, soldOut: false},
    { name: 'Zircon', price: 5.95, description: '. . .', canPurchase: true, soldOut: false}
  ];
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });

})();

/*============================================
** Directives - HTML annotations that trigger JS behaviours
**
** Modules - Where application components live
**
** Controllers - Where we add application behaviour
**
** Expression - How values get displayed within the page
**
============================================*/
