(function () {
	'use strict';
	angular
		.module('sm.ideaDetails')
		.controller('ideaDetailsCtrl', ideaDetailsCtrl);
		ideaDetailsCtrl.$inject = ['$stateParams', '$http', 'dataservice'];

		function ideaDetailsCtrl($stateParams, $http, dataservice){
			var vm = this;
			vm.idea = [];
			vm.vote = undefined;

			$http({
				url: '/api/message',
				method: 'GET',
				params: {id: $stateParams.id}
			}).then(function(res) {
				vm.vote = res.data.vote;
				console.log(vm.vote, "vote");
			});

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