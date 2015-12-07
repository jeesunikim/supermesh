(function(){
	'use strict';
	angular
	.module('sm.signin')
	.run(appRun)

	function appRun(routerHelper){
		routerHelper.configureStates(getStates());
	}

	function getStates(){
		return [
		{
			state: 'signin',
			config: {
				url: '/',
				controller:"signInCtrl",
				templateUrl: 'app/client/components/signin/signin.html'
			}
		}
		]
	}
})();