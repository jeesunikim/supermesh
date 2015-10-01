(function(){
	'use strict';
	angular
	.module('sm.signup')
	.run(appRun)

	function appRun(routerHelper){
		routerHelper.configureStates(getStates());
	}

	function getStates(){

		return [
		{
			state: 'signup',
			config: {
				url: '/',
				controller:"signUpCtrl",
				templateUrl: 'client/components/signup/signup.html'
			}
		}
		]
	}
})();