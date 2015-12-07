(function() {
    'use strict';

    angular
        .module('sm.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    /* @ngInject */
    function dataservice() {
        return {
            getMessages: getMessages
        };

        function getMessages() {
            return $http.get('/api/session')
                .then(MessagesCompleted)
                .catch(MessagesFailed);

                function MessagesCompleted(res) {
                    return res.data.results;
                }

                function MessagesFailed(error) {
                    logger.error('error');
                }
        }
    }
})();