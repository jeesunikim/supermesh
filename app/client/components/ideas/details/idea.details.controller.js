(function () {
	'use strict';
	angular
		.module('sm.ideaDetails')
		.controller('ideaDetailsCtrl', ideaDetailsCtrl);
		ideaDetailsCtrl.$inject = ['$stateParams', '$http', 'dataservice'];

		function ideaDetailsCtrl($stateParams, $http, dataservice){
			var vm = this;
			vm.vote = undefined;
			vm.voteId = undefined;

			$http({
				url: '/api/message/' + $stateParams.id,
				method: 'GET'
			}).then(function(res) {
				vm.vote = res.data.upvote;
				vm.voteId = res.data._id;
			});

			getIdea($stateParams.id);
			
			function getIdea(id) {
				return dataservice.eachIdea(id).then(function(data) {
					vm.idea = data;
					return vm.idea;
				})
			}

			vm.upvote = function(vote) {
				return dataservice.updateVote(vote);
			}
		}
})();