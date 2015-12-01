(function(){

	angular
	.module('sm.adminCreate')
	.controller('AdminCreateController', AdminCreateController);

	AdminCreateController.$inject = ['$scope', '$stateParams', '$state', '$rootScope','AdminFactory', '$firebaseObject','$firebaseArray','FIREBASE_URI'];

	function AdminCreateController($scope, $stateParams, $state, $rootScope, AdminFactory, $firebaseObject, $firebaseArray, FIREBASE_URI){
		var eventRef = new Firebase(FIREBASE_URI + 'Session');

		//instatiate session object and add to $scope
		$scope.session = {
			// name: "",
			// category: "",
			desc: ""
			// budget: "",
			// address: "",
			// imgUrl:""
		};


		$scope.sessions = $firebaseArray(eventRef);

		$scope.submitSession = function(session){
			$scope.sessions.$add(session);
			$scope.session ={};
			$scope.upload ="";
			$state.go('ideas');
		};

		//watch file for change, do stuff and trigger factory Func.
		// $scope.$watch('file', function(file){
		// 	if(file){
		// 		$scope.loading = true;

		// 		AdminFactory.uploadImg($scope.file).then(function(data){
		// 			$scope.loading = false;
		// 			console.log(data, "data");
		// 			$scope.upload = data;

		// //get path on callback from AWS
		// var initial_path ="https://s3-us-west-2.amazonaws.com/supermesh/";
		// //this is necessary because of the way AWS formats spaces "+"
		// $scope.session.imgUrl = initial_path + data.data.split(' ').join('+');

		// });
		// 	}
		// })

	}
})();