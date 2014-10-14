var phonecatApp = angular.module('phonecatApp', [
'ngRoute',
'phonecatControllers',
'phonecatFilters'
]);


phonecatApp.config(['$routeProvider','$locationProvider',
  function($routeProvider , $locationProvider) {
    
	/*if(window.history && window.history.pushState){
    $locationProvider.html5Mode(true);
    }
	*/
	$routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
	  
	 

	  
  }]);