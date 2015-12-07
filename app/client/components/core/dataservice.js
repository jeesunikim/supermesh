(function() {
    'use strict';

    angular
        .module('sm.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    /* @ngInject */
    function dataservice($http) {
        return {
            getIdeas: getIdeas
        };

        function getIdeas() {
            return $http.get('/api/message')
                .then(ideasCompleted)
                .catch(ideasFailed);

                function ideasCompleted(res) {
                    return res.data;
                }

                function ideasFailed(error) {
                    console.log('error');
                }
        }
    }
})();