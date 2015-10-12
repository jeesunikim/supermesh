(function(){

	angular
	.module('sm.adminCreate')
	.controller('AdminCreateController', AdminCreateController);

	AdminCreateController.$inject = ['$scope','$rootScope','AdminFactory'];

	function AdminCreateController($scope, $rootScope, AdminFactory){

		$scope.session = {
			name:"",
			presenter:"",
			desc:"",
			time:"",
			imgUrl:""
		};

		$scope.submitSession = function(session){
			return $http.post('/')
		};

		//watch file for change, do stuff and trigger factory Func.
		$scope.$watch('file', function(file){
			if(file){
				$scope.loading = true;

				AdminFactory.uploadImg($scope.file).then(function(data){
					$scope.loading = false;
					console.log(data, "data");
					$scope.upload = data;

					//get path on callback from AWS
					var initial_path ="https://s3-us-west-2.amazonaws.com/supermesh/";
					//this is necessary because of the way AWS formats spaces "+"
					$scope.session.imgUrl = initial_path + data.data.split(' ').join('+');

				});
			}
		})
	}
})();