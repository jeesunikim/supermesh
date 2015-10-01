(function() {
    'use strict';

    angular
        .module('sm.signin')
        .controller('signInCtrl', signInCtrl);

    signInCtrl.$inject = ['$scope','$state', '$rootScope', '$firebaseAuth', 'FIREBASE_URI'];

    function signInCtrl($scope, $state,$rootScope, $firebaseAuth, FIREBASE_URI) {

        var ref = new Firebase(FIREBASE_URI +'Admin');
        var adminObj = $firebaseAuth(ref);

        $scope.authEmailUser = function (email, password) {

            adminObj.$authWithPassword({
                password: password,
                email: email
            }).then(function (authData) {
                console.log("Logged in as:", authData.uid);
                $rootScope.authData = authData;
                $state.go('admin');



            }).catch(function (error) {
                console.error("Authentication failed:", error);
                $scope.error =error;
                $scope.email ="";
                $scope.password ="";
                $state.go('signin');
            });
        }





        // now, redirect only not authenticated

        //var userInfo = authenticationSvc.getUserInfo();
        //
        //if(userInfo.authenticated === false) {
        //    e.preventDefault(); // stop current execution
        //    $state.go('login'); // go to login
        //}

    }
})();