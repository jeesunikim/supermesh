(function(){
	'use strict';
	angular
		.module('sm.sessions')
		.run(appRun)

		function appRun(routerHelper){
			routerHelper.configureStates(getStates());
		};

		function getStates(){
			return [
				{
					state: 'sessions',
					config: {
						url: '/sessions',
						controller: 'SessionsController',
						templateUrl: 'client/components/sessions/sessions.html'
					}
				}
			];
		};

})();