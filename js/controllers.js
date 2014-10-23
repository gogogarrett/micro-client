var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('UserListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:9292/users.json').success(function(data) {
      $scope.users = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatApp.controller('SubscriptionListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:9290/subscriptions.json').success(function(data) {
      $scope.subscriptions = data;
    });

    $scope.orderProp = 'age';
  }]);
