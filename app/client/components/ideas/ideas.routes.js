(function(){
	'use strict';
	angular
	.module('sm.ideas')
	.run(appRun)

	function appRun(routerHelper){
		routerHelper.configureStates(getStates());
	};

	function getStates(){
		return [
			{
				state: 'ideas',
				config: {
					url: '/ideas',
					controller: 'ideasController',
					controllerAs: 'vm',
					templateUrl: 'app/client/components/ideas/ideas.html'
				}
			}
		];
	}
})();