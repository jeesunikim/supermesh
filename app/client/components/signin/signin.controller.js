(function() {
    'use strict';

    angular
        .module('sm.signin')
        .controller('signInCtrl', signInCtrl);

    signInCtrl.$inject = ['$scope','$state', '$rootScope'];

    function signInCtrl($scope, $state,$rootScope) {
    	console.log('meow');
    	$scope.shoppingList = [
    		{name: 'Matthew'},
    		{name: 'Jeesun'},
    		{name: 'Cecilia'}
    	];
    }
})();