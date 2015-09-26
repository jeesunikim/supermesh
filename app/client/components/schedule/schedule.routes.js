(function(){
	'use strict';
	angular
		.module('sm.schedule')
		.run(appRun)

		function appRun(routerHelper){
			routerHelper.configureStates(getStates());
		};

		function getStates(){
			return [
				{
					state: 'schedule',
					config: {
						url: '/schedule',
						controller: 'ScheduleController',
						templateUrl: 'client/components/schedule/schedule.html'
					}
				}
			];
		};

})();