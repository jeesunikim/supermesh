(function() {
	'use strict';
	angular
		.module('sm.ideas')
		.controller('ideasController', ideasController);

		ideasController.$inject = ['$scope', 'dataservice'];

		function ideasController ($scope, dataservice) {
			var vm = this;
			vm.ideas = [];
			vm.title = "Barbarian's Suggested Ideas";

			getIdeas();

			function getIdeas(){
				return dataservice.getIdeas().then(function (data) {
					vm.ideas = data;
					console.log(vm.ideas, "ideas");
					return vm.ideas;
				});
			}
		
		}

})();