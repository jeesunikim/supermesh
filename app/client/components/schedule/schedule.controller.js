(function() {
	'use strict';
	angular
		.module('sm.schedule')
		.controller('ScheduleController', ScheduleController);

		ScheduleController.$inject = ['$scope', '$firebaseArray', 'FIREBASE_URI'];

		function ScheduleController ($scope, $firebaseArray, FIREBASE_URI) {
			var eventRef = new Firebase(FIREBASE_URI + 'Session');
			$scope.sessions = $firebaseArray(eventRef);
		}

})();