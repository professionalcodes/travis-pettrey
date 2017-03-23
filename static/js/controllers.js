'use strict';

var travisApp = travisApp || {};
var controllers = travisApp.controllers = angular.module('travisPettreyAppControllers', []);

controllers.controller('RootCtrl', ["$scope", "$location", function ($scope, $location) {

	if ($location.path() === "/") {}
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
				
	};
}])

	