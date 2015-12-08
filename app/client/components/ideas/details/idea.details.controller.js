(function () {
	'use strict';
	angular
		.module('sm.ideaDetails')
		.controller('ideaDetailsCtrl', ideaDetailsCtrl);
		ideaDetailsCtrl.$inject = ['$stateParams', 'dataservice'];

		function ideaDetailsCtrl($stateParams, dataservice){
			var vm = this;
			vm.idea = undefined;
		
			getIdea($stateParams.id);
			
			function getIdea(id) {
				return dataservice.eachIdea(id).then(function(data) {
					vm.idea = data;
					return vm.idea;
				})
			}	
		}
})();