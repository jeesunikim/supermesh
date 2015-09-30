(function() {
    'use strict';

    angular
    .module('sm.chat')
    .controller('chatCtrl', chatCtrl);

    chatCtrl.$inject = ['$scope', '$firebaseObject','$firebaseArray', 'FIREBASE_URI']

    /* @ngInject */
    function chatCtrl($scope, $firebaseObject,$firebaseArray, FIREBASE_URI) {

        // Create a new firebase reference
        var chatRef = new Firebase (FIREBASE_URI + 'Session' + '/' + $scope.sessionID + '/' + 'Messages');
        var userRef = new Firebase (FIREBASE_URI + 'Session' + '/' + $scope.sessionID + '/' + 'Users');

        $scope.user = 0;
        $scope.voteArr = [];

        //create anon user with uid and limit session to browser open only.
        $scope.authAnonUser= function(username){
            chatRef.authAnonymously(function(error, authData) {
                if (error) {
                   console.log("Authentication Failed!", error);
                   $scope.user = false;
                } else {
                   userRef.push({id:authData.uid, name:username, token:authData.token});
                   console.log("Logged in as:", authData);
                   $scope.error = false;
                   $scope.$apply(function() {
                        $scope.user = authData;
                        $scope.username = username;
                    })
                }
            }, 
            {
                remember: "session"
            }
        );
    }

    $scope.messages = $firebaseArray(chatRef);

    $scope.addMessage = function(){
        $scope.messages.$add({
            text:$scope.newMessageText,
            id: $scope.user.uid,
            name: $scope.username,
            votes: {},
            time:Firebase.ServerValue.TIMESTAMP
        });
    };

    //format Time from UNIX to human readable
    $scope.formatTime = function(timestamp) {
        var date = (timestamp) ? new Date(timestamp) : new Date(),
        hours = date.getHours() || 12,
        minutes = '' + date.getMinutes(),
        ampm = (date.getHours() >= 12) ? 'pm' : 'am';

        hours = (hours > 12) ? hours - 12 : hours;
        minutes = (minutes.length < 2) ? '0' + minutes : minutes;
        return '' + hours + ':' + minutes + ampm;
    };

    //listen for changes to model and pull user name
    chatRef.on("child_added", function(snapshot, prevChildKey) {
        var newMessage = snapshot.val();
        $scope.name = newMessage.name;
    });

    // Custom Filter

    //Upvote function
    $scope.error= false;
    $scope.voted = false;

    $scope.upVote = function(index, message){
        if(!$scope.user){
            $scope.error =true;
        } else {
            // console.log($scope.user.uid, "UID");
            if (!message.votes) {
                message.votes = {};
            }
            // console.log(message.votes[$scope.user.auth.uid]);
            message.votes[$scope.user.auth.uid] = !($scope.user.auth.uid in message.votes) ? 0 : message.votes[$scope.user.auth.uid] + 1;
            message.votecount = Object.keys(message.votes).length;
            $scope.voteArr.push(message.votecount);
            $scope.messages.$save(index);
        }
    }
    }
})();