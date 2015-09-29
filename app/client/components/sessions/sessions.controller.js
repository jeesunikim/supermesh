(function() {
	'use strict';
	angular
		.module('sm.sessions')
		.controller('SessionsController', SessionsController);

		SessionsController.$inject = ['$scope', '$firebaseArray', 'FIREBASE_URI'];

		function SessionsController ($scope, $firebaseArray, FIREBASE_URI) {
			var eventRef = new Firebase(FIREBASE_URI + 'Session');
			$scope.sessions = $firebaseArray(eventRef);
		}

})();