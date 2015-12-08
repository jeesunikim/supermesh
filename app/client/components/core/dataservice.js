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
            eachIdea: eachIdea,
            postIdeas: postIdeas,
            updateVote: updateVote
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

        function updateVote(vote) {
            return $http.put('/api/message/' + vote._id + "/upvote").success(function(data){
                vote.upvotes += 1;
            });
        }

        function postIdeas(newMessage) {
            return $http.post('/api/message', newMessage)
                .success(function (data) {
                    console.log("Success" + data);
                })
                .error(function (data){
                    console.log("Error: " + data);
                })
        }
    }
})();