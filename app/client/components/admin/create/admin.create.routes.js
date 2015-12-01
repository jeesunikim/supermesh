(function(){

	angular
		.module('sm.adminCreate')
		.run(appRun);

		function appRun(routerHelper){
			routerHelper.configureStates(getStates());
		};

		function getStates(){
			return [
				{
					state: 'admincreate',
					config: {
						url: '/',
						controller: 'AdminCreateController',
						templateUrl: 'client/components/admin/create/admin.create.html'
					}
				}
			]
		}

})();