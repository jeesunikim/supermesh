(function() {
    'use strict';

    angular
        .module('sm.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$location'];

    /* @ngInject */
    function dataservice($http, $location) {
        return {
            getIdeas: getIdeas,
            eachIdea: eachIdea
        };

        function getIdeas() {
            return $http.get('/api/message')
                .then(ideasCompleted)
                .catch(ideasFailed);

                function ideasCompleted(res) {
                    return res.data;
                }

                function ideasFailed(error) {
                    $location.url('/');
                    console.log('error');
                }
        }

        function eachIdea(id) {
            return $http.get('/api/message/' + id)
                .then(getEachIdea)
                .catch(getIdeaFailed);

                function getEachIdea(res) {
                    return res.data;
                }

                function getIdeaFailed(error) {
                    $location.url('/');
                    console.log(error);
                }

        }
    }
})();