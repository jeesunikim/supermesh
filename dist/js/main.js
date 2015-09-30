(function () {
    'use strict';
    angular.module('sm.session', []);
})();
(function(){
	'use strict';
	angular
		.module('sm.session')
		.run(appRun)

		function appRun(routerHelper){
			routerHelper.configureStates(getStates());
		}

		// getStates.$inject = ['$stateProvider', '$stateParams'];

		function getStates(){
			return [
				{
					state: 'session',
					config: {
						url: '/session/:id',
						controller: 'SessionController',
						templateUrl: 'client/components/session/view/session.view.html',
						resolve: {
							sessionID: function($stateParams) {
								return $stateParams.id;
							}
						}
					}
				}
			];
		};

})();
(function() {
	'use strict';
	angular
		.module('sm.session')
		.controller('SessionController', SessionController);

		SessionController.$inject = ['$scope', 'sessionID', '$firebaseObject', 'FIREBASE_URI'];

		function SessionController($scope, sessionID, $firebaseObject, FIREBASE_URI) {
			$scope.sessionID = sessionID;
			var sessionRef = new Firebase(FIREBASE_URI + 'Session' + '/' + sessionID);
			$scope.session = $firebaseObject(sessionRef);
		}

})();
(function() {
	'use strict'
	angular
		.module('sm.session')
		.directive('sessionTile', sessionTile);

		function sessionTile() {
			return {
				restrict: 'A',
				scope: {
					'session': '='
				},
				templateUrl: 'client/components/session/tile/session.tile.html'
			}
		}

})();
(function () {
	'use strict';
	angular.module('sm.router', []);
})();
(function () {
    'use strict';

    angular
        .module('sm.router')
        .provider('routerHelper', routerHelperProvider);

        routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

        function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
            /* jshint validthis:true */
            this.$get = RouterHelper;

            $locationProvider.html5Mode(true);

            RouterHelper.$inject = ['$state'];

            function RouterHelper($state) {
                var hasOtherwise = false;

                var service = {
                    configureStates: configureStates,
                    getStates: getStates
                };

                return service;

                ///////////////

                function configureStates(states, otherwisePath) {
                    states.forEach(function(state) {
                        $stateProvider.state(state.state, state.config);
                    });
                    if (otherwisePath && !hasOtherwise) {
                        hasOtherwise = true;
                        $urlRouterProvider.otherwise(otherwisePath);
                    }
                }

                function getStates() { return $state.get(); }
            }
        }

})();
(function () {
	'use strict';

	angular.module('sm.cc',[]);
	
})();
(function () {

	angular
		.module('sm.cc')
		.directive('navBar', navBar);

	function navBar() {

		var directive = {
			templateUrl: 'client/components/common/navbar/navbar.html',
			restrict: 'A'
		}

		return directive;
	}

})();
(function() {
    'use strict';

    angular.module('sm.signin', []);
})();
(function(){
	'use strict';
	angular
	.module('sm.signin')
	.run(appRun)

	function appRun(routerHelper){
		routerHelper.configureStates(getStates());
	}

	function getStates(){
		return [
		{
			state: 'signin',
			config: {
				url: '/',
				templateUrl: 'client/components/signin/signin.html'
			}
		}
		]
	}
})();
(function() {
    'use strict';

    angular
        .module('sm.signin')
        .controller('signInCtrl', signInCtrl);

    /* @ngInject */
    function signInCtrl() {
//         /*jshint validthis: true */
//         var vm = this;
//         vm.avengers = [];
//         vm.title = 'Avengers';

//         activate();

//         function activate() {
// //            Using a resolver on all routes or dataservice.ready in every controller
// //            var promises = [getAvengers()];
// //            return dataservice.ready(promises).then(function(){
//             return getAvengers().then(function() {
//                 logger.info('Activated Avengers View');
//             });
//         }

//         function getAvengers() {
//             return dataservice.getAvengers().then(function(data) {
//                 vm.avengers = data;
//                 return vm.avengers;
//             });
//         }
    }
})();
(function() {
    'use strict';

    angular.module('sm.chat', []);
})();
/**
 * Created by alexanderkozovski on 9/24/15.
 */
'use strict';

angular
    .module('sm.chat')
    .directive('chatModule', chatModule);

function chatModule(){


    return {
        restrict:'E',
        templateUrl:'/client/components/chat/chat.html',
        controller: 'chatCtrl'
        //link: function(scope, element,  attr){
        //    console.debug(scope);
        //
        //}

    };


}
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
        //var voteRef = new Firebase (FIREBASE_URI + 'Session' + '/' + $scope.sessionID + '/' + 'Votes' )

        // var sessionRef = new Firebase(FIREBASE_URI + 'Session' + '/' + sessionID);
        
        $scope.user = 0;
        //create anon user with uid and limit session to browser open only.
        $scope.authAnonUser= function(username){
            chatRef.authAnonymously(function(error, authData) {
                if (error) {

                    console.log("Authentication Failed!", error);
                    $scope.user = false;
                } else {
                    userRef.push({id:authData.uid, name:username, token:authData.token});
                    console.log("Logged in as:", authData);
                    $scope.error= false;
                       $scope.$apply(function() {
                           $scope.user = authData;
                           $scope.username = username;
                       })
                }
            }, {
                remember: "session"
            });
        }

        $scope.messages = $firebaseArray(chatRef);

        //add messages to scope
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

        //Upvote function
        $scope.error= false;
        $scope.voted = false;

        $scope.upVote = function(index, message){
            if(!$scope.user){
                $scope.error =true;
            }else {

                console.log($scope.user.uid, "UID");

                    if (!message.votes) {
                        message.votes = {};
                    }
                console.log(message.votes[$scope.user.auth.uid]);
                    message.votes[$scope.user.auth.uid] = !($scope.user.auth.uid in message.votes) ? 0 : message.votes[$scope.user.auth.uid] + 1;

                    message.votecount = Object.keys(message.votes).length;
                    $scope.messages.$save(index);

                console.log('after', message);

                    //$scope.messages.votes = message.votecount;
                    //console.log($scope.messages);






                //$scope.error= false;
                //console.log(index);
                //message.votes++;
                //$scope.messages.$save(index);
                ////message.votes++;
                //
                //console.log($scope.user);
            }

        }




    }
})();
(function () {
	'use strict';
	angular.module('sm.sessions', []);
})();
(function(){
	'use strict';
	angular
		.module('sm.sessions')
		.run(appRun)

		function appRun(routerHelper){
			routerHelper.configureStates(getStates());
		};

		function getStates(){
			return [
				{
					state: 'sessions',
					config: {
						url: '/sessions',
						controller: 'SessionsController',
						templateUrl: 'client/components/sessions/sessions.html'
					}
				}
			];
		};

})();
(function() {
	'use strict';
	angular
		.module('sm.sessions')
		.controller('SessionsController', SessionsController);

		SessionsController.$inject = ['$scope', '$firebaseArray', 'FIREBASE_URI'];

		function SessionsController ($scope, $firebaseArray, FIREBASE_URI) {
			var eventRef = new Firebase(FIREBASE_URI + 'Session');
			$scope.sessions = $firebaseArray(eventRef);
		}

})();
(function() {
    'use strict';

    angular
    	.module('sm.core', [])
    	.constant('FIREBASE_URI', 'https://luminous-inferno-640.firebaseio.com/');

})();
(function() {
    'use strict';

    angular
        .module('sm.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice() {
    //     var isPrimed = false;
    //     var primePromise;

    //     var service = {
    //         getAvengersCast: getAvengersCast,
    //         getAvengerCount: getAvengerCount,
    //         getAvengers: getAvengers,
    //         ready: ready
    //     };

    //     return service;

    //     function getAvengers() {
    //         return $http.get('/api/maa')
    //             .then(getAvengersComplete)
    //             .catch(function(message) {
    //                 exception.catcher('XHR Failed for getAvengers')(message);
    //                 $location.url('/');
    //             });

    //         function getAvengersComplete(data, status, headers, config) {
    //             return data.data[0].data.results;
    //         }
    //     }

    //     function getAvengerCount() {
    //         var count = 0;
    //         return getAvengersCast()
    //             .then(getAvengersCastComplete)
    //             .catch(exception.catcher('XHR Failed for getAvengerCount'));

    //         function getAvengersCastComplete (data) {
    //             count = data.length;
    //             return $q.when(count);
    //         }
    //     }

    //     function getAvengersCast() {
    //         var cast = [
    //             {name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man'},
    //             {name: 'Chris Hemsworth', character: 'Thor'},
    //             {name: 'Chris Evans', character: 'Steve Rogers / Captain America'},
    //             {name: 'Mark Ruffalo', character: 'Bruce Banner / The Hulk'},
    //             {name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow'},
    //             {name: 'Jeremy Renner', character: 'Clint Barton / Hawkeye'},
    //             {name: 'Gwyneth Paltrow', character: 'Pepper Potts'},
    //             {name: 'Samuel L. Jackson', character: 'Nick Fury'},
    //             {name: 'Paul Bettany', character: 'Jarvis'},
    //             {name: 'Tom Hiddleston', character: 'Loki'},
    //             {name: 'Clark Gregg', character: 'Agent Phil Coulson'}
    //         ];
    //         return $q.when(cast);
    //     }

    //     function prime() {
    //         // This function can only be called once.
    //         if (primePromise) {
    //             return primePromise;
    //         }

    //         primePromise = $q.when(true).then(success);
    //         return primePromise;

    //         function success() {
    //             isPrimed = true;
    //             logger.info('Primed data');
    //         }
    //     }

    //     function ready(nextPromises) {
    //         var readyPromise = primePromise || prime();

    //         return readyPromise
    //             .then(function() { return $q.all(nextPromises); })
    //             .catch(exception.catcher('"ready" function failed'));
    //     }

    }
})();
(function() {
    'use strict';

    angular
        .module('sm.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'client/components/core/404.html',
                    title: '404'
                }
            }
        ];
    }
})();
(function(){
	'use strict';
	angular.module('sm.admin',[]);
})();
(function(){

	angular
		.module('sm.admin')
		.run(appRun);

		function appRun(routerHelper){
			routerHelper.configureStates(getStates());
		};

		function getStates(){
			return [
				{
					state: 'admin',
					config: {
						url: '/admin',
						controller: 'AdminController',
						templateUrl: 'client/components/admin/admin.html'
					}
				}
			]
		}

})();
(function(){

	angular
		.module('sm.admin')
		.controller('AdminController', AdminController);

		AdminController.$inject = ['$scope', '$firebaseArray', 'FIREBASE_URI'];

		function AdminController($scope, $firebaseArray, FIREBASE_URI){
			var eventRef = new Firebase(FIREBASE_URI + 'Session');
			
			$scope.sessions = $firebaseArray(eventRef);

			$scope.submitSession = function(session){
				// eventRef.push(session);
				$scope.sessions.push(session);
			}

		}

})();
(function() {
    'use strict';

    angular.module('sm', [

        'ui.router',
        'firebase',

        /*
         * Order is not important.
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */ 
         
        'sm.core',
        'sm.router',

        /*
         * Feature areas
         */
         
        'sm.admin',
        'sm.cc',
        'sm.chat',
        'sm.session',
        'sm.sessions',
        'sm.signin'
    ]);

})();
(function() {
    'use strict';

    angular.module('sm.firebase',[])
    	.constant('FIREBASE_URI', 'https://luminous-inferno-640.firebaseio.com');

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5tb2R1bGUuanMiLCJzZXNzaW9uL3ZpZXcvc2Vzc2lvbi52aWV3LnJvdXRlcy5qcyIsInNlc3Npb24vdmlldy9zZXNzaW9uLnZpZXcuY29udHJvbGxlci5qcyIsInNlc3Npb24vdGlsZS9zZXNzaW9uLnRpbGUuZGlyZWN0aXZlLmpzIiwiY29yZS9yb3V0ZXIvcm91dGVyLm1vZHVsZS5qcyIsImNvcmUvcm91dGVyL3JvdXRlci5wcm92aWRlci5qcyIsImNvbW1vbi9jYy5tb2R1bGUuanMiLCJjb21tb24vbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJzaWduaW4vc2lnbmluLm1vZHVsZS5qcyIsInNpZ25pbi9zaWduaW4ucm91dGVzLmpzIiwic2lnbmluL3NpZ25pbi5jb250cm9sbGVyLmpzIiwiY2hhdC9jaGF0Lm1vZHVsZS5qcyIsImNoYXQvY2hhdC5kaXIuanMiLCJjaGF0L2NoYXQuY3RybC5qcyIsInNlc3Npb25zL3Nlc3Npb25zLm1vZHVsZS5qcyIsInNlc3Npb25zL3Nlc3Npb25zLnJvdXRlcy5qcyIsInNlc3Npb25zL3Nlc3Npb25zLmNvbnRyb2xsZXIuanMiLCJjb3JlL2NvcmUubW9kdWxlLmpzIiwiY29yZS9kYXRhc2VydmljZS5qcyIsImNvcmUvY29yZS5yb3V0ZS5qcyIsImFkbWluL2FkbWluLm1vZHVsZS5qcyIsImFkbWluL2FkbWluLnJvdXRlcy5qcyIsImFkbWluL2FkbWluLmNvbnRyb2xsZXIuanMiLCJzbS5tb2R1bGUuanMiLCJzbS5maXJlYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdzbS5zZXNzaW9uJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKXtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uc2Vzc2lvbicpXG5cdFx0LnJ1bihhcHBSdW4pXG5cblx0XHRmdW5jdGlvbiBhcHBSdW4ocm91dGVySGVscGVyKXtcblx0XHRcdHJvdXRlckhlbHBlci5jb25maWd1cmVTdGF0ZXMoZ2V0U3RhdGVzKCkpO1xuXHRcdH1cblxuXHRcdC8vIGdldFN0YXRlcy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlcicsICckc3RhdGVQYXJhbXMnXTtcblxuXHRcdGZ1bmN0aW9uIGdldFN0YXRlcygpe1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXRlOiAnc2Vzc2lvbicsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHR1cmw6ICcvc2Vzc2lvbi86aWQnLFxuXHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ1Nlc3Npb25Db250cm9sbGVyJyxcblx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2Vzc2lvbi92aWV3L3Nlc3Npb24udmlldy5odG1sJyxcblx0XHRcdFx0XHRcdHJlc29sdmU6IHtcblx0XHRcdFx0XHRcdFx0c2Vzc2lvbklEOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJHN0YXRlUGFyYW1zLmlkO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdO1xuXHRcdH07XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5zZXNzaW9uJylcblx0XHQuY29udHJvbGxlcignU2Vzc2lvbkNvbnRyb2xsZXInLCBTZXNzaW9uQ29udHJvbGxlcik7XG5cblx0XHRTZXNzaW9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnc2Vzc2lvbklEJywgJyRmaXJlYmFzZU9iamVjdCcsICdGSVJFQkFTRV9VUkknXTtcblxuXHRcdGZ1bmN0aW9uIFNlc3Npb25Db250cm9sbGVyKCRzY29wZSwgc2Vzc2lvbklELCAkZmlyZWJhc2VPYmplY3QsIEZJUkVCQVNFX1VSSSkge1xuXHRcdFx0JHNjb3BlLnNlc3Npb25JRCA9IHNlc3Npb25JRDtcblx0XHRcdHZhciBzZXNzaW9uUmVmID0gbmV3IEZpcmViYXNlKEZJUkVCQVNFX1VSSSArICdTZXNzaW9uJyArICcvJyArIHNlc3Npb25JRCk7XG5cdFx0XHQkc2NvcGUuc2Vzc2lvbiA9ICRmaXJlYmFzZU9iamVjdChzZXNzaW9uUmVmKTtcblx0XHR9XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCdcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ3NtLnNlc3Npb24nKVxuXHRcdC5kaXJlY3RpdmUoJ3Nlc3Npb25UaWxlJywgc2Vzc2lvblRpbGUpO1xuXG5cdFx0ZnVuY3Rpb24gc2Vzc2lvblRpbGUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRyZXN0cmljdDogJ0EnLFxuXHRcdFx0XHRzY29wZToge1xuXHRcdFx0XHRcdCdzZXNzaW9uJzogJz0nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2Vzc2lvbi90aWxlL3Nlc3Npb24udGlsZS5odG1sJ1xuXHRcdFx0fVxuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXIubW9kdWxlKCdzbS5yb3V0ZXInLCBbXSk7XG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5yb3V0ZXInKVxuICAgICAgICAucHJvdmlkZXIoJ3JvdXRlckhlbHBlcicsIHJvdXRlckhlbHBlclByb3ZpZGVyKTtcblxuICAgICAgICByb3V0ZXJIZWxwZXJQcm92aWRlci4kaW5qZWN0ID0gWyckbG9jYXRpb25Qcm92aWRlcicsICckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInXTtcblxuICAgICAgICBmdW5jdGlvbiByb3V0ZXJIZWxwZXJQcm92aWRlcigkbG9jYXRpb25Qcm92aWRlciwgJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAgICAgLyoganNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgICAgICB0aGlzLiRnZXQgPSBSb3V0ZXJIZWxwZXI7XG5cbiAgICAgICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcblxuICAgICAgICAgICAgUm91dGVySGVscGVyLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBSb3V0ZXJIZWxwZXIoJHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc090aGVyd2lzZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZVN0YXRlczogY29uZmlndXJlU3RhdGVzLFxuICAgICAgICAgICAgICAgICAgICBnZXRTdGF0ZXM6IGdldFN0YXRlc1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcblxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY29uZmlndXJlU3RhdGVzKHN0YXRlcywgb3RoZXJ3aXNlUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuZm9yRWFjaChmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoc3RhdGUuc3RhdGUsIHN0YXRlLmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJ3aXNlUGF0aCAmJiAhaGFzT3RoZXJ3aXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNPdGhlcndpc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShvdGhlcndpc2VQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFN0YXRlcygpIHsgcmV0dXJuICRzdGF0ZS5nZXQoKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdzbS5jYycsW10pO1xuXHRcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uY2MnKVxuXHRcdC5kaXJlY3RpdmUoJ25hdkJhcicsIG5hdkJhcik7XG5cblx0ZnVuY3Rpb24gbmF2QmFyKCkge1xuXG5cdFx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL25hdmJhci9uYXZiYXIuaHRtbCcsXG5cdFx0XHRyZXN0cmljdDogJ0EnXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRpcmVjdGl2ZTtcblx0fVxuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uc2lnbmluJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKXtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdC5tb2R1bGUoJ3NtLnNpZ25pbicpXG5cdC5ydW4oYXBwUnVuKVxuXG5cdGZ1bmN0aW9uIGFwcFJ1bihyb3V0ZXJIZWxwZXIpe1xuXHRcdHJvdXRlckhlbHBlci5jb25maWd1cmVTdGF0ZXMoZ2V0U3RhdGVzKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCl7XG5cdFx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRzdGF0ZTogJ3NpZ25pbicsXG5cdFx0XHRjb25maWc6IHtcblx0XHRcdFx0dXJsOiAnLycsXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5odG1sJ1xuXHRcdFx0fVxuXHRcdH1cblx0XHRdXG5cdH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uc2lnbmluJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ3NpZ25JbkN0cmwnLCBzaWduSW5DdHJsKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIHNpZ25JbkN0cmwoKSB7XG4vLyAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuLy8gICAgICAgICB2YXIgdm0gPSB0aGlzO1xuLy8gICAgICAgICB2bS5hdmVuZ2VycyA9IFtdO1xuLy8gICAgICAgICB2bS50aXRsZSA9ICdBdmVuZ2Vycyc7XG5cbi8vICAgICAgICAgYWN0aXZhdGUoKTtcblxuLy8gICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbi8vIC8vICAgICAgICAgICAgVXNpbmcgYSByZXNvbHZlciBvbiBhbGwgcm91dGVzIG9yIGRhdGFzZXJ2aWNlLnJlYWR5IGluIGV2ZXJ5IGNvbnRyb2xsZXJcbi8vIC8vICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW2dldEF2ZW5nZXJzKCldO1xuLy8gLy8gICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UucmVhZHkocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgIHJldHVybiBnZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0FjdGl2YXRlZCBBdmVuZ2VycyBWaWV3Jyk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLmdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgICAgICAgICAgdm0uYXZlbmdlcnMgPSBkYXRhO1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB2bS5hdmVuZ2Vycztcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLmNoYXQnLCBbXSk7XG59KSgpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBhbGV4YW5kZXJrb3pvdnNraSBvbiA5LzI0LzE1LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXJcbiAgICAubW9kdWxlKCdzbS5jaGF0JylcbiAgICAuZGlyZWN0aXZlKCdjaGF0TW9kdWxlJywgY2hhdE1vZHVsZSk7XG5cbmZ1bmN0aW9uIGNoYXRNb2R1bGUoKXtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6J0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDonL2NsaWVudC9jb21wb25lbnRzL2NoYXQvY2hhdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2NoYXRDdHJsJ1xuICAgICAgICAvL2xpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCAgYXR0cil7XG4gICAgICAgIC8vICAgIGNvbnNvbGUuZGVidWcoc2NvcGUpO1xuICAgICAgICAvL1xuICAgICAgICAvL31cblxuICAgIH07XG5cblxufSIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLmNoYXQnKVxuICAgICAgICAuY29udHJvbGxlcignY2hhdEN0cmwnLCBjaGF0Q3RybCk7XG5cbiAgICBjaGF0Q3RybC4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGZpcmViYXNlT2JqZWN0JywnJGZpcmViYXNlQXJyYXknLCAnRklSRUJBU0VfVVJJJ11cblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIGNoYXRDdHJsKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCRmaXJlYmFzZUFycmF5LCBGSVJFQkFTRV9VUkkpIHtcblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgZmlyZWJhc2UgcmVmZXJlbmNlXG4gICAgICAgIHZhciBjaGF0UmVmID0gbmV3IEZpcmViYXNlIChGSVJFQkFTRV9VUkkgKyAnU2Vzc2lvbicgKyAnLycgKyAkc2NvcGUuc2Vzc2lvbklEICsgJy8nICsgJ01lc3NhZ2VzJyk7XG4gICAgICAgIHZhciB1c2VyUmVmID0gbmV3IEZpcmViYXNlIChGSVJFQkFTRV9VUkkgKyAnU2Vzc2lvbicgKyAnLycgKyAkc2NvcGUuc2Vzc2lvbklEICsgJy8nICsgJ1VzZXJzJyk7XG4gICAgICAgIC8vdmFyIHZvdGVSZWYgPSBuZXcgRmlyZWJhc2UgKEZJUkVCQVNFX1VSSSArICdTZXNzaW9uJyArICcvJyArICRzY29wZS5zZXNzaW9uSUQgKyAnLycgKyAnVm90ZXMnIClcblxuICAgICAgICAvLyB2YXIgc2Vzc2lvblJlZiA9IG5ldyBGaXJlYmFzZShGSVJFQkFTRV9VUkkgKyAnU2Vzc2lvbicgKyAnLycgKyBzZXNzaW9uSUQpO1xuICAgICAgICBcbiAgICAgICAgJHNjb3BlLnVzZXIgPSAwO1xuICAgICAgICAvL2NyZWF0ZSBhbm9uIHVzZXIgd2l0aCB1aWQgYW5kIGxpbWl0IHNlc3Npb24gdG8gYnJvd3NlciBvcGVuIG9ubHkuXG4gICAgICAgICRzY29wZS5hdXRoQW5vblVzZXI9IGZ1bmN0aW9uKHVzZXJuYW1lKXtcbiAgICAgICAgICAgIGNoYXRSZWYuYXV0aEFub255bW91c2x5KGZ1bmN0aW9uKGVycm9yLCBhdXRoRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aGVudGljYXRpb24gRmFpbGVkIVwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlclJlZi5wdXNoKHtpZDphdXRoRGF0YS51aWQsIG5hbWU6dXNlcm5hbWUsIHRva2VuOmF1dGhEYXRhLnRva2VufSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2VkIGluIGFzOlwiLCBhdXRoRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lcnJvcj0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXNlciA9IGF1dGhEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHJlbWVtYmVyOiBcInNlc3Npb25cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkc2NvcGUubWVzc2FnZXMgPSAkZmlyZWJhc2VBcnJheShjaGF0UmVmKTtcblxuICAgICAgICAvL2FkZCBtZXNzYWdlcyB0byBzY29wZVxuICAgICAgICAkc2NvcGUuYWRkTWVzc2FnZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkc2NvcGUubWVzc2FnZXMuJGFkZCh7XG4gICAgICAgICAgICAgICAgdGV4dDokc2NvcGUubmV3TWVzc2FnZVRleHQsXG4gICAgICAgICAgICAgICAgaWQ6ICRzY29wZS51c2VyLnVpZCxcbiAgICAgICAgICAgICAgICBuYW1lOiAkc2NvcGUudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgdm90ZXM6IHt9LFxuICAgICAgICAgICAgICAgIHRpbWU6RmlyZWJhc2UuU2VydmVyVmFsdWUuVElNRVNUQU1QXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vZm9ybWF0IFRpbWUgZnJvbSBVTklYIHRvIGh1bWFuIHJlYWRhYmxlXG4gICAgICAgICRzY29wZS5mb3JtYXRUaW1lID0gZnVuY3Rpb24odGltZXN0YW1wKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9ICh0aW1lc3RhbXApID8gbmV3IERhdGUodGltZXN0YW1wKSA6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgfHwgMTIsXG4gICAgICAgICAgICAgICAgbWludXRlcyA9ICcnICsgZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICAgICAgICAgICAgYW1wbSA9IChkYXRlLmdldEhvdXJzKCkgPj0gMTIpID8gJ3BtJyA6ICdhbSc7XG5cbiAgICAgICAgICAgIGhvdXJzID0gKGhvdXJzID4gMTIpID8gaG91cnMgLSAxMiA6IGhvdXJzO1xuICAgICAgICAgICAgbWludXRlcyA9IChtaW51dGVzLmxlbmd0aCA8IDIpID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgICAgICAgICByZXR1cm4gJycgKyBob3VycyArICc6JyArIG1pbnV0ZXMgKyBhbXBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vbGlzdGVuIGZvciBjaGFuZ2VzIHRvIG1vZGVsIGFuZCBwdWxsIHVzZXIgbmFtZVxuICAgICAgICBjaGF0UmVmLm9uKFwiY2hpbGRfYWRkZWRcIiwgZnVuY3Rpb24oc25hcHNob3QsIHByZXZDaGlsZEtleSkge1xuICAgICAgICAgICAgdmFyIG5ld01lc3NhZ2UgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgICRzY29wZS5uYW1lID0gbmV3TWVzc2FnZS5uYW1lO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vVXB2b3RlIGZ1bmN0aW9uXG4gICAgICAgICRzY29wZS5lcnJvcj0gZmFsc2U7XG4gICAgICAgICRzY29wZS52b3RlZCA9IGZhbHNlO1xuXG4gICAgICAgICRzY29wZS51cFZvdGUgPSBmdW5jdGlvbihpbmRleCwgbWVzc2FnZSl7XG4gICAgICAgICAgICBpZighJHNjb3BlLnVzZXIpe1xuICAgICAgICAgICAgICAgICRzY29wZS5lcnJvciA9dHJ1ZTtcbiAgICAgICAgICAgIH1lbHNlIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS51c2VyLnVpZCwgXCJVSURcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlLnZvdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnZvdGVzID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLnZvdGVzWyRzY29wZS51c2VyLmF1dGgudWlkXSk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uudm90ZXNbJHNjb3BlLnVzZXIuYXV0aC51aWRdID0gISgkc2NvcGUudXNlci5hdXRoLnVpZCBpbiBtZXNzYWdlLnZvdGVzKSA/IDAgOiBtZXNzYWdlLnZvdGVzWyRzY29wZS51c2VyLmF1dGgudWlkXSArIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS52b3RlY291bnQgPSBPYmplY3Qua2V5cyhtZXNzYWdlLnZvdGVzKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlcy4kc2F2ZShpbmRleCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXInLCBtZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyRzY29wZS5tZXNzYWdlcy52b3RlcyA9IG1lc3NhZ2Uudm90ZWNvdW50O1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5tZXNzYWdlcyk7XG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgLy8kc2NvcGUuZXJyb3I9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgICAgIC8vbWVzc2FnZS52b3RlcysrO1xuICAgICAgICAgICAgICAgIC8vJHNjb3BlLm1lc3NhZ2VzLiRzYXZlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAvLy8vbWVzc2FnZS52b3RlcysrO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygkc2NvcGUudXNlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXIubW9kdWxlKCdzbS5zZXNzaW9ucycsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ3NtLnNlc3Npb25zJylcblx0XHQucnVuKGFwcFJ1bilcblxuXHRcdGZ1bmN0aW9uIGFwcFJ1bihyb3V0ZXJIZWxwZXIpe1xuXHRcdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSk7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGdldFN0YXRlcygpe1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXRlOiAnc2Vzc2lvbnMnLFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0dXJsOiAnL3Nlc3Npb25zJyxcblx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdTZXNzaW9uc0NvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9zZXNzaW9ucy9zZXNzaW9ucy5odG1sJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XTtcblx0XHR9O1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uc2Vzc2lvbnMnKVxuXHRcdC5jb250cm9sbGVyKCdTZXNzaW9uc0NvbnRyb2xsZXInLCBTZXNzaW9uc0NvbnRyb2xsZXIpO1xuXG5cdFx0U2Vzc2lvbnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZmlyZWJhc2VBcnJheScsICdGSVJFQkFTRV9VUkknXTtcblxuXHRcdGZ1bmN0aW9uIFNlc3Npb25zQ29udHJvbGxlciAoJHNjb3BlLCAkZmlyZWJhc2VBcnJheSwgRklSRUJBU0VfVVJJKSB7XG5cdFx0XHR2YXIgZXZlbnRSZWYgPSBuZXcgRmlyZWJhc2UoRklSRUJBU0VfVVJJICsgJ1Nlc3Npb24nKTtcblx0XHRcdCRzY29wZS5zZXNzaW9ucyA9ICRmaXJlYmFzZUFycmF5KGV2ZW50UmVmKTtcblx0XHR9XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICBcdC5tb2R1bGUoJ3NtLmNvcmUnLCBbXSlcbiAgICBcdC5jb25zdGFudCgnRklSRUJBU0VfVVJJJywgJ2h0dHBzOi8vbHVtaW5vdXMtaW5mZXJuby02NDAuZmlyZWJhc2Vpby5jb20vJyk7XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uY29yZScpXG4gICAgICAgIC5mYWN0b3J5KCdkYXRhc2VydmljZScsIGRhdGFzZXJ2aWNlKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIGRhdGFzZXJ2aWNlKCkge1xuICAgIC8vICAgICB2YXIgaXNQcmltZWQgPSBmYWxzZTtcbiAgICAvLyAgICAgdmFyIHByaW1lUHJvbWlzZTtcblxuICAgIC8vICAgICB2YXIgc2VydmljZSA9IHtcbiAgICAvLyAgICAgICAgIGdldEF2ZW5nZXJzQ2FzdDogZ2V0QXZlbmdlcnNDYXN0LFxuICAgIC8vICAgICAgICAgZ2V0QXZlbmdlckNvdW50OiBnZXRBdmVuZ2VyQ291bnQsXG4gICAgLy8gICAgICAgICBnZXRBdmVuZ2VyczogZ2V0QXZlbmdlcnMsXG4gICAgLy8gICAgICAgICByZWFkeTogcmVhZHlcbiAgICAvLyAgICAgfTtcblxuICAgIC8vICAgICByZXR1cm4gc2VydmljZTtcblxuICAgIC8vICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VycygpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvbWFhJylcbiAgICAvLyAgICAgICAgICAgICAudGhlbihnZXRBdmVuZ2Vyc0NvbXBsZXRlKVxuICAgIC8vICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGV4Y2VwdGlvbi5jYXRjaGVyKCdYSFIgRmFpbGVkIGZvciBnZXRBdmVuZ2VycycpKG1lc3NhZ2UpO1xuICAgIC8vICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvJyk7XG4gICAgLy8gICAgICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzQ29tcGxldGUoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gZGF0YS5kYXRhWzBdLmRhdGEucmVzdWx0cztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJDb3VudCgpIHtcbiAgICAvLyAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgLy8gICAgICAgICByZXR1cm4gZ2V0QXZlbmdlcnNDYXN0KClcbiAgICAvLyAgICAgICAgICAgICAudGhlbihnZXRBdmVuZ2Vyc0Nhc3RDb21wbGV0ZSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZXhjZXB0aW9uLmNhdGNoZXIoJ1hIUiBGYWlsZWQgZm9yIGdldEF2ZW5nZXJDb3VudCcpKTtcblxuICAgIC8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnNDYXN0Q29tcGxldGUgKGRhdGEpIHtcbiAgICAvLyAgICAgICAgICAgICBjb3VudCA9IGRhdGEubGVuZ3RoO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiAkcS53aGVuKGNvdW50KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzQ2FzdCgpIHtcbiAgICAvLyAgICAgICAgIHZhciBjYXN0ID0gW1xuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnUm9iZXJ0IERvd25leSBKci4nLCBjaGFyYWN0ZXI6ICdUb255IFN0YXJrIC8gSXJvbiBNYW4nfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0NocmlzIEhlbXN3b3J0aCcsIGNoYXJhY3RlcjogJ1Rob3InfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0NocmlzIEV2YW5zJywgY2hhcmFjdGVyOiAnU3RldmUgUm9nZXJzIC8gQ2FwdGFpbiBBbWVyaWNhJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdNYXJrIFJ1ZmZhbG8nLCBjaGFyYWN0ZXI6ICdCcnVjZSBCYW5uZXIgLyBUaGUgSHVsayd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnU2NhcmxldHQgSm9oYW5zc29uJywgY2hhcmFjdGVyOiAnTmF0YXNoYSBSb21hbm9mZiAvIEJsYWNrIFdpZG93J30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdKZXJlbXkgUmVubmVyJywgY2hhcmFjdGVyOiAnQ2xpbnQgQmFydG9uIC8gSGF3a2V5ZSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnR3d5bmV0aCBQYWx0cm93JywgY2hhcmFjdGVyOiAnUGVwcGVyIFBvdHRzJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdTYW11ZWwgTC4gSmFja3NvbicsIGNoYXJhY3RlcjogJ05pY2sgRnVyeSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnUGF1bCBCZXR0YW55JywgY2hhcmFjdGVyOiAnSmFydmlzJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdUb20gSGlkZGxlc3RvbicsIGNoYXJhY3RlcjogJ0xva2knfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0NsYXJrIEdyZWdnJywgY2hhcmFjdGVyOiAnQWdlbnQgUGhpbCBDb3Vsc29uJ31cbiAgICAvLyAgICAgICAgIF07XG4gICAgLy8gICAgICAgICByZXR1cm4gJHEud2hlbihjYXN0KTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIHByaW1lKCkge1xuICAgIC8vICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gb25seSBiZSBjYWxsZWQgb25jZS5cbiAgICAvLyAgICAgICAgIGlmIChwcmltZVByb21pc2UpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gcHJpbWVQcm9taXNlO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBwcmltZVByb21pc2UgPSAkcS53aGVuKHRydWUpLnRoZW4oc3VjY2Vzcyk7XG4gICAgLy8gICAgICAgICByZXR1cm4gcHJpbWVQcm9taXNlO1xuXG4gICAgLy8gICAgICAgICBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgIC8vICAgICAgICAgICAgIGlzUHJpbWVkID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICBsb2dnZXIuaW5mbygnUHJpbWVkIGRhdGEnKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIHJlYWR5KG5leHRQcm9taXNlcykge1xuICAgIC8vICAgICAgICAgdmFyIHJlYWR5UHJvbWlzZSA9IHByaW1lUHJvbWlzZSB8fCBwcmltZSgpO1xuXG4gICAgLy8gICAgICAgICByZXR1cm4gcmVhZHlQcm9taXNlXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiAkcS5hbGwobmV4dFByb21pc2VzKTsgfSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZXhjZXB0aW9uLmNhdGNoZXIoJ1wicmVhZHlcIiBmdW5jdGlvbiBmYWlsZWQnKSk7XG4gICAgLy8gICAgIH1cblxuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uY29yZScpXG4gICAgICAgIC5ydW4oYXBwUnVuKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIGFwcFJ1bihyb3V0ZXJIZWxwZXIpIHtcbiAgICAgICAgdmFyIG90aGVyd2lzZSA9ICcvNDA0JztcbiAgICAgICAgcm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSwgb3RoZXJ3aXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGU6ICc0MDQnLFxuICAgICAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvNDA0JyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9jb3JlLzQwNC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICc0MDQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhci5tb2R1bGUoJ3NtLmFkbWluJyxbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpe1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5hZG1pbicpXG5cdFx0LnJ1bihhcHBSdW4pO1xuXG5cdFx0ZnVuY3Rpb24gYXBwUnVuKHJvdXRlckhlbHBlcil7XG5cdFx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCl7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhdGU6ICdhZG1pbicsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHR1cmw6ICcvYWRtaW4nLFxuXHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ0FkbWluQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2NsaWVudC9jb21wb25lbnRzL2FkbWluL2FkbWluLmh0bWwnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXG59KSgpOyIsIihmdW5jdGlvbigpe1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5hZG1pbicpXG5cdFx0LmNvbnRyb2xsZXIoJ0FkbWluQ29udHJvbGxlcicsIEFkbWluQ29udHJvbGxlcik7XG5cblx0XHRBZG1pbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRmaXJlYmFzZUFycmF5JywgJ0ZJUkVCQVNFX1VSSSddO1xuXG5cdFx0ZnVuY3Rpb24gQWRtaW5Db250cm9sbGVyKCRzY29wZSwgJGZpcmViYXNlQXJyYXksIEZJUkVCQVNFX1VSSSl7XG5cdFx0XHR2YXIgZXZlbnRSZWYgPSBuZXcgRmlyZWJhc2UoRklSRUJBU0VfVVJJICsgJ1Nlc3Npb24nKTtcblx0XHRcdFxuXHRcdFx0JHNjb3BlLnNlc3Npb25zID0gJGZpcmViYXNlQXJyYXkoZXZlbnRSZWYpO1xuXG5cdFx0XHQkc2NvcGUuc3VibWl0U2Vzc2lvbiA9IGZ1bmN0aW9uKHNlc3Npb24pe1xuXHRcdFx0XHQvLyBldmVudFJlZi5wdXNoKHNlc3Npb24pO1xuXHRcdFx0XHQkc2NvcGUuc2Vzc2lvbnMucHVzaChzZXNzaW9uKTtcblx0XHRcdH1cblxuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtJywgW1xuXG4gICAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgICAnZmlyZWJhc2UnLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIE9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4gICAgICAgICAqIEV2ZXJ5Ym9keSBoYXMgYWNjZXNzIHRvIHRoZXNlLlxuICAgICAgICAgKiBXZSBjb3VsZCBwbGFjZSB0aGVzZSB1bmRlciBldmVyeSBmZWF0dXJlIGFyZWEsXG4gICAgICAgICAqIGJ1dCB0aGlzIGlzIGVhc2llciB0byBtYWludGFpbi5cbiAgICAgICAgICovIFxuICAgICAgICAgXG4gICAgICAgICdzbS5jb3JlJyxcbiAgICAgICAgJ3NtLnJvdXRlcicsXG5cbiAgICAgICAgLypcbiAgICAgICAgICogRmVhdHVyZSBhcmVhc1xuICAgICAgICAgKi9cbiAgICAgICAgIFxuICAgICAgICAnc20uYWRtaW4nLFxuICAgICAgICAnc20uY2MnLFxuICAgICAgICAnc20uY2hhdCcsXG4gICAgICAgICdzbS5zZXNzaW9uJyxcbiAgICAgICAgJ3NtLnNlc3Npb25zJyxcbiAgICAgICAgJ3NtLnNpZ25pbidcbiAgICBdKTtcblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLmZpcmViYXNlJyxbXSlcbiAgICBcdC5jb25zdGFudCgnRklSRUJBU0VfVVJJJywgJ2h0dHBzOi8vbHVtaW5vdXMtaW5mZXJuby02NDAuZmlyZWJhc2Vpby5jb20nKTtcblxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=