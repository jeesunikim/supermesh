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
						template: '<ui-view>Cecilia</ui-view>',
						templateUrl: 'client/components/event/event.html'
					}
				}
			];
		};

})();