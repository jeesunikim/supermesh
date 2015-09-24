(function() {
    'use strict';

    angular
        .module('sm.chat')
        .constant('FIREBASE_URI', 'https://luminous-inferno-640.firebaseio.com')
        .controller('chatCtrl', chatCtrl);

    /* @ngInject */
    function chatCtrl($scope, $firebaseObject,$firebaseArray, FIREBASE_URI) {

        $scope.fire="hello";
        var ref = new Firebase (FIREBASE_URI);

        $scope.messages =$firebaseArray(ref);

        $scope.addMessage = function(){
            $scope.messages.$add({
                text:$scope.newMessageText
            });
        };

        console.log($firebaseObject)

//         /*jshint validthis: true */
//         var vm = this;
//         vm.avengers = [];
//         vm.title = 'Avengers';

//         activate();

//         function activate() {
// //            Using a resolver on all routes or dataservice.ready in every controller
// //            var promises = [getAvengers()];
// //            return dataservice.ready(promises).then(function(){
//             return getAvengers().then(function() {
//                 logger.info('Activated Avengers View');
//             });
//         }

//         function getAvengers() {
//             return dataservice.getAvengers().then(function(data) {
//                 vm.avengers = data;
//                 return vm.avengers;
//             });
//         }
    }
})();