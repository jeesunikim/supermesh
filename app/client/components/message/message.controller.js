(function() {
    'use strict';

    angular
        .module('sm.message')
        .controller('messageCtrl', messageCtrl);

    // messageCtrl.$inject = ['$scope','$state', '$rootScope'];

    function messageCtrl() {
        var vm = this;
        vm.messages = {
            name: '',
            category: '',
            msg: ''
        }

    }
})();