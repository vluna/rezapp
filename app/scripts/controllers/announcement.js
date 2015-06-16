'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AnnouncementCtrl
 * @description
 * # AnnouncementCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AnnouncementCtrl', ['$scope', '$http', function ($scope, $http) {
  	$scope.announcements;

	$http.get("http://victorluna.ca/residence/events/info/announcements_connection.php")
	.success(function (response) {
		// If succeed, store the response in a variable
		$scope.announcements = response;

		for (var i = 0; i < $scope.announcements.length; i++) {
			console.log($scope.announcements[i]);
		};
	});
  }]);
