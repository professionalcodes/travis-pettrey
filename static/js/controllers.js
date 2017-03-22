'use strict';

var logosApp = logosApp || {};
var controllers = logosApp.controllers = angular.module('logosAppControllers', []);

controllers.controller('RootCtrl', ["$scope", "$location", function ($scope, $location) {

	if ($location.path() === "/")
		$location.path("/home");
}]);

controllers.controller('HomeCtrl', ['$scope', '$location', "WelcomeScreenService", function ($scope, $location, WelcomeScreenService) {
	$scope.onload = function() {
		log("screenDisplay")
		WelcomeScreenService.screenDisplay();
	}

	$scope.onload();
}]);

/* Header1Ctrl is used to encapsulate any functionality associated with the ngInclude for header1 */
controllers.controller('Header1Ctrl', ['$scope', 'OnloadService', function ($scope, OnloadService) {
	
	$scope.runOnload = function() {
		OnloadService.setResize();
		OnloadService.resize();
		OnloadService.setNavScroll();
		OnloadService.setCollapseOnclick();		
	};
}])

controllers.controller('Navbar1Ctrl', ['$scope', function ($scope) {
	
}])

controllers.controller('PortfolioCtrl', ['$scope', function ($scope) {
	
}])
	
controllers.controller('DesignCtrl', ['$scope', function ($scope) {
	
}])

controllers.controller('MarketingCtrl', ['$scope', function ($scope) {
	
}])
	
controllers.controller('MeetCtrl', ['$scope', function ($scope) {
	
}])

controllers.controller('TestimonialsCtrl', ['$scope', function ($scope) {
	
}])

controllers.controller('ServicesCtrl', ['$scope', function ($scope) {
	
}])

	