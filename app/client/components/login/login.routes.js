(function() {
	'use strict';
	angular
	.module('sm.login')
	.run(appRun)

	function appRun(routerHelper) {
		routerHelper.configureStates(getStates());
	}

	function getStates(){
		return [
			{
				state: 'login',
				config: {
					url: '/',
					controller: 'loginCtrl',
					controllerAs: 'vm',
					templateUrl: 'app/client/components/login/login.html'
				}
			}
		]
	}
})();