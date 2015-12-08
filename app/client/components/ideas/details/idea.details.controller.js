(function () {
	'use strict';
	angular
		.module('sm.ideaDetails')
		.controller('ideaDetailsCtrl', ideaDetailsCtrl);
		ideaDetailsCtrl.$inject = ['$stateParams', 'dataservice'];

		function ideaDetailsCtrl($stateParams, dataservice){
			var vm = this;
			vm.idea = [];
			vm.vote = undefined;

			getIdea($stateParams.id);

			function getIdea(id) {
				return dataservice.eachIdea(id).then(function(data) {
					vm.idea = data;
					return vm.idea;
				})
			}

			// function upvote(id){
			// 	dataservice.eachIdea(id).then(function(data) {
			// 		vm.vote = data.upvote;
			// 		vm.vote++;
			// 		console.log(vm.vote, "upvote");
			// 	});
			// }

		}
})();