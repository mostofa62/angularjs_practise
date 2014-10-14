var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phone/phones.json').success(function(data) {
      $scope.phones = data;
	  $scope.mainImageUrl = data.imageUrl;
    });
    
	$scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
	  
    }
	
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.id = $routeParams.phoneId;
  }]);