(function () {
	'use strict';
	angular
		.module('sm.ideaDetails')
		.run(appRun)

	function appRun(routerHelper){
		routerHelper.configureStates(getStates());
	};
	function getStates(){
		return [
			{
				state: 'idea',
				config: {
					url: '/idea/:id',
					controller: 'ideaDetailsCtrl',
					controllerAs: 'vm',
					templateUrl: 'app/client/components/ideas/details/idea.details.html'
				}
			}
		];
	}
})();