(function(){
	'use strict';
	angular
		.module('sm.event')
		.run(appRun)

		function appRun(routerHelper){
			routerHelper.configureStates(getStates());
		};

		function getStates(){
			return [
				{
					state: 'event',
					config: {
						url: '/event',
						controller: 'eventController',
						templateUrl: 'client/components/event/event.html'
					}
				}
			];
		};

})();