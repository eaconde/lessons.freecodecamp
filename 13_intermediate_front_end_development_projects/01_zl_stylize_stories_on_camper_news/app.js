
(function() {
  var app = angular.module('newsStore', []);

  app.controller('NewsController', ['$scope', '$http', function($scope, $http) {
    $scope.news = [];

    $http.get('http://www.freecodecamp.com/news/hot')
      .success(function(data) {

        $scope.news = data;

        $scope.news.map(function(news) {
          if (news.image === '' || news.image.indexOf("blank.jpg") >= 0) {
            news.image = news.author.picture;
          }

          if (news.headline.length > 40) {
            news.headline = news.headline.slice(0, 37) + '...';
          }
        });
        console.log($scope.news);
      });
  }]);

})();
