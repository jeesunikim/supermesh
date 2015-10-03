(function() {
    'use strict';

    angular
        .module('sm.signup')
        .controller('signUpCtrl', signUpCtrl);

    signUpCtrl.$inject = ['$scope','$state', '$rootScope','$firebaseAuth', 'FIREBASE_URI'];

    function signUpCtrl($scope, $state,$rootScope, $firebaseAuth, FIREBASE_URI) {

        var ref = new Firebase(FIREBASE_URI +'Admin');
        var authObj = $firebaseAuth(ref);

        $scope.signUpUser = function (email, password) {

            authObj.$createUser({
                email: email,
                password: password
            }).then(function(userData) {
                console.log("User " + userData.uid + " created successfully!");

                return authObj.$authWithPassword({
                    email: email,
                    password: password
                });
            }).then(function(authData) {
                console.log("Logged in as:", authData.uid);
                $rootScope.authData = authData;
                $state.go('admin');
            }).catch(function(error) {
                console.error("Error: ", error);
                $scope.error =error;
                $scope.email ="";
                $scope.password ="";
                $state.go('signup');
            });
        }

    }
})();