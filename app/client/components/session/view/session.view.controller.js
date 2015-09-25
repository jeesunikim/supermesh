(function() {
	'use strict';
	angular
		.module('sm.session')
		.controller('SessionController', SessionController);

		SessionController.$inject = ['$scope', 'session'];

		function SessionController($scope, session) {

			$scope.session = session;

		}

})();