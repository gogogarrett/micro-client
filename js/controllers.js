var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('UserListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('https://micro-users.herokuapp.com/users.json').success(function(data) {
      $scope.users = data;
    });

    $scope.orderProp = 'name';
  }]);

phonecatApp.controller('SubscriptionListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('https://micro-subscriptions.herokuapp.com/subscriptions.json').success(function(data) {
      $scope.subscriptions = data;
    });

    $scope.orderProp = 'name';
  }]);
