app.controller('BeerCtrl', function ($scope, $http) {
  $http.get('/beers').success(function (beers) {
    $scope.beers = beers;
  });

  $scope.setSort = function (by) {
    if (by === $scope.sortBy)
      $scope.reverse = !!!$scope.reverse;
    $scope.sortBy = by;
  };
});
