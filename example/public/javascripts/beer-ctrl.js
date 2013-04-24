app.controller('BeerCtrl', function ($scope, $http) {
  $http.get('/beers').success(function (beers) {
    $scope.beers = beers;
  });
});
