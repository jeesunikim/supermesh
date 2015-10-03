(function(){
	'use strict';
	angular
	.module('sm.participant')
	.run(appRun)

	function appRun(routerHelper){
		routerHelper.configureStates(getStates());
	}

	function getStates(){

		return [
		{
			state: 'participant',
			config: {
				url: '/',
				templateUrl: 'client/components/participant/participant.html'
			}
		}
		]
	}
})();