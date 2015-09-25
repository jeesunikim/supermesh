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
						templateUrl: 'client/components/schedule/schedule.html',
						resolve: {
							sessions: function(){
								// should return an array of sessions from the event (via firebase)
								return [
									{
										_id: 24242424,
										name: 'Community Development 101'
									},
									{
										_id: 787878,
										name: 'Tech for the Neighborhood'
									}
								]
							}
						}
					}
				}
			];
		};

})();