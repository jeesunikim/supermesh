(function() {
	'use strict';
	angular
		.module('sm.schedule')
		.controller('ScheduleController', ScheduleController);

		ScheduleController.$inject = ['$scope','sessions'];

		function ScheduleController ($scope, sessions) {
			// var vm = this;
			// vm.sessions = sessions;
			$scope.sessions = sessions;
		}

})();