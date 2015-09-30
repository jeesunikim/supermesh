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

    angular.module('sm.signup', []);
})();
(function(){
	'use strict';
	angular
	.module('sm.signup')
	.run(appRun)

	function appRun(routerHelper){
		routerHelper.configureStates(getStates());
	}

	function getStates(){

		return [
		{
			state: 'signup',
			config: {
				url: '/signup',
				controller:"signUpCtrl",
				templateUrl: 'client/components/signup/signup.html'
			}
		}
		]
	}
})();
(function() {
    'use strict';

    angular
        .module('sm.signup')
        .controller('signUpCtrl', signUpCtrl);

    signUpCtrl.$inject = ['$scope','$state', '$rootScope','$firebaseAuth', 'FIREBASE_URI'];

    function signUpCtrl($scope, $state,$rootScope, $firebaseAuth, FIREBASE_URI) {

        var ref = new Firebase(FIREBASE_URI +'Admin');
        var authObj = $firebaseAuth(ref);

        $scope.signUpUser = function (email, password) {

            authObj.$createUser({
                email: email,
                password: password
            }).then(function(userData) {
                console.log("User " + userData.uid + " created successfully!");

                return authObj.$authWithPassword({
                    email: email,
                    password: password
                });
            }).then(function(authData) {
                console.log("Logged in as:", authData.uid);
                $rootScope.authData = authData;
                $state.go('admin');
            }).catch(function(error) {
                console.error("Error: ", error);
                $scope.error =error;
                $scope.email ="";
                $scope.password ="";
                $state.go('signup');
            });
        }



        // now, redirect only not authenticated

        //var userInfo = authenticationSvc.getUserInfo();
        //
        //if(userInfo.authenticated === false) {
        //    e.preventDefault(); // stop current execution
        //    $state.go('login'); // go to login
        //}

    }
})();
(function () {
	'use strict';
	angular.module('sm.event', []);
})();
(function(){
	'use strict';
	angular
		.module('sm.event')
		.run(appRun)

	function appRun(routerHelper){
		routerHelper.configureStates(getStates());
	}

		function getStates(){
			return [
				{
					state: 'event',
					config: {
						url: '/event',
						controller: 'eventController',
						templateUrl: 'client/components/event/event.html'
					}
				}
			];
		};

		return [
		{
			state: 'signin',
			config: {
				url: '/',
				controller:"signInCtrl",
				templateUrl: 'client/components/signin/signin.html'
			}
		}
		]
	}
})();
(function() {
	'use strict';
	angular
		.module('sm.event')
		.controller('eventController', eventController);

		eventController.$inject = ['$scope', '$firebaseArray', 'FIREBASE_URI'];

		function eventController ($scope, $firebaseArray, FIREBASE_URI) {
			var eventRef = new Firebase(FIREBASE_URI + 'Session');
			$scope.event = $firebaseArray(eventRef);
			console.log($scope.event, "event for participants");
		}

    function signInCtrl($scope, $state,$rootScope, $firebaseAuth, FIREBASE_URI) {

        var ref = new Firebase(FIREBASE_URI +'Admin');
        var adminObj = $firebaseAuth(ref);

        $scope.authEmailUser = function (email, password) {

            adminObj.$authWithPassword({
                password: password,
                email: email
            }).then(function (authData) {
                console.log("Logged in as:", authData.uid);
                $rootScope.authData = authData;
                $state.go('admin');



            }).catch(function (error) {
                console.error("Authentication failed:", error);
                $scope.error =error;
                $scope.email ="";
                $scope.password ="";
                $state.go('signin');

            });
        }





        // now, redirect only not authenticated

        //var userInfo = authenticationSvc.getUserInfo();
        //
        //if(userInfo.authenticated === false) {
        //    e.preventDefault(); // stop current execution
        //    $state.go('login'); // go to login
        //}

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
            $scope.messages.$save(index);
        }
    }
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
        .factory('AdminFactory', AdminFactory);

    AdminFactory.$inject = ['Upload','FIREBASE_URI'];


    function AdminFactory(Upload){

        function uploadImg(file){
            console.log(file, "factory")
            return Upload.upload({
                url:"/api/upload/image",
                file:file
            })
        };

        return {
            uploadImg: uploadImg
        }

    }

})();
(function(){

	angular
		.module('sm.admin')
		.controller('AdminController', AdminController);

		AdminController.$inject = ['$scope','$rootScope','AdminFactory', '$firebaseObject','$firebaseArray','FIREBASE_URI'];

		function AdminController($scope, AdminFactory,$rootScope, $firebaseObject, $firebaseArray, FIREBASE_URI){
			var eventRef = new Firebase(FIREBASE_URI + 'Session');

            //instatiate session object and add to $scope
            $scope.session = {
                name:"",
                presenter:"",
                desc:"",
                time:"",
                imgUrl:""
            };


			$scope.sessions = $firebaseArray(eventRef);

            //var list = $firebaseArray(ref);
            //list.$add({ foo: "bar" }).then(function(ref) {
            //    var id = ref.key();
            //    console.log("added record with id " + id);
            //    list.$indexFor(id); // returns location in the array
            //});

            $scope.submitSession = function(session){

                console.log(session, "SESSION SUBMITTED TO FIREBASE")
				$scope.sessions.$add(session);
                $scope.session ={};
                $scope.upload ="";
			};

            //watch file for change, do stuff and trigger factory Func.
			$scope.$watch('file', function(file){
				if(file){
					$scope.loading = true;

					AdminFactory.uploadImg($scope.file).then(function(data){
						$scope.loading = false;
                        console.log(data, "data");
						$scope.upload = data;

                        //get path on callback from AWS
						var initial_path ="https://s3-us-west-2.amazonaws.com/supermesh/";
                        //this is necessary because of the way AWS formats spaces "+"
						$scope.session.imgUrl = initial_path + data.data.split(' ').join('+');

					});
				}
			})

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
        'ngFileUpload',

        /*
         * Feature areas
         */
         
        'sm.admin',
        'sm.cc',
        'sm.chat',
        'sm.session',
        'sm.event',
        'sm.signin'
    ]);

})();
(function() {
    'use strict';

    angular.module('sm.firebase',[])
    	.constant('FIREBASE_URI', 'https://luminous-inferno-640.firebaseio.com');

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5tb2R1bGUuanMiLCJzZXNzaW9uL3ZpZXcvc2Vzc2lvbi52aWV3LnJvdXRlcy5qcyIsInNlc3Npb24vdmlldy9zZXNzaW9uLnZpZXcuY29udHJvbGxlci5qcyIsInNlc3Npb24vdGlsZS9zZXNzaW9uLnRpbGUuZGlyZWN0aXZlLmpzIiwiY29tbW9uL2NjLm1vZHVsZS5qcyIsImNvbW1vbi9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsImNvcmUvcm91dGVyL3JvdXRlci5tb2R1bGUuanMiLCJjb3JlL3JvdXRlci9yb3V0ZXIucHJvdmlkZXIuanMiLCJzaWduaW4vc2lnbmluLm1vZHVsZS5qcyIsInNpZ25pbi9zaWduaW4ucm91dGVzLmpzIiwic2lnbmluL3NpZ25pbi5jb250cm9sbGVyLmpzIiwiZXZlbnQvZXZlbnQubW9kdWxlLmpzIiwiZXZlbnQvZXZlbnQucm91dGVzLmpzIiwiZXZlbnQvZXZlbnQuY29udHJvbGxlci5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJjb3JlL2RhdGFzZXJ2aWNlLmpzIiwiY29yZS9jb3JlLnJvdXRlLmpzIiwiY2hhdC9jaGF0Lm1vZHVsZS5qcyIsImNoYXQvY2hhdC5kaXIuanMiLCJjaGF0L2NoYXQuY3RybC5qcyIsImFkbWluL2FkbWluLm1vZHVsZS5qcyIsImFkbWluL2FkbWluLnJvdXRlcy5qcyIsImFkbWluL2FkbWluLmNvbnRyb2xsZXIuanMiLCJzbS5tb2R1bGUuanMiLCJzbS5maXJlYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdzbS5zZXNzaW9uJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKXtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uc2Vzc2lvbicpXG5cdFx0LnJ1bihhcHBSdW4pXG5cblx0XHRmdW5jdGlvbiBhcHBSdW4ocm91dGVySGVscGVyKXtcblx0XHRcdHJvdXRlckhlbHBlci5jb25maWd1cmVTdGF0ZXMoZ2V0U3RhdGVzKCkpO1xuXHRcdH1cblxuXHRcdC8vIGdldFN0YXRlcy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlcicsICckc3RhdGVQYXJhbXMnXTtcblxuXHRcdGZ1bmN0aW9uIGdldFN0YXRlcygpe1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXRlOiAnc2Vzc2lvbicsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHR1cmw6ICcvc2Vzc2lvbi86aWQnLFxuXHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ1Nlc3Npb25Db250cm9sbGVyJyxcblx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2Vzc2lvbi92aWV3L3Nlc3Npb24udmlldy5odG1sJyxcblx0XHRcdFx0XHRcdHJlc29sdmU6IHtcblx0XHRcdFx0XHRcdFx0c2Vzc2lvbklEOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJHN0YXRlUGFyYW1zLmlkO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdO1xuXHRcdH07XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5zZXNzaW9uJylcblx0XHQuY29udHJvbGxlcignU2Vzc2lvbkNvbnRyb2xsZXInLCBTZXNzaW9uQ29udHJvbGxlcik7XG5cblx0XHRTZXNzaW9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnc2Vzc2lvbklEJywgJyRmaXJlYmFzZU9iamVjdCcsICdGSVJFQkFTRV9VUkknXTtcblxuXHRcdGZ1bmN0aW9uIFNlc3Npb25Db250cm9sbGVyKCRzY29wZSwgc2Vzc2lvbklELCAkZmlyZWJhc2VPYmplY3QsIEZJUkVCQVNFX1VSSSkge1xuXHRcdFx0JHNjb3BlLnNlc3Npb25JRCA9IHNlc3Npb25JRDtcblx0XHRcdHZhciBzZXNzaW9uUmVmID0gbmV3IEZpcmViYXNlKEZJUkVCQVNFX1VSSSArICdTZXNzaW9uJyArICcvJyArIHNlc3Npb25JRCk7XG5cdFx0XHQkc2NvcGUuc2Vzc2lvbiA9ICRmaXJlYmFzZU9iamVjdChzZXNzaW9uUmVmKTtcblx0XHR9XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCdcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ3NtLnNlc3Npb24nKVxuXHRcdC5kaXJlY3RpdmUoJ3Nlc3Npb25UaWxlJywgc2Vzc2lvblRpbGUpO1xuXG5cdFx0ZnVuY3Rpb24gc2Vzc2lvblRpbGUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRyZXN0cmljdDogJ0EnLFxuXHRcdFx0XHRzY29wZToge1xuXHRcdFx0XHRcdCdzZXNzaW9uJzogJz0nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2Vzc2lvbi90aWxlL3Nlc3Npb24udGlsZS5odG1sJ1xuXHRcdFx0fVxuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ3NtLmNjJyxbXSk7XG5cdFxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5jYycpXG5cdFx0LmRpcmVjdGl2ZSgnbmF2QmFyJywgbmF2QmFyKTtcblxuXHRmdW5jdGlvbiBuYXZCYXIoKSB7XG5cblx0XHR2YXIgZGlyZWN0aXZlID0ge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL25hdmJhci5odG1sJyxcblx0XHRcdHJlc3RyaWN0OiAnQSdcblx0XHR9XG5cblx0XHRyZXR1cm4gZGlyZWN0aXZlO1xuXHR9XG5cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyLm1vZHVsZSgnc20ucm91dGVyJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20ucm91dGVyJylcbiAgICAgICAgLnByb3ZpZGVyKCdyb3V0ZXJIZWxwZXInLCByb3V0ZXJIZWxwZXJQcm92aWRlcik7XG5cbiAgICAgICAgcm91dGVySGVscGVyUHJvdmlkZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uUHJvdmlkZXInLCAnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ107XG5cbiAgICAgICAgZnVuY3Rpb24gcm91dGVySGVscGVyUHJvdmlkZXIoJGxvY2F0aW9uUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIC8qIGpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICAgICAgdGhpcy4kZ2V0ID0gUm91dGVySGVscGVyO1xuXG4gICAgICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cbiAgICAgICAgICAgIFJvdXRlckhlbHBlci4kaW5qZWN0ID0gWyckc3RhdGUnXTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gUm91dGVySGVscGVyKCRzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNPdGhlcndpc2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVTdGF0ZXM6IGNvbmZpZ3VyZVN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgZ2V0U3RhdGVzOiBnZXRTdGF0ZXNcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVN0YXRlcyhzdGF0ZXMsIG90aGVyd2lzZVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmZvckVhY2goZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKHN0YXRlLnN0YXRlLCBzdGF0ZS5jb25maWcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyd2lzZVBhdGggJiYgIWhhc090aGVyd2lzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzT3RoZXJ3aXNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2Uob3RoZXJ3aXNlUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRTdGF0ZXMoKSB7IHJldHVybiAkc3RhdGUuZ2V0KCk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uc2lnbmluJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKXtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdC5tb2R1bGUoJ3NtLnNpZ25pbicpXG5cdC5ydW4oYXBwUnVuKVxuXG5cdGZ1bmN0aW9uIGFwcFJ1bihyb3V0ZXJIZWxwZXIpe1xuXHRcdHJvdXRlckhlbHBlci5jb25maWd1cmVTdGF0ZXMoZ2V0U3RhdGVzKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCl7XG5cdFx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRzdGF0ZTogJ3NpZ25pbicsXG5cdFx0XHRjb25maWc6IHtcblx0XHRcdFx0dXJsOiAnLycsXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5odG1sJ1xuXHRcdFx0fVxuXHRcdH1cblx0XHRdXG5cdH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uc2lnbmluJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ3NpZ25JbkN0cmwnLCBzaWduSW5DdHJsKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIHNpZ25JbkN0cmwoKSB7XG4vLyAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuLy8gICAgICAgICB2YXIgdm0gPSB0aGlzO1xuLy8gICAgICAgICB2bS5hdmVuZ2VycyA9IFtdO1xuLy8gICAgICAgICB2bS50aXRsZSA9ICdBdmVuZ2Vycyc7XG5cbi8vICAgICAgICAgYWN0aXZhdGUoKTtcblxuLy8gICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbi8vIC8vICAgICAgICAgICAgVXNpbmcgYSByZXNvbHZlciBvbiBhbGwgcm91dGVzIG9yIGRhdGFzZXJ2aWNlLnJlYWR5IGluIGV2ZXJ5IGNvbnRyb2xsZXJcbi8vIC8vICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW2dldEF2ZW5nZXJzKCldO1xuLy8gLy8gICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UucmVhZHkocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgIHJldHVybiBnZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0FjdGl2YXRlZCBBdmVuZ2VycyBWaWV3Jyk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLmdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgICAgICAgICAgdm0uYXZlbmdlcnMgPSBkYXRhO1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB2bS5hdmVuZ2Vycztcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXIubW9kdWxlKCdzbS5ldmVudCcsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ3NtLmV2ZW50Jylcblx0XHQucnVuKGFwcFJ1bilcblxuXHRcdGZ1bmN0aW9uIGFwcFJ1bihyb3V0ZXJIZWxwZXIpe1xuXHRcdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSk7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGdldFN0YXRlcygpe1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXRlOiAnZXZlbnQnLFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0dXJsOiAnL2V2ZW50Jyxcblx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdldmVudENvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9ldmVudC9ldmVudC5odG1sJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XTtcblx0XHR9O1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uZXZlbnQnKVxuXHRcdC5jb250cm9sbGVyKCdldmVudENvbnRyb2xsZXInLCBldmVudENvbnRyb2xsZXIpO1xuXG5cdFx0ZXZlbnRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZmlyZWJhc2VBcnJheScsICdGSVJFQkFTRV9VUkknXTtcblxuXHRcdGZ1bmN0aW9uIGV2ZW50Q29udHJvbGxlciAoJHNjb3BlLCAkZmlyZWJhc2VBcnJheSwgRklSRUJBU0VfVVJJKSB7XG5cdFx0XHR2YXIgZXZlbnRSZWYgPSBuZXcgRmlyZWJhc2UoRklSRUJBU0VfVVJJICsgJ1Nlc3Npb24nKTtcblx0XHRcdCRzY29wZS5ldmVudCA9ICRmaXJlYmFzZUFycmF5KGV2ZW50UmVmKTtcblx0XHRcdGNvbnNvbGUubG9nKCRzY29wZS5ldmVudCwgXCJldmVudCBmb3IgcGFydGljaXBhbnRzXCIpO1xuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgIFx0Lm1vZHVsZSgnc20uY29yZScsIFtdKVxuICAgIFx0LmNvbnN0YW50KCdGSVJFQkFTRV9VUkknLCAnaHR0cHM6Ly9sdW1pbm91cy1pbmZlcm5vLTY0MC5maXJlYmFzZWlvLmNvbS8nKTtcblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5jb3JlJylcbiAgICAgICAgLmZhY3RvcnkoJ2RhdGFzZXJ2aWNlJywgZGF0YXNlcnZpY2UpO1xuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gZGF0YXNlcnZpY2UoKSB7XG4gICAgLy8gICAgIHZhciBpc1ByaW1lZCA9IGZhbHNlO1xuICAgIC8vICAgICB2YXIgcHJpbWVQcm9taXNlO1xuXG4gICAgLy8gICAgIHZhciBzZXJ2aWNlID0ge1xuICAgIC8vICAgICAgICAgZ2V0QXZlbmdlcnNDYXN0OiBnZXRBdmVuZ2Vyc0Nhc3QsXG4gICAgLy8gICAgICAgICBnZXRBdmVuZ2VyQ291bnQ6IGdldEF2ZW5nZXJDb3VudCxcbiAgICAvLyAgICAgICAgIGdldEF2ZW5nZXJzOiBnZXRBdmVuZ2VycyxcbiAgICAvLyAgICAgICAgIHJlYWR5OiByZWFkeVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9tYWEnKVxuICAgIC8vICAgICAgICAgICAgIC50aGVuKGdldEF2ZW5nZXJzQ29tcGxldGUpXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZXhjZXB0aW9uLmNhdGNoZXIoJ1hIUiBGYWlsZWQgZm9yIGdldEF2ZW5nZXJzJykobWVzc2FnZSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwoJy8nKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnNDb21wbGV0ZShkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBkYXRhLmRhdGFbMF0uZGF0YS5yZXN1bHRzO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlckNvdW50KCkge1xuICAgIC8vICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAvLyAgICAgICAgIHJldHVybiBnZXRBdmVuZ2Vyc0Nhc3QoKVxuICAgIC8vICAgICAgICAgICAgIC50aGVuKGdldEF2ZW5nZXJzQ2FzdENvbXBsZXRlKVxuICAgIC8vICAgICAgICAgICAgIC5jYXRjaChleGNlcHRpb24uY2F0Y2hlcignWEhSIEZhaWxlZCBmb3IgZ2V0QXZlbmdlckNvdW50JykpO1xuXG4gICAgLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2Vyc0Nhc3RDb21wbGV0ZSAoZGF0YSkge1xuICAgIC8vICAgICAgICAgICAgIGNvdW50ID0gZGF0YS5sZW5ndGg7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuICRxLndoZW4oY291bnQpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnNDYXN0KCkge1xuICAgIC8vICAgICAgICAgdmFyIGNhc3QgPSBbXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdSb2JlcnQgRG93bmV5IEpyLicsIGNoYXJhY3RlcjogJ1RvbnkgU3RhcmsgLyBJcm9uIE1hbid9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnQ2hyaXMgSGVtc3dvcnRoJywgY2hhcmFjdGVyOiAnVGhvcid9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnQ2hyaXMgRXZhbnMnLCBjaGFyYWN0ZXI6ICdTdGV2ZSBSb2dlcnMgLyBDYXB0YWluIEFtZXJpY2EnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ01hcmsgUnVmZmFsbycsIGNoYXJhY3RlcjogJ0JydWNlIEJhbm5lciAvIFRoZSBIdWxrJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdTY2FybGV0dCBKb2hhbnNzb24nLCBjaGFyYWN0ZXI6ICdOYXRhc2hhIFJvbWFub2ZmIC8gQmxhY2sgV2lkb3cnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0plcmVteSBSZW5uZXInLCBjaGFyYWN0ZXI6ICdDbGludCBCYXJ0b24gLyBIYXdrZXllJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdHd3luZXRoIFBhbHRyb3cnLCBjaGFyYWN0ZXI6ICdQZXBwZXIgUG90dHMnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1NhbXVlbCBMLiBKYWNrc29uJywgY2hhcmFjdGVyOiAnTmljayBGdXJ5J30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdQYXVsIEJldHRhbnknLCBjaGFyYWN0ZXI6ICdKYXJ2aXMnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1RvbSBIaWRkbGVzdG9uJywgY2hhcmFjdGVyOiAnTG9raSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnQ2xhcmsgR3JlZ2cnLCBjaGFyYWN0ZXI6ICdBZ2VudCBQaGlsIENvdWxzb24nfVxuICAgIC8vICAgICAgICAgXTtcbiAgICAvLyAgICAgICAgIHJldHVybiAkcS53aGVuKGNhc3QpO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gcHJpbWUoKSB7XG4gICAgLy8gICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBvbmx5IGJlIGNhbGxlZCBvbmNlLlxuICAgIC8vICAgICAgICAgaWYgKHByaW1lUHJvbWlzZSkge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBwcmltZVByb21pc2U7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIHByaW1lUHJvbWlzZSA9ICRxLndoZW4odHJ1ZSkudGhlbihzdWNjZXNzKTtcbiAgICAvLyAgICAgICAgIHJldHVybiBwcmltZVByb21pc2U7XG5cbiAgICAvLyAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgLy8gICAgICAgICAgICAgaXNQcmltZWQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdQcmltZWQgZGF0YScpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gcmVhZHkobmV4dFByb21pc2VzKSB7XG4gICAgLy8gICAgICAgICB2YXIgcmVhZHlQcm9taXNlID0gcHJpbWVQcm9taXNlIHx8IHByaW1lKCk7XG5cbiAgICAvLyAgICAgICAgIHJldHVybiByZWFkeVByb21pc2VcbiAgICAvLyAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuICRxLmFsbChuZXh0UHJvbWlzZXMpOyB9KVxuICAgIC8vICAgICAgICAgICAgIC5jYXRjaChleGNlcHRpb24uY2F0Y2hlcignXCJyZWFkeVwiIGZ1bmN0aW9uIGZhaWxlZCcpKTtcbiAgICAvLyAgICAgfVxuXG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5jb3JlJylcbiAgICAgICAgLnJ1bihhcHBSdW4pO1xuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gYXBwUnVuKHJvdXRlckhlbHBlcikge1xuICAgICAgICB2YXIgb3RoZXJ3aXNlID0gJy80MDQnO1xuICAgICAgICByb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpLCBvdGhlcndpc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogJzQwNCcsXG4gICAgICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy80MDQnLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NsaWVudC9jb21wb25lbnRzL2NvcmUvNDA0Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJzQwNCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLmNoYXQnLCBbXSk7XG59KSgpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBhbGV4YW5kZXJrb3pvdnNraSBvbiA5LzI0LzE1LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXJcbiAgICAubW9kdWxlKCdzbS5jaGF0JylcbiAgICAuZGlyZWN0aXZlKCdjaGF0TW9kdWxlJywgY2hhdE1vZHVsZSk7XG5cbmZ1bmN0aW9uIGNoYXRNb2R1bGUoKXtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6J0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDonL2NsaWVudC9jb21wb25lbnRzL2NoYXQvY2hhdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2NoYXRDdHJsJ1xuICAgICAgICAvL2xpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCAgYXR0cil7XG4gICAgICAgIC8vICAgIGNvbnNvbGUuZGVidWcoc2NvcGUpO1xuICAgICAgICAvL1xuICAgICAgICAvL31cblxuICAgIH07XG5cblxufSIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc20uY2hhdCcpXG4gICAgLmNvbnRyb2xsZXIoJ2NoYXRDdHJsJywgY2hhdEN0cmwpO1xuXG4gICAgY2hhdEN0cmwuJGluamVjdCA9IFsnJHNjb3BlJywgJyRmaXJlYmFzZU9iamVjdCcsJyRmaXJlYmFzZUFycmF5JywgJ0ZJUkVCQVNFX1VSSSddXG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBjaGF0Q3RybCgkc2NvcGUsICRmaXJlYmFzZU9iamVjdCwkZmlyZWJhc2VBcnJheSwgRklSRUJBU0VfVVJJKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGZpcmViYXNlIHJlZmVyZW5jZVxuICAgICAgICB2YXIgY2hhdFJlZiA9IG5ldyBGaXJlYmFzZSAoRklSRUJBU0VfVVJJICsgJ1Nlc3Npb24nICsgJy8nICsgJHNjb3BlLnNlc3Npb25JRCArICcvJyArICdNZXNzYWdlcycpO1xuICAgICAgICB2YXIgdXNlclJlZiA9IG5ldyBGaXJlYmFzZSAoRklSRUJBU0VfVVJJICsgJ1Nlc3Npb24nICsgJy8nICsgJHNjb3BlLnNlc3Npb25JRCArICcvJyArICdVc2VycycpO1xuXG4gICAgICAgICRzY29wZS51c2VyID0gMDtcbiAgICAgICAgLy9jcmVhdGUgYW5vbiB1c2VyIHdpdGggdWlkIGFuZCBsaW1pdCBzZXNzaW9uIHRvIGJyb3dzZXIgb3BlbiBvbmx5LlxuICAgICAgICAkc2NvcGUuYXV0aEFub25Vc2VyPSBmdW5jdGlvbih1c2VybmFtZSl7XG4gICAgICAgICAgICBjaGF0UmVmLmF1dGhBbm9ueW1vdXNseShmdW5jdGlvbihlcnJvciwgYXV0aERhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGhlbnRpY2F0aW9uIEZhaWxlZCFcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICB1c2VyUmVmLnB1c2goe2lkOmF1dGhEYXRhLnVpZCwgbmFtZTp1c2VybmFtZSwgdG9rZW46YXV0aERhdGEudG9rZW59KTtcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2dlZCBpbiBhczpcIiwgYXV0aERhdGEpO1xuICAgICAgICAgICAgICAgICAgICRzY29wZS5lcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXNlciA9IGF1dGhEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVtZW1iZXI6IFwic2Vzc2lvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgJHNjb3BlLm1lc3NhZ2VzID0gJGZpcmViYXNlQXJyYXkoY2hhdFJlZik7XG5cbiAgICAkc2NvcGUuYWRkTWVzc2FnZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICRzY29wZS5tZXNzYWdlcy4kYWRkKHtcbiAgICAgICAgICAgIHRleHQ6JHNjb3BlLm5ld01lc3NhZ2VUZXh0LFxuICAgICAgICAgICAgaWQ6ICRzY29wZS51c2VyLnVpZCxcbiAgICAgICAgICAgIG5hbWU6ICRzY29wZS51c2VybmFtZSxcbiAgICAgICAgICAgIHZvdGVzOiB7fSxcbiAgICAgICAgICAgIHRpbWU6RmlyZWJhc2UuU2VydmVyVmFsdWUuVElNRVNUQU1QXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL2Zvcm1hdCBUaW1lIGZyb20gVU5JWCB0byBodW1hbiByZWFkYWJsZVxuICAgICRzY29wZS5mb3JtYXRUaW1lID0gZnVuY3Rpb24odGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBkYXRlID0gKHRpbWVzdGFtcCkgPyBuZXcgRGF0ZSh0aW1lc3RhbXApIDogbmV3IERhdGUoKSxcbiAgICAgICAgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgfHwgMTIsXG4gICAgICAgIG1pbnV0ZXMgPSAnJyArIGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICBhbXBtID0gKGRhdGUuZ2V0SG91cnMoKSA+PSAxMikgPyAncG0nIDogJ2FtJztcblxuICAgICAgICBob3VycyA9IChob3VycyA+IDEyKSA/IGhvdXJzIC0gMTIgOiBob3VycztcbiAgICAgICAgbWludXRlcyA9IChtaW51dGVzLmxlbmd0aCA8IDIpID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgICAgIHJldHVybiAnJyArIGhvdXJzICsgJzonICsgbWludXRlcyArIGFtcG07XG4gICAgfTtcblxuICAgIC8vbGlzdGVuIGZvciBjaGFuZ2VzIHRvIG1vZGVsIGFuZCBwdWxsIHVzZXIgbmFtZVxuICAgIGNoYXRSZWYub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwc2hvdCwgcHJldkNoaWxkS2V5KSB7XG4gICAgICAgIHZhciBuZXdNZXNzYWdlID0gc25hcHNob3QudmFsKCk7XG4gICAgICAgICRzY29wZS5uYW1lID0gbmV3TWVzc2FnZS5uYW1lO1xuICAgIH0pO1xuXG4gICAgLy9VcHZvdGUgZnVuY3Rpb25cbiAgICAkc2NvcGUuZXJyb3I9IGZhbHNlO1xuICAgICRzY29wZS52b3RlZCA9IGZhbHNlO1xuXG4gICAgJHNjb3BlLnVwVm90ZSA9IGZ1bmN0aW9uKGluZGV4LCBtZXNzYWdlKXtcbiAgICAgICAgaWYoISRzY29wZS51c2VyKXtcbiAgICAgICAgICAgICRzY29wZS5lcnJvciA9dHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCRzY29wZS51c2VyLnVpZCwgXCJVSURcIik7XG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2Uudm90ZXMpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnZvdGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlLnZvdGVzWyRzY29wZS51c2VyLmF1dGgudWlkXSk7XG4gICAgICAgICAgICBtZXNzYWdlLnZvdGVzWyRzY29wZS51c2VyLmF1dGgudWlkXSA9ICEoJHNjb3BlLnVzZXIuYXV0aC51aWQgaW4gbWVzc2FnZS52b3RlcykgPyAwIDogbWVzc2FnZS52b3Rlc1skc2NvcGUudXNlci5hdXRoLnVpZF0gKyAxO1xuICAgICAgICAgICAgbWVzc2FnZS52b3RlY291bnQgPSBPYmplY3Qua2V5cyhtZXNzYWdlLnZvdGVzKS5sZW5ndGg7XG4gICAgICAgICAgICAkc2NvcGUubWVzc2FnZXMuJHNhdmUoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhci5tb2R1bGUoJ3NtLmFkbWluJyxbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpe1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5hZG1pbicpXG5cdFx0LnJ1bihhcHBSdW4pO1xuXG5cdFx0ZnVuY3Rpb24gYXBwUnVuKHJvdXRlckhlbHBlcil7XG5cdFx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCl7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhdGU6ICdhZG1pbicsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHR1cmw6ICcvYWRtaW4nLFxuXHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ0FkbWluQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2NsaWVudC9jb21wb25lbnRzL2FkbWluL2FkbWluLmh0bWwnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXG59KSgpOyIsIihmdW5jdGlvbigpe1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5hZG1pbicpXG5cdFx0LmNvbnRyb2xsZXIoJ0FkbWluQ29udHJvbGxlcicsIEFkbWluQ29udHJvbGxlcik7XG5cblx0XHRBZG1pbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRmaXJlYmFzZUFycmF5JywgJ0ZJUkVCQVNFX1VSSSddO1xuXG5cdFx0ZnVuY3Rpb24gQWRtaW5Db250cm9sbGVyKCRzY29wZSwgJGZpcmViYXNlQXJyYXksIEZJUkVCQVNFX1VSSSl7XG5cdFx0XHR2YXIgZXZlbnRSZWYgPSBuZXcgRmlyZWJhc2UoRklSRUJBU0VfVVJJICsgJ1Nlc3Npb24nKTtcblx0XHRcdFxuXHRcdFx0JHNjb3BlLnNlc3Npb25zID0gJGZpcmViYXNlQXJyYXkoZXZlbnRSZWYpO1xuXG5cdFx0XHQkc2NvcGUuc3VibWl0U2Vzc2lvbiA9IGZ1bmN0aW9uKHNlc3Npb24pe1xuXHRcdFx0XHQvLyBldmVudFJlZi5wdXNoKHNlc3Npb24pO1xuXHRcdFx0XHQkc2NvcGUuc2Vzc2lvbnMucHVzaChzZXNzaW9uKTtcblx0XHRcdH1cblxuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtJywgW1xuXG4gICAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgICAnZmlyZWJhc2UnLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIE9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4gICAgICAgICAqIEV2ZXJ5Ym9keSBoYXMgYWNjZXNzIHRvIHRoZXNlLlxuICAgICAgICAgKiBXZSBjb3VsZCBwbGFjZSB0aGVzZSB1bmRlciBldmVyeSBmZWF0dXJlIGFyZWEsXG4gICAgICAgICAqIGJ1dCB0aGlzIGlzIGVhc2llciB0byBtYWludGFpbi5cbiAgICAgICAgICovIFxuICAgICAgICAgXG4gICAgICAgICdzbS5jb3JlJyxcbiAgICAgICAgJ3NtLnJvdXRlcicsXG5cbiAgICAgICAgLypcbiAgICAgICAgICogRmVhdHVyZSBhcmVhc1xuICAgICAgICAgKi9cbiAgICAgICAgIFxuICAgICAgICAnc20uYWRtaW4nLFxuICAgICAgICAnc20uY2MnLFxuICAgICAgICAnc20uY2hhdCcsXG4gICAgICAgICdzbS5zZXNzaW9uJyxcbiAgICAgICAgJ3NtLmV2ZW50JyxcbiAgICAgICAgJ3NtLnNpZ25pbidcbiAgICBdKTtcblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLmZpcmViYXNlJyxbXSlcbiAgICBcdC5jb25zdGFudCgnRklSRUJBU0VfVVJJJywgJ2h0dHBzOi8vbHVtaW5vdXMtaW5mZXJuby02NDAuZmlyZWJhc2Vpby5jb20nKTtcblxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=