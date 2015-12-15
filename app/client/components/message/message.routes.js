(function(){
	'use strict';
	angular
	.module('sm.message')
	.run(appRun)

	function appRun(routerHelper){
		routerHelper.configureStates(getStates());
	}

	function getStates(){
		return [
		{
			state: 'message',
			config: {
				url: '/message',
				controller: 'messageCtrl',
				controllerAs: 'vm',
				templateUrl: 'app/client/components/message/message.html'
			}
		}
		]
	}
})();