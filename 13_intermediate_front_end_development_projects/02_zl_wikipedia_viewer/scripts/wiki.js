var SEARCH_URL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=20&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=JSON_CALLBACK&gsrsearch=';
var AUTOCOMPLETE_URL = 'http://en.wikipedia.org/w/api.php?callback=JSON_CALLBACK&action=opensearch&format=json&search=';var myApp = angular.module('wikiApp', ['ngAnimate']);
myApp.controller('SearchController', function($scope, $http, WikiSearch, AutoComplete) {
  $scope.searchQuery = "AngularJS";
  $scope.loaded = false;
  $scope.wikis = [];
  $scope.wikiTitles = ['Angular JS', 'Bootstrap', 'CS3S', 'HTML5', 'Javascript', 'jQuery', 'Ruby'];

  $scope.wikiSearch = function(query) {
    if (query !== undefined && query !== '') {
      WikiSearch.search(query).then(function(results) {
        $scope.loaded = true;
        $scope.wikis = results;
      });
    } else {
      $scope.loaded = false;
      $scope.wikis = [];
    }
  };

  $scope.searchWikiTitles = function(chars) {
    AutoComplete.fetch(chars).then(function(result) {
      $scope.wikiTitles = result;
      $scope.searching = $scope.wikiTitles.length > 0;
    });
  }

  $scope.clearWikis = function() {
    $scope.wikis = [];
    $scope.loaded = false;
  };
});

myApp.service('WikiSearch', function($q, $http) {
  this.search = function(query) {
    var deferred = $q.defer();

    $http({
      method: 'jsonp',
      url: SEARCH_URL + query
    }).
    then(function(response) {
      deferred.resolve(response.data.query.pages);
    }, function(response) {
      deferred.reject(arguments);
    });

    return deferred.promise;
  };
});

myApp.service('AutoComplete', function($q, $http) {
  this.fetch = function(chars) {
    var deferred = $q.defer();
    $http({
      method: 'jsonp',
      url: AUTOCOMPLETE_URL,
      params: {
        'action': "opensearch",
        'format': "json",
        'search': chars
      }
    }).
    then(function(response) {
      deferred.resolve(response.data[1]);
    }, function(response) {
      deferred.reject(arguments);
    });

    return deferred.promise;
  };
});

myApp.directive('ngEnter', function() {
  return function(scope, elem, attrs) {
    elem.bind("keydown keypress", function(event) {
      if (event.which === 13) {
        scope.$apply(function() {
          scope.$eval(attrs.ngEnter);
        });
        event.preventDefault();
      }
    });
  };
});

myApp.directive('ngComplete', function($parse, $timeout) {
  return function(scope, elem, attrs) {
    var element = angular.element(elem)[0];
    var currentTimeout = null;

    element.oninput = function() {
      var model = $parse(attrs.postFunction);
      var poster = model(scope);

      if (currentTimeout) {
        $timeout.cancel(currentTimeout)
      }
      currentTimeout = $timeout(function() {
        poster(angular.element(element).val());
      }, 0)

    };
  };
});
