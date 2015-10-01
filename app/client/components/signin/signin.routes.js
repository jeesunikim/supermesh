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
				url: '/signin',
				controller:"signInCtrl",
				templateUrl: 'client/components/signin/signin.html'
			}
		}
		]
	}
})();