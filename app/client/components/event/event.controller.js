(function() {
	'use strict';
	angular
		.module('sm.event')
		.controller('eventController', eventController);

		eventController.$inject = ['$scope', '$firebaseArray', 'FIREBASE_URI'];

		function eventController ($scope, $firebaseArray, FIREBASE_URI) {
			var eventRef = new Firebase(FIREBASE_URI + 'Session');
			$scope.event = $firebaseArray(eventRef);
			console.log($scope.event, "event for participants");
		}

})();