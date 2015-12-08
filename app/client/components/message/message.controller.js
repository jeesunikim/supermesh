(function() {
    'use strict';

    angular
        .module('sm.message')
        .controller('messageCtrl', messageCtrl);

    messageCtrl.$inject = ['$state', 'dataservice'];

    function messageCtrl($state, dataservice) {
        var vm = this;

        vm.messages = {
            name: '',
            category: '',
            message: '',
            upvote: 0
        }

        vm.submit = function (message) {
            return dataservice.postIdeas(message).then(function (res){
                  $state.go('idea', {"id": res.data._id});
            });
        }

    }
})();