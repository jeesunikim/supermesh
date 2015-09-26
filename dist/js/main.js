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
							session: function($stateParams) {
								// Should return all information concerning a particular session w/ some get function
								return {
									id: $stateParams.id
								}
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

		SessionController.$inject = ['$scope', 'session'];

		function SessionController($scope, session) {

			$scope.session = session;

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
(function () {
	'use strict';
	angular.module('sm.schedule', []);
})();
(function(){
	'use strict';
	angular
		.module('sm.schedule')
		.run(appRun)

		function appRun(routerHelper){
			routerHelper.configureStates(getStates());
		};

		function getStates(){
			return [
				{
					state: 'schedule',
					config: {
						url: '/',
						controller: 'ScheduleController',
						templateUrl: 'client/components/schedule/schedule.html',
						resolve: {
							sessions: function(){
								// should return an array of sessions from the event (via firebase)
								return [
									{
										_id: 24242424,
										name: 'Community Development 101'
									},
									{
										_id: 787878,
										name: 'Tech for the Neighborhood'
									}
								]
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
		.module('sm.schedule')
		.controller('ScheduleController', ScheduleController);

		ScheduleController.$inject = ['$scope','sessions'];

		function ScheduleController ($scope, sessions) {
			// var vm = this;
			// vm.sessions = sessions;
			$scope.sessions = sessions;
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
        .constant('FIREBASE_URI', 'https://luminous-inferno-640.firebaseio.com/')
        .controller('chatCtrl', chatCtrl);

    /* @ngInject */
    function chatCtrl($scope, $firebaseObject,$firebaseArray, FIREBASE_URI) {

        // Create a new firebase reference
        var chatRef = new Firebase (FIREBASE_URI +"Messages");
        var userRef = new Firebase (FIREBASE_URI +"Users");


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
                       $scope.$apply(function() {
                           $scope.user = authData;
                           $scope.username = username;
                       })
                }
            }, {
                remember: "sessionOnly"
            });
        }




        $scope.messages =$firebaseArray(chatRef);

        //add messages to scope
        $scope.addMessage = function(){
            $scope.messages.$add({
                text:$scope.newMessageText,
                id: $scope.user.uid,
                name: $scope.username,
                time:Firebase.ServerValue.TIMESTAMP
            });

        };

        $scope.formatTime = function(timestamp) {
            var date = (timestamp) ? new Date(timestamp) : new Date(),
                hours = date.getHours() || 12,
                minutes = '' + date.getMinutes(),
                ampm = (date.getHours() >= 12) ? 'pm' : 'am';

            hours = (hours > 12) ? hours - 12 : hours;
            minutes = (minutes.length < 2) ? '0' + minutes : minutes;
            return '' + hours + ':' + minutes + ampm;
        };


        chatRef.on("child_added", function(snapshot, prevChildKey) {
            var newPost = snapshot.val();
            $scope.name = newPost.name;

        });


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
        'sm.schedule'
    ]);

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5tb2R1bGUuanMiLCJzZXNzaW9uL3ZpZXcvc2Vzc2lvbi52aWV3LnJvdXRlcy5qcyIsInNlc3Npb24vdmlldy9zZXNzaW9uLnZpZXcuY29udHJvbGxlci5qcyIsInNlc3Npb24vdGlsZS9zZXNzaW9uLnRpbGUuZGlyZWN0aXZlLmpzIiwiY29yZS9yb3V0ZXIvcm91dGVyLm1vZHVsZS5qcyIsImNvcmUvcm91dGVyL3JvdXRlci5wcm92aWRlci5qcyIsImNvbW1vbi9jYy5tb2R1bGUuanMiLCJjb21tb24vbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJzaWduaW4vc2lnbmluLm1vZHVsZS5qcyIsInNpZ25pbi9zaWduaW4uanMiLCJzY2hlZHVsZS9zY2hlZHVsZS5tb2R1bGUuanMiLCJzY2hlZHVsZS9zY2hlZHVsZS5yb3V0ZXMuanMiLCJzY2hlZHVsZS9zY2hlZHVsZS5jb250cm9sbGVyLmpzIiwiY29yZS9jb3JlLm1vZHVsZS5qcyIsImNvcmUvZGF0YXNlcnZpY2UuanMiLCJjaGF0L2NoYXQubW9kdWxlLmpzIiwiY2hhdC9jaGF0LmRpci5qcyIsImNoYXQvY2hhdC5jdHJsLmpzIiwiYWRtaW4vYWRtaW4ubW9kdWxlLmpzIiwiYWRtaW4vYWRtaW4ucm91dGVzLmpzIiwiYWRtaW4vYWRtaW4uY29udHJvbGxlci5qcyIsInNtLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uc2Vzc2lvbicsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ3NtLnNlc3Npb24nKVxuXHRcdC5ydW4oYXBwUnVuKVxuXG5cdFx0ZnVuY3Rpb24gYXBwUnVuKHJvdXRlckhlbHBlcil7XG5cdFx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcblx0XHR9XG5cblx0XHQvLyBnZXRTdGF0ZXMuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHN0YXRlUGFyYW1zJ107XG5cblx0XHRmdW5jdGlvbiBnZXRTdGF0ZXMoKXtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGF0ZTogJ3Nlc3Npb24nLFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0dXJsOiAnL3Nlc3Npb24vOmlkJyxcblx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdTZXNzaW9uQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2NsaWVudC9jb21wb25lbnRzL3Nlc3Npb24vdmlldy9zZXNzaW9uLnZpZXcuaHRtbCcsXG5cdFx0XHRcdFx0XHRyZXNvbHZlOiB7XG5cdFx0XHRcdFx0XHRcdHNlc3Npb246IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIFNob3VsZCByZXR1cm4gYWxsIGluZm9ybWF0aW9uIGNvbmNlcm5pbmcgYSBwYXJ0aWN1bGFyIHNlc3Npb24gdy8gc29tZSBnZXQgZnVuY3Rpb25cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6ICRzdGF0ZVBhcmFtcy5pZFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XTtcblx0XHR9O1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uc2Vzc2lvbicpXG5cdFx0LmNvbnRyb2xsZXIoJ1Nlc3Npb25Db250cm9sbGVyJywgU2Vzc2lvbkNvbnRyb2xsZXIpO1xuXG5cdFx0U2Vzc2lvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJ3Nlc3Npb24nXTtcblxuXHRcdGZ1bmN0aW9uIFNlc3Npb25Db250cm9sbGVyKCRzY29wZSwgc2Vzc2lvbikge1xuXG5cdFx0XHQkc2NvcGUuc2Vzc2lvbiA9IHNlc3Npb247XG5cblx0XHR9XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCdcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ3NtLnNlc3Npb24nKVxuXHRcdC5kaXJlY3RpdmUoJ3Nlc3Npb25UaWxlJywgc2Vzc2lvblRpbGUpO1xuXG5cdFx0ZnVuY3Rpb24gc2Vzc2lvblRpbGUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRyZXN0cmljdDogJ0EnLFxuXHRcdFx0XHRzY29wZToge1xuXHRcdFx0XHRcdCdzZXNzaW9uJzogJz0nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2Vzc2lvbi90aWxlL3Nlc3Npb24udGlsZS5odG1sJ1xuXHRcdFx0fVxuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXIubW9kdWxlKCdzbS5yb3V0ZXInLCBbXSk7XG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5yb3V0ZXInKVxuICAgICAgICAucHJvdmlkZXIoJ3JvdXRlckhlbHBlcicsIHJvdXRlckhlbHBlclByb3ZpZGVyKTtcblxuICAgICAgICByb3V0ZXJIZWxwZXJQcm92aWRlci4kaW5qZWN0ID0gWyckbG9jYXRpb25Qcm92aWRlcicsICckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInXTtcblxuICAgICAgICBmdW5jdGlvbiByb3V0ZXJIZWxwZXJQcm92aWRlcigkbG9jYXRpb25Qcm92aWRlciwgJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAgICAgLyoganNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgICAgICB0aGlzLiRnZXQgPSBSb3V0ZXJIZWxwZXI7XG5cbiAgICAgICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcblxuICAgICAgICAgICAgUm91dGVySGVscGVyLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBSb3V0ZXJIZWxwZXIoJHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc090aGVyd2lzZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZVN0YXRlczogY29uZmlndXJlU3RhdGVzLFxuICAgICAgICAgICAgICAgICAgICBnZXRTdGF0ZXM6IGdldFN0YXRlc1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcblxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY29uZmlndXJlU3RhdGVzKHN0YXRlcywgb3RoZXJ3aXNlUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuZm9yRWFjaChmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoc3RhdGUuc3RhdGUsIHN0YXRlLmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJ3aXNlUGF0aCAmJiAhaGFzT3RoZXJ3aXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNPdGhlcndpc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShvdGhlcndpc2VQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFN0YXRlcygpIHsgcmV0dXJuICRzdGF0ZS5nZXQoKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdzbS5jYycsW10pO1xuXHRcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uY2MnKVxuXHRcdC5kaXJlY3RpdmUoJ25hdkJhcicsIG5hdkJhcik7XG5cblx0ZnVuY3Rpb24gbmF2QmFyKCkge1xuXG5cdFx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL25hdmJhci9uYXZiYXIuaHRtbCcsXG5cdFx0XHRyZXN0cmljdDogJ0EnXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRpcmVjdGl2ZTtcblx0fVxuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uc2lnbmluJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5zaWduaW4nKVxuICAgICAgICAuY29udHJvbGxlcignc2lnbkluQ3RybCcsIHNpZ25JbkN0cmwpO1xuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gc2lnbkluQ3RybCgpIHtcbi8vICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4vLyAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4vLyAgICAgICAgIHZtLmF2ZW5nZXJzID0gW107XG4vLyAgICAgICAgIHZtLnRpdGxlID0gJ0F2ZW5nZXJzJztcblxuLy8gICAgICAgICBhY3RpdmF0ZSgpO1xuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuLy8gLy8gICAgICAgICAgICBVc2luZyBhIHJlc29sdmVyIG9uIGFsbCByb3V0ZXMgb3IgZGF0YXNlcnZpY2UucmVhZHkgaW4gZXZlcnkgY29udHJvbGxlclxuLy8gLy8gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbZ2V0QXZlbmdlcnMoKV07XG4vLyAvLyAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5yZWFkeShwcm9taXNlcykudGhlbihmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgcmV0dXJuIGdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnQWN0aXZhdGVkIEF2ZW5nZXJzIFZpZXcnKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnMoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UuZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbi8vICAgICAgICAgICAgICAgICB2bS5hdmVuZ2VycyA9IGRhdGE7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHZtLmF2ZW5nZXJzO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhci5tb2R1bGUoJ3NtLnNjaGVkdWxlJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKXtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uc2NoZWR1bGUnKVxuXHRcdC5ydW4oYXBwUnVuKVxuXG5cdFx0ZnVuY3Rpb24gYXBwUnVuKHJvdXRlckhlbHBlcil7XG5cdFx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCl7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhdGU6ICdzY2hlZHVsZScsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHR1cmw6ICcvJyxcblx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdTY2hlZHVsZUNvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5odG1sJyxcblx0XHRcdFx0XHRcdHJlc29sdmU6IHtcblx0XHRcdFx0XHRcdFx0c2Vzc2lvbnM6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gc2hvdWxkIHJldHVybiBhbiBhcnJheSBvZiBzZXNzaW9ucyBmcm9tIHRoZSBldmVudCAodmlhIGZpcmViYXNlKVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9pZDogMjQyNDI0MjQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICdDb21tdW5pdHkgRGV2ZWxvcG1lbnQgMTAxJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2lkOiA3ODc4NzgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICdUZWNoIGZvciB0aGUgTmVpZ2hib3Job29kJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XTtcblx0XHR9O1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uc2NoZWR1bGUnKVxuXHRcdC5jb250cm9sbGVyKCdTY2hlZHVsZUNvbnRyb2xsZXInLCBTY2hlZHVsZUNvbnRyb2xsZXIpO1xuXG5cdFx0U2NoZWR1bGVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsJ3Nlc3Npb25zJ107XG5cblx0XHRmdW5jdGlvbiBTY2hlZHVsZUNvbnRyb2xsZXIgKCRzY29wZSwgc2Vzc2lvbnMpIHtcblx0XHRcdC8vIHZhciB2bSA9IHRoaXM7XG5cdFx0XHQvLyB2bS5zZXNzaW9ucyA9IHNlc3Npb25zO1xuXHRcdFx0JHNjb3BlLnNlc3Npb25zID0gc2Vzc2lvbnM7XG5cdFx0fVxuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgYW5ndWxhclxuICAgIFx0Lm1vZHVsZSgnc20uY29yZScsIFtdKVxuICAgIFx0LmNvbnN0YW50KCdGSVJFQkFTRV9VUkknLCAnaHR0cHM6Ly9sdW1pbm91cy1pbmZlcm5vLTY0MC5maXJlYmFzZWlvLmNvbS8nKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uY29yZScpXG4gICAgICAgIC5mYWN0b3J5KCdkYXRhc2VydmljZScsIGRhdGFzZXJ2aWNlKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIGRhdGFzZXJ2aWNlKCkge1xuICAgIC8vICAgICB2YXIgaXNQcmltZWQgPSBmYWxzZTtcbiAgICAvLyAgICAgdmFyIHByaW1lUHJvbWlzZTtcblxuICAgIC8vICAgICB2YXIgc2VydmljZSA9IHtcbiAgICAvLyAgICAgICAgIGdldEF2ZW5nZXJzQ2FzdDogZ2V0QXZlbmdlcnNDYXN0LFxuICAgIC8vICAgICAgICAgZ2V0QXZlbmdlckNvdW50OiBnZXRBdmVuZ2VyQ291bnQsXG4gICAgLy8gICAgICAgICBnZXRBdmVuZ2VyczogZ2V0QXZlbmdlcnMsXG4gICAgLy8gICAgICAgICByZWFkeTogcmVhZHlcbiAgICAvLyAgICAgfTtcblxuICAgIC8vICAgICByZXR1cm4gc2VydmljZTtcblxuICAgIC8vICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VycygpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvbWFhJylcbiAgICAvLyAgICAgICAgICAgICAudGhlbihnZXRBdmVuZ2Vyc0NvbXBsZXRlKVxuICAgIC8vICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGV4Y2VwdGlvbi5jYXRjaGVyKCdYSFIgRmFpbGVkIGZvciBnZXRBdmVuZ2VycycpKG1lc3NhZ2UpO1xuICAgIC8vICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvJyk7XG4gICAgLy8gICAgICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzQ29tcGxldGUoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gZGF0YS5kYXRhWzBdLmRhdGEucmVzdWx0cztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJDb3VudCgpIHtcbiAgICAvLyAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgLy8gICAgICAgICByZXR1cm4gZ2V0QXZlbmdlcnNDYXN0KClcbiAgICAvLyAgICAgICAgICAgICAudGhlbihnZXRBdmVuZ2Vyc0Nhc3RDb21wbGV0ZSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZXhjZXB0aW9uLmNhdGNoZXIoJ1hIUiBGYWlsZWQgZm9yIGdldEF2ZW5nZXJDb3VudCcpKTtcblxuICAgIC8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnNDYXN0Q29tcGxldGUgKGRhdGEpIHtcbiAgICAvLyAgICAgICAgICAgICBjb3VudCA9IGRhdGEubGVuZ3RoO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiAkcS53aGVuKGNvdW50KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzQ2FzdCgpIHtcbiAgICAvLyAgICAgICAgIHZhciBjYXN0ID0gW1xuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnUm9iZXJ0IERvd25leSBKci4nLCBjaGFyYWN0ZXI6ICdUb255IFN0YXJrIC8gSXJvbiBNYW4nfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0NocmlzIEhlbXN3b3J0aCcsIGNoYXJhY3RlcjogJ1Rob3InfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0NocmlzIEV2YW5zJywgY2hhcmFjdGVyOiAnU3RldmUgUm9nZXJzIC8gQ2FwdGFpbiBBbWVyaWNhJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdNYXJrIFJ1ZmZhbG8nLCBjaGFyYWN0ZXI6ICdCcnVjZSBCYW5uZXIgLyBUaGUgSHVsayd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnU2NhcmxldHQgSm9oYW5zc29uJywgY2hhcmFjdGVyOiAnTmF0YXNoYSBSb21hbm9mZiAvIEJsYWNrIFdpZG93J30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdKZXJlbXkgUmVubmVyJywgY2hhcmFjdGVyOiAnQ2xpbnQgQmFydG9uIC8gSGF3a2V5ZSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnR3d5bmV0aCBQYWx0cm93JywgY2hhcmFjdGVyOiAnUGVwcGVyIFBvdHRzJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdTYW11ZWwgTC4gSmFja3NvbicsIGNoYXJhY3RlcjogJ05pY2sgRnVyeSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnUGF1bCBCZXR0YW55JywgY2hhcmFjdGVyOiAnSmFydmlzJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdUb20gSGlkZGxlc3RvbicsIGNoYXJhY3RlcjogJ0xva2knfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0NsYXJrIEdyZWdnJywgY2hhcmFjdGVyOiAnQWdlbnQgUGhpbCBDb3Vsc29uJ31cbiAgICAvLyAgICAgICAgIF07XG4gICAgLy8gICAgICAgICByZXR1cm4gJHEud2hlbihjYXN0KTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIHByaW1lKCkge1xuICAgIC8vICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gb25seSBiZSBjYWxsZWQgb25jZS5cbiAgICAvLyAgICAgICAgIGlmIChwcmltZVByb21pc2UpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gcHJpbWVQcm9taXNlO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBwcmltZVByb21pc2UgPSAkcS53aGVuKHRydWUpLnRoZW4oc3VjY2Vzcyk7XG4gICAgLy8gICAgICAgICByZXR1cm4gcHJpbWVQcm9taXNlO1xuXG4gICAgLy8gICAgICAgICBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgIC8vICAgICAgICAgICAgIGlzUHJpbWVkID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICBsb2dnZXIuaW5mbygnUHJpbWVkIGRhdGEnKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIHJlYWR5KG5leHRQcm9taXNlcykge1xuICAgIC8vICAgICAgICAgdmFyIHJlYWR5UHJvbWlzZSA9IHByaW1lUHJvbWlzZSB8fCBwcmltZSgpO1xuXG4gICAgLy8gICAgICAgICByZXR1cm4gcmVhZHlQcm9taXNlXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiAkcS5hbGwobmV4dFByb21pc2VzKTsgfSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZXhjZXB0aW9uLmNhdGNoZXIoJ1wicmVhZHlcIiBmdW5jdGlvbiBmYWlsZWQnKSk7XG4gICAgLy8gICAgIH1cblxuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzbS5jaGF0JywgW10pO1xufSkoKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgYWxleGFuZGVya296b3Zza2kgb24gOS8yNC8xNS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyXG4gICAgLm1vZHVsZSgnc20uY2hhdCcpXG4gICAgLmRpcmVjdGl2ZSgnY2hhdE1vZHVsZScsIGNoYXRNb2R1bGUpO1xuXG5mdW5jdGlvbiBjaGF0TW9kdWxlKCl7XG5cblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgcmVzdHJpY3Q6J0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDonL2NsaWVudC9jb21wb25lbnRzL2NoYXQvY2hhdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2NoYXRDdHJsJ1xuICAgICAgICAvL2xpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCAgYXR0cil7XG4gICAgICAgIC8vICAgIGNvbnNvbGUuZGVidWcoc2NvcGUpO1xuICAgICAgICAvL1xuICAgICAgICAvL31cblxuICAgIH07XG5cblxufSIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLmNoYXQnKVxuICAgICAgICAuY29uc3RhbnQoJ0ZJUkVCQVNFX1VSSScsICdodHRwczovL2x1bWlub3VzLWluZmVybm8tNjQwLmZpcmViYXNlaW8uY29tLycpXG4gICAgICAgIC5jb250cm9sbGVyKCdjaGF0Q3RybCcsIGNoYXRDdHJsKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIGNoYXRDdHJsKCRzY29wZSwgJGZpcmViYXNlT2JqZWN0LCRmaXJlYmFzZUFycmF5LCBGSVJFQkFTRV9VUkkpIHtcblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgZmlyZWJhc2UgcmVmZXJlbmNlXG4gICAgICAgIHZhciBjaGF0UmVmID0gbmV3IEZpcmViYXNlIChGSVJFQkFTRV9VUkkgK1wiTWVzc2FnZXNcIik7XG4gICAgICAgIHZhciB1c2VyUmVmID0gbmV3IEZpcmViYXNlIChGSVJFQkFTRV9VUkkgK1wiVXNlcnNcIik7XG5cblxuICAgICAgICAkc2NvcGUudXNlciA9IDA7XG4gICAgICAgIC8vY3JlYXRlIGFub24gdXNlciB3aXRoIHVpZCBhbmQgbGltaXQgc2Vzc2lvbiB0byBicm93c2VyIG9wZW4gb25seS5cbiAgICAgICAgJHNjb3BlLmF1dGhBbm9uVXNlcj0gZnVuY3Rpb24odXNlcm5hbWUpe1xuICAgICAgICAgICAgY2hhdFJlZi5hdXRoQW5vbnltb3VzbHkoZnVuY3Rpb24oZXJyb3IsIGF1dGhEYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoZW50aWNhdGlvbiBGYWlsZWQhXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1c2VyUmVmLnB1c2goe2lkOmF1dGhEYXRhLnVpZCwgbmFtZTp1c2VybmFtZSwgdG9rZW46YXV0aERhdGEudG9rZW59KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dnZWQgaW4gYXM6XCIsIGF1dGhEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VyID0gYXV0aERhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcmVtZW1iZXI6IFwic2Vzc2lvbk9ubHlcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG5cblxuICAgICAgICAkc2NvcGUubWVzc2FnZXMgPSRmaXJlYmFzZUFycmF5KGNoYXRSZWYpO1xuXG4gICAgICAgIC8vYWRkIG1lc3NhZ2VzIHRvIHNjb3BlXG4gICAgICAgICRzY29wZS5hZGRNZXNzYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRzY29wZS5tZXNzYWdlcy4kYWRkKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiRzY29wZS5uZXdNZXNzYWdlVGV4dCxcbiAgICAgICAgICAgICAgICBpZDogJHNjb3BlLnVzZXIudWlkLFxuICAgICAgICAgICAgICAgIG5hbWU6ICRzY29wZS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICB0aW1lOkZpcmViYXNlLlNlcnZlclZhbHVlLlRJTUVTVEFNUFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuZm9ybWF0VGltZSA9IGZ1bmN0aW9uKHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdmFyIGRhdGUgPSAodGltZXN0YW1wKSA/IG5ldyBEYXRlKHRpbWVzdGFtcCkgOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpIHx8IDEyLFxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSAnJyArIGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgICAgIGFtcG0gPSAoZGF0ZS5nZXRIb3VycygpID49IDEyKSA/ICdwbScgOiAnYW0nO1xuXG4gICAgICAgICAgICBob3VycyA9IChob3VycyA+IDEyKSA/IGhvdXJzIC0gMTIgOiBob3VycztcbiAgICAgICAgICAgIG1pbnV0ZXMgPSAobWludXRlcy5sZW5ndGggPCAyKSA/ICcwJyArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgICAgICAgICAgcmV0dXJuICcnICsgaG91cnMgKyAnOicgKyBtaW51dGVzICsgYW1wbTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNoYXRSZWYub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwc2hvdCwgcHJldkNoaWxkS2V5KSB7XG4gICAgICAgICAgICB2YXIgbmV3UG9zdCA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICAgICAgJHNjb3BlLm5hbWUgPSBuZXdQb3N0Lm5hbWU7XG5cbiAgICAgICAgfSk7XG5cblxuLy8gICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cbi8vICAgICAgICAgdmFyIHZtID0gdGhpcztcbi8vICAgICAgICAgdm0uYXZlbmdlcnMgPSBbXTtcbi8vICAgICAgICAgdm0udGl0bGUgPSAnQXZlbmdlcnMnO1xuXG4vLyAgICAgICAgIGFjdGl2YXRlKCk7XG5cbi8vICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4vLyAvLyAgICAgICAgICAgIFVzaW5nIGEgcmVzb2x2ZXIgb24gYWxsIHJvdXRlcyBvciBkYXRhc2VydmljZS5yZWFkeSBpbiBldmVyeSBjb250cm9sbGVyXG4vLyAvLyAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtnZXRBdmVuZ2VycygpXTtcbi8vIC8vICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLnJlYWR5KHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICByZXR1cm4gZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdBY3RpdmF0ZWQgQXZlbmdlcnMgVmlldycpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VycygpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5nZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuLy8gICAgICAgICAgICAgICAgIHZtLmF2ZW5nZXJzID0gZGF0YTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdm0uYXZlbmdlcnM7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhci5tb2R1bGUoJ3NtLmFkbWluJyxbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpe1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5hZG1pbicpXG5cdFx0LnJ1bihhcHBSdW4pO1xuXG5cdFx0ZnVuY3Rpb24gYXBwUnVuKHJvdXRlckhlbHBlcil7XG5cdFx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCl7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhdGU6ICdhZG1pbicsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHR1cmw6ICcvYWRtaW4nLFxuXHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ0FkbWluQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2NsaWVudC9jb21wb25lbnRzL2FkbWluL2FkbWluLmh0bWwnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXG59KSgpOyIsIihmdW5jdGlvbigpe1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5hZG1pbicpXG5cdFx0LmNvbnRyb2xsZXIoJ0FkbWluQ29udHJvbGxlcicsIEFkbWluQ29udHJvbGxlcik7XG5cblx0XHRmdW5jdGlvbiBBZG1pbkNvbnRyb2xsZXIoJHNjb3BlLCAkZmlyZWJhc2VBcnJheSwgRklSRUJBU0VfVVJJKXtcblx0XHRcdHZhciBldmVudFJlZiA9IG5ldyBGaXJlYmFzZShGSVJFQkFTRV9VUkkgKyAnU2Vzc2lvbicpO1xuXHRcdFx0XG5cdFx0XHQkc2NvcGUuc2Vzc2lvbnMgPSAkZmlyZWJhc2VBcnJheShldmVudFJlZik7XG5cblx0XHRcdCRzY29wZS5zdWJtaXRTZXNzaW9uID0gZnVuY3Rpb24oc2Vzc2lvbil7XG5cdFx0XHRcdC8vIGV2ZW50UmVmLnB1c2goc2Vzc2lvbik7XG5cdFx0XHRcdCRzY29wZS5zZXNzaW9ucy5wdXNoKHNlc3Npb24pO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20nLCBbXG5cbiAgICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAgICdmaXJlYmFzZScsXG5cbiAgICAgICAgLypcbiAgICAgICAgICogT3JkZXIgaXMgbm90IGltcG9ydGFudC5cbiAgICAgICAgICogRXZlcnlib2R5IGhhcyBhY2Nlc3MgdG8gdGhlc2UuXG4gICAgICAgICAqIFdlIGNvdWxkIHBsYWNlIHRoZXNlIHVuZGVyIGV2ZXJ5IGZlYXR1cmUgYXJlYSxcbiAgICAgICAgICogYnV0IHRoaXMgaXMgZWFzaWVyIHRvIG1haW50YWluLlxuICAgICAgICAgKi8gXG4gICAgICAgICBcbiAgICAgICAgJ3NtLmNvcmUnLFxuICAgICAgICAnc20ucm91dGVyJyxcblxuICAgICAgICAvKlxuICAgICAgICAgKiBGZWF0dXJlIGFyZWFzXG4gICAgICAgICAqL1xuICAgICAgICAgXG4gICAgICAgICdzbS5hZG1pbicsXG4gICAgICAgICdzbS5jYycsXG4gICAgICAgICdzbS5jaGF0JyxcbiAgICAgICAgJ3NtLnNlc3Npb24nLFxuICAgICAgICAnc20uc2NoZWR1bGUnXG4gICAgXSk7XG5cbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9