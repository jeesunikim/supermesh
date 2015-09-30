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
        .module('sm.signin')
        .controller('signInCtrl', signInCtrl);

    signInCtrl.$inject = ['$scope','$state', '$rootScope', '$firebaseAuth', 'FIREBASE_URI'];

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
        'sm.sessions',
        'sm.signin',
        'sm.signup'
    ]);

})();
(function() {
    'use strict';

    angular.module('sm.firebase',[])
    	.constant('FIREBASE_URI', 'https://luminous-inferno-640.firebaseio.com');

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5tb2R1bGUuanMiLCJzZXNzaW9uL3ZpZXcvc2Vzc2lvbi52aWV3LnJvdXRlcy5qcyIsInNlc3Npb24vdmlldy9zZXNzaW9uLnZpZXcuY29udHJvbGxlci5qcyIsInNlc3Npb24vdGlsZS9zZXNzaW9uLnRpbGUuZGlyZWN0aXZlLmpzIiwiY29yZS9yb3V0ZXIvcm91dGVyLm1vZHVsZS5qcyIsImNvcmUvcm91dGVyL3JvdXRlci5wcm92aWRlci5qcyIsImNvbW1vbi9jYy5tb2R1bGUuanMiLCJjb21tb24vbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJzaWdudXAvc2lnbnVwLm1vZHVsZS5qcyIsInNpZ251cC9zaWdudXAucm91dGVzLmpzIiwic2lnbnVwL3NpZ251cC5jb250cm9sbGVyLmpzIiwic2lnbmluL3NpZ25pbi5tb2R1bGUuanMiLCJzaWduaW4vc2lnbmluLnJvdXRlcy5qcyIsInNpZ25pbi9zaWduaW4uY29udHJvbGxlci5qcyIsInNlc3Npb25zL3Nlc3Npb25zLm1vZHVsZS5qcyIsInNlc3Npb25zL3Nlc3Npb25zLnJvdXRlcy5qcyIsInNlc3Npb25zL3Nlc3Npb25zLmNvbnRyb2xsZXIuanMiLCJjb3JlL2NvcmUubW9kdWxlLmpzIiwiY29yZS9kYXRhc2VydmljZS5qcyIsImNvcmUvY29yZS5yb3V0ZS5qcyIsImNoYXQvY2hhdC5tb2R1bGUuanMiLCJjaGF0L2NoYXQuZGlyLmpzIiwiY2hhdC9jaGF0LmN0cmwuanMiLCJhZG1pbi9hZG1pbi5tb2R1bGUuanMiLCJhZG1pbi9hZG1pbi5yb3V0ZXMuanMiLCJhZG1pbi9hZG1pbi5mYWN0b3J5LmpzIiwiYWRtaW4vYWRtaW4uY29udHJvbGxlci5qcyIsInNtLm1vZHVsZS5qcyIsInNtLmZpcmViYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLnNlc3Npb24nLCBbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpe1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5zZXNzaW9uJylcblx0XHQucnVuKGFwcFJ1bilcblxuXHRcdGZ1bmN0aW9uIGFwcFJ1bihyb3V0ZXJIZWxwZXIpe1xuXHRcdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2V0U3RhdGVzLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyRzdGF0ZVBhcmFtcyddO1xuXG5cdFx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCl7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhdGU6ICdzZXNzaW9uJyxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHVybDogJy9zZXNzaW9uLzppZCcsXG5cdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnU2Vzc2lvbkNvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9zZXNzaW9uL3ZpZXcvc2Vzc2lvbi52aWV3Lmh0bWwnLFxuXHRcdFx0XHRcdFx0cmVzb2x2ZToge1xuXHRcdFx0XHRcdFx0XHRzZXNzaW9uSUQ6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAkc3RhdGVQYXJhbXMuaWQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdF07XG5cdFx0fTtcblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ3NtLnNlc3Npb24nKVxuXHRcdC5jb250cm9sbGVyKCdTZXNzaW9uQ29udHJvbGxlcicsIFNlc3Npb25Db250cm9sbGVyKTtcblxuXHRcdFNlc3Npb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICdzZXNzaW9uSUQnLCAnJGZpcmViYXNlT2JqZWN0JywgJ0ZJUkVCQVNFX1VSSSddO1xuXG5cdFx0ZnVuY3Rpb24gU2Vzc2lvbkNvbnRyb2xsZXIoJHNjb3BlLCBzZXNzaW9uSUQsICRmaXJlYmFzZU9iamVjdCwgRklSRUJBU0VfVVJJKSB7XG5cdFx0XHQkc2NvcGUuc2Vzc2lvbklEID0gc2Vzc2lvbklEO1xuXHRcdFx0dmFyIHNlc3Npb25SZWYgPSBuZXcgRmlyZWJhc2UoRklSRUJBU0VfVVJJICsgJ1Nlc3Npb24nICsgJy8nICsgc2Vzc2lvbklEKTtcblx0XHRcdCRzY29wZS5zZXNzaW9uID0gJGZpcmViYXNlT2JqZWN0KHNlc3Npb25SZWYpO1xuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0J1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uc2Vzc2lvbicpXG5cdFx0LmRpcmVjdGl2ZSgnc2Vzc2lvblRpbGUnLCBzZXNzaW9uVGlsZSk7XG5cblx0XHRmdW5jdGlvbiBzZXNzaW9uVGlsZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHJlc3RyaWN0OiAnQScsXG5cdFx0XHRcdHNjb3BlOiB7XG5cdFx0XHRcdFx0J3Nlc3Npb24nOiAnPSdcblx0XHRcdFx0fSxcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9zZXNzaW9uL3RpbGUvc2Vzc2lvbi50aWxlLmh0bWwnXG5cdFx0XHR9XG5cdFx0fVxuXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhci5tb2R1bGUoJ3NtLnJvdXRlcicsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLnJvdXRlcicpXG4gICAgICAgIC5wcm92aWRlcigncm91dGVySGVscGVyJywgcm91dGVySGVscGVyUHJvdmlkZXIpO1xuXG4gICAgICAgIHJvdXRlckhlbHBlclByb3ZpZGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvblByb3ZpZGVyJywgJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJvdXRlckhlbHBlclByb3ZpZGVyKCRsb2NhdGlvblByb3ZpZGVyLCAkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgICAgICAgIHRoaXMuJGdldCA9IFJvdXRlckhlbHBlcjtcblxuICAgICAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXG4gICAgICAgICAgICBSb3V0ZXJIZWxwZXIuJGluamVjdCA9IFsnJHN0YXRlJ107XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIFJvdXRlckhlbHBlcigkc3RhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzT3RoZXJ3aXNlID0gZmFsc2U7XG5cblxuXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZVN0YXRlczogY29uZmlndXJlU3RhdGVzLFxuICAgICAgICAgICAgICAgICAgICBnZXRTdGF0ZXM6IGdldFN0YXRlc1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcblxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY29uZmlndXJlU3RhdGVzKHN0YXRlcywgb3RoZXJ3aXNlUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuZm9yRWFjaChmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoc3RhdGUuc3RhdGUsIHN0YXRlLmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJ3aXNlUGF0aCAmJiAhaGFzT3RoZXJ3aXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNPdGhlcndpc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShvdGhlcndpc2VQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFN0YXRlcygpIHsgcmV0dXJuICRzdGF0ZS5nZXQoKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdzbS5jYycsW10pO1xuXHRcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uY2MnKVxuXHRcdC5kaXJlY3RpdmUoJ25hdkJhcicsIG5hdkJhcik7XG5cblx0ZnVuY3Rpb24gbmF2QmFyKCkge1xuXG5cdFx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL25hdmJhci9uYXZiYXIuaHRtbCcsXG5cdFx0XHRyZXN0cmljdDogJ0EnXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRpcmVjdGl2ZTtcblx0fVxuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uc2lnbnVwJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKXtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdC5tb2R1bGUoJ3NtLnNpZ251cCcpXG5cdC5ydW4oYXBwUnVuKVxuXG5cdGZ1bmN0aW9uIGFwcFJ1bihyb3V0ZXJIZWxwZXIpe1xuXHRcdHJvdXRlckhlbHBlci5jb25maWd1cmVTdGF0ZXMoZ2V0U3RhdGVzKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCl7XG5cblx0XHRyZXR1cm4gW1xuXHRcdHtcblx0XHRcdHN0YXRlOiAnc2lnbnVwJyxcblx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHR1cmw6ICcvc2lnbnVwJyxcblx0XHRcdFx0Y29udHJvbGxlcjpcInNpZ25VcEN0cmxcIixcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmh0bWwnXG5cdFx0XHR9XG5cdFx0fVxuXHRcdF1cblx0fVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5zaWdudXAnKVxuICAgICAgICAuY29udHJvbGxlcignc2lnblVwQ3RybCcsIHNpZ25VcEN0cmwpO1xuXG4gICAgc2lnblVwQ3RybC4kaW5qZWN0ID0gWyckc2NvcGUnLCckc3RhdGUnLCAnJHJvb3RTY29wZScsJyRmaXJlYmFzZUF1dGgnLCAnRklSRUJBU0VfVVJJJ107XG5cbiAgICBmdW5jdGlvbiBzaWduVXBDdHJsKCRzY29wZSwgJHN0YXRlLCRyb290U2NvcGUsICRmaXJlYmFzZUF1dGgsIEZJUkVCQVNFX1VSSSkge1xuXG4gICAgICAgIHZhciByZWYgPSBuZXcgRmlyZWJhc2UoRklSRUJBU0VfVVJJICsnQWRtaW4nKTtcbiAgICAgICAgdmFyIGF1dGhPYmogPSAkZmlyZWJhc2VBdXRoKHJlZik7XG5cbiAgICAgICAgJHNjb3BlLnNpZ25VcFVzZXIgPSBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkKSB7XG5cbiAgICAgICAgICAgIGF1dGhPYmouJGNyZWF0ZVVzZXIoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24odXNlckRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgXCIgKyB1c2VyRGF0YS51aWQgKyBcIiBjcmVhdGVkIHN1Y2Nlc3NmdWxseSFcIik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0aE9iai4kYXV0aFdpdGhQYXNzd29yZCh7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGF1dGhEYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dnZWQgaW4gYXM6XCIsIGF1dGhEYXRhLnVpZCk7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5hdXRoRGF0YSA9IGF1dGhEYXRhO1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnYWRtaW4nKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICRzY29wZS5lcnJvciA9ZXJyb3I7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVtYWlsID1cIlwiO1xuICAgICAgICAgICAgICAgICRzY29wZS5wYXNzd29yZCA9XCJcIjtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ3NpZ251cCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gbm93LCByZWRpcmVjdCBvbmx5IG5vdCBhdXRoZW50aWNhdGVkXG5cbiAgICAgICAgLy92YXIgdXNlckluZm8gPSBhdXRoZW50aWNhdGlvblN2Yy5nZXRVc2VySW5mbygpO1xuICAgICAgICAvL1xuICAgICAgICAvL2lmKHVzZXJJbmZvLmF1dGhlbnRpY2F0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCBjdXJyZW50IGV4ZWN1dGlvblxuICAgICAgICAvLyAgICAkc3RhdGUuZ28oJ2xvZ2luJyk7IC8vIGdvIHRvIGxvZ2luXG4gICAgICAgIC8vfVxuXG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLnNpZ25pbicsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhclxuXHQubW9kdWxlKCdzbS5zaWduaW4nKVxuXHQucnVuKGFwcFJ1bilcblxuXHRmdW5jdGlvbiBhcHBSdW4ocm91dGVySGVscGVyKXtcblx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFN0YXRlcygpe1xuXG5cdFx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRzdGF0ZTogJ3NpZ25pbicsXG5cdFx0XHRjb25maWc6IHtcblx0XHRcdFx0dXJsOiAnLycsXG5cdFx0XHRcdGNvbnRyb2xsZXI6XCJzaWduSW5DdHJsXCIsXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5odG1sJ1xuXHRcdFx0fVxuXHRcdH1cblx0XHRdXG5cdH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uc2lnbmluJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ3NpZ25JbkN0cmwnLCBzaWduSW5DdHJsKTtcblxuICAgIHNpZ25JbkN0cmwuJGluamVjdCA9IFsnJHNjb3BlJywnJHN0YXRlJywgJyRyb290U2NvcGUnLCAnJGZpcmViYXNlQXV0aCcsICdGSVJFQkFTRV9VUkknXTtcblxuICAgIGZ1bmN0aW9uIHNpZ25JbkN0cmwoJHNjb3BlLCAkc3RhdGUsJHJvb3RTY29wZSwgJGZpcmViYXNlQXV0aCwgRklSRUJBU0VfVVJJKSB7XG5cbiAgICAgICAgdmFyIHJlZiA9IG5ldyBGaXJlYmFzZShGSVJFQkFTRV9VUkkgKydBZG1pbicpO1xuICAgICAgICB2YXIgYWRtaW5PYmogPSAkZmlyZWJhc2VBdXRoKHJlZik7XG5cbiAgICAgICAgJHNjb3BlLmF1dGhFbWFpbFVzZXIgPSBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkKSB7XG5cbiAgICAgICAgICAgIGFkbWluT2JqLiRhdXRoV2l0aFBhc3N3b3JkKHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChhdXRoRGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2VkIGluIGFzOlwiLCBhdXRoRGF0YS51aWQpO1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUuYXV0aERhdGEgPSBhdXRoRGF0YTtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2FkbWluJyk7XG5cblxuXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQXV0aGVudGljYXRpb24gZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVycm9yID1lcnJvcjtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZW1haWwgPVwiXCI7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBhc3N3b3JkID1cIlwiO1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnc2lnbmluJyk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuXG5cblxuICAgICAgICAvLyBub3csIHJlZGlyZWN0IG9ubHkgbm90IGF1dGhlbnRpY2F0ZWRcblxuICAgICAgICAvL3ZhciB1c2VySW5mbyA9IGF1dGhlbnRpY2F0aW9uU3ZjLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vaWYodXNlckluZm8uYXV0aGVudGljYXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIGN1cnJlbnQgZXhlY3V0aW9uXG4gICAgICAgIC8vICAgICRzdGF0ZS5nbygnbG9naW4nKTsgLy8gZ28gdG8gbG9naW5cbiAgICAgICAgLy99XG5cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhci5tb2R1bGUoJ3NtLnNlc3Npb25zJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKXtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uc2Vzc2lvbnMnKVxuXHRcdC5ydW4oYXBwUnVuKVxuXG5cdFx0ZnVuY3Rpb24gYXBwUnVuKHJvdXRlckhlbHBlcil7XG5cdFx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCl7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhdGU6ICdzZXNzaW9ucycsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHR1cmw6ICcvc2Vzc2lvbnMnLFxuXHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ1Nlc3Npb25zQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2NsaWVudC9jb21wb25lbnRzL3Nlc3Npb25zL3Nlc3Npb25zLmh0bWwnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdO1xuXHRcdH07XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5zZXNzaW9ucycpXG5cdFx0LmNvbnRyb2xsZXIoJ1Nlc3Npb25zQ29udHJvbGxlcicsIFNlc3Npb25zQ29udHJvbGxlcik7XG5cblx0XHRTZXNzaW9uc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRmaXJlYmFzZUFycmF5JywgJ0ZJUkVCQVNFX1VSSSddO1xuXG5cdFx0ZnVuY3Rpb24gU2Vzc2lvbnNDb250cm9sbGVyICgkc2NvcGUsICRmaXJlYmFzZUFycmF5LCBGSVJFQkFTRV9VUkkpIHtcblx0XHRcdHZhciBldmVudFJlZiA9IG5ldyBGaXJlYmFzZShGSVJFQkFTRV9VUkkgKyAnU2Vzc2lvbicpO1xuXHRcdFx0JHNjb3BlLnNlc3Npb25zID0gJGZpcmViYXNlQXJyYXkoZXZlbnRSZWYpO1xuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgIFx0Lm1vZHVsZSgnc20uY29yZScsIFtdKVxuICAgIFx0LmNvbnN0YW50KCdGSVJFQkFTRV9VUkknLCAnaHR0cHM6Ly9sdW1pbm91cy1pbmZlcm5vLTY0MC5maXJlYmFzZWlvLmNvbS8nKTtcblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5jb3JlJylcbiAgICAgICAgLmZhY3RvcnkoJ2RhdGFzZXJ2aWNlJywgZGF0YXNlcnZpY2UpO1xuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gZGF0YXNlcnZpY2UoKSB7XG4gICAgLy8gICAgIHZhciBpc1ByaW1lZCA9IGZhbHNlO1xuICAgIC8vICAgICB2YXIgcHJpbWVQcm9taXNlO1xuXG4gICAgLy8gICAgIHZhciBzZXJ2aWNlID0ge1xuICAgIC8vICAgICAgICAgZ2V0QXZlbmdlcnNDYXN0OiBnZXRBdmVuZ2Vyc0Nhc3QsXG4gICAgLy8gICAgICAgICBnZXRBdmVuZ2VyQ291bnQ6IGdldEF2ZW5nZXJDb3VudCxcbiAgICAvLyAgICAgICAgIGdldEF2ZW5nZXJzOiBnZXRBdmVuZ2VycyxcbiAgICAvLyAgICAgICAgIHJlYWR5OiByZWFkeVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9tYWEnKVxuICAgIC8vICAgICAgICAgICAgIC50aGVuKGdldEF2ZW5nZXJzQ29tcGxldGUpXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZXhjZXB0aW9uLmNhdGNoZXIoJ1hIUiBGYWlsZWQgZm9yIGdldEF2ZW5nZXJzJykobWVzc2FnZSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwoJy8nKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnNDb21wbGV0ZShkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBkYXRhLmRhdGFbMF0uZGF0YS5yZXN1bHRzO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlckNvdW50KCkge1xuICAgIC8vICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAvLyAgICAgICAgIHJldHVybiBnZXRBdmVuZ2Vyc0Nhc3QoKVxuICAgIC8vICAgICAgICAgICAgIC50aGVuKGdldEF2ZW5nZXJzQ2FzdENvbXBsZXRlKVxuICAgIC8vICAgICAgICAgICAgIC5jYXRjaChleGNlcHRpb24uY2F0Y2hlcignWEhSIEZhaWxlZCBmb3IgZ2V0QXZlbmdlckNvdW50JykpO1xuXG4gICAgLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2Vyc0Nhc3RDb21wbGV0ZSAoZGF0YSkge1xuICAgIC8vICAgICAgICAgICAgIGNvdW50ID0gZGF0YS5sZW5ndGg7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuICRxLndoZW4oY291bnQpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnNDYXN0KCkge1xuICAgIC8vICAgICAgICAgdmFyIGNhc3QgPSBbXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdSb2JlcnQgRG93bmV5IEpyLicsIGNoYXJhY3RlcjogJ1RvbnkgU3RhcmsgLyBJcm9uIE1hbid9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnQ2hyaXMgSGVtc3dvcnRoJywgY2hhcmFjdGVyOiAnVGhvcid9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnQ2hyaXMgRXZhbnMnLCBjaGFyYWN0ZXI6ICdTdGV2ZSBSb2dlcnMgLyBDYXB0YWluIEFtZXJpY2EnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ01hcmsgUnVmZmFsbycsIGNoYXJhY3RlcjogJ0JydWNlIEJhbm5lciAvIFRoZSBIdWxrJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdTY2FybGV0dCBKb2hhbnNzb24nLCBjaGFyYWN0ZXI6ICdOYXRhc2hhIFJvbWFub2ZmIC8gQmxhY2sgV2lkb3cnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0plcmVteSBSZW5uZXInLCBjaGFyYWN0ZXI6ICdDbGludCBCYXJ0b24gLyBIYXdrZXllJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdHd3luZXRoIFBhbHRyb3cnLCBjaGFyYWN0ZXI6ICdQZXBwZXIgUG90dHMnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1NhbXVlbCBMLiBKYWNrc29uJywgY2hhcmFjdGVyOiAnTmljayBGdXJ5J30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdQYXVsIEJldHRhbnknLCBjaGFyYWN0ZXI6ICdKYXJ2aXMnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1RvbSBIaWRkbGVzdG9uJywgY2hhcmFjdGVyOiAnTG9raSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnQ2xhcmsgR3JlZ2cnLCBjaGFyYWN0ZXI6ICdBZ2VudCBQaGlsIENvdWxzb24nfVxuICAgIC8vICAgICAgICAgXTtcbiAgICAvLyAgICAgICAgIHJldHVybiAkcS53aGVuKGNhc3QpO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gcHJpbWUoKSB7XG4gICAgLy8gICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBvbmx5IGJlIGNhbGxlZCBvbmNlLlxuICAgIC8vICAgICAgICAgaWYgKHByaW1lUHJvbWlzZSkge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBwcmltZVByb21pc2U7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIHByaW1lUHJvbWlzZSA9ICRxLndoZW4odHJ1ZSkudGhlbihzdWNjZXNzKTtcbiAgICAvLyAgICAgICAgIHJldHVybiBwcmltZVByb21pc2U7XG5cbiAgICAvLyAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgLy8gICAgICAgICAgICAgaXNQcmltZWQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdQcmltZWQgZGF0YScpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gcmVhZHkobmV4dFByb21pc2VzKSB7XG4gICAgLy8gICAgICAgICB2YXIgcmVhZHlQcm9taXNlID0gcHJpbWVQcm9taXNlIHx8IHByaW1lKCk7XG5cbiAgICAvLyAgICAgICAgIHJldHVybiByZWFkeVByb21pc2VcbiAgICAvLyAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuICRxLmFsbChuZXh0UHJvbWlzZXMpOyB9KVxuICAgIC8vICAgICAgICAgICAgIC5jYXRjaChleGNlcHRpb24uY2F0Y2hlcignXCJyZWFkeVwiIGZ1bmN0aW9uIGZhaWxlZCcpKTtcbiAgICAvLyAgICAgfVxuXG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5jb3JlJylcbiAgICAgICAgLnJ1bihhcHBSdW4pO1xuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gYXBwUnVuKHJvdXRlckhlbHBlcikge1xuICAgICAgICB2YXIgb3RoZXJ3aXNlID0gJy80MDQnO1xuICAgICAgICByb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpLCBvdGhlcndpc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogJzQwNCcsXG4gICAgICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy80MDQnLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NsaWVudC9jb21wb25lbnRzL2NvcmUvNDA0Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJzQwNCdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uY2hhdCcsIFtdKTtcbn0pKCk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGFsZXhhbmRlcmtvem92c2tpIG9uIDkvMjQvMTUuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NtLmNoYXQnKVxuICAgIC5kaXJlY3RpdmUoJ2NoYXRNb2R1bGUnLCBjaGF0TW9kdWxlKTtcblxuZnVuY3Rpb24gY2hhdE1vZHVsZSgpe1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDonRScsXG4gICAgICAgIHRlbXBsYXRlVXJsOicvY2xpZW50L2NvbXBvbmVudHMvY2hhdC9jaGF0Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnY2hhdEN0cmwnXG4gICAgICAgIC8vbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsICBhdHRyKXtcbiAgICAgICAgLy8gICAgY29uc29sZS5kZWJ1ZyhzY29wZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vfVxuXG4gICAgfTtcblxuXG59IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uY2hhdCcpXG4gICAgICAgIC5jb250cm9sbGVyKCdjaGF0Q3RybCcsIGNoYXRDdHJsKTtcblxuICAgIGNoYXRDdHJsLiRpbmplY3QgPSBbJyRzY29wZScsICckZmlyZWJhc2VPYmplY3QnLCckZmlyZWJhc2VBcnJheScsICdGSVJFQkFTRV9VUkknXVxuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gY2hhdEN0cmwoJHNjb3BlLCAkZmlyZWJhc2VPYmplY3QsJGZpcmViYXNlQXJyYXksIEZJUkVCQVNFX1VSSSkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBmaXJlYmFzZSByZWZlcmVuY2VcbiAgICAgICAgdmFyIGNoYXRSZWYgPSBuZXcgRmlyZWJhc2UgKEZJUkVCQVNFX1VSSSArICdTZXNzaW9uJyArICcvJyArICRzY29wZS5zZXNzaW9uSUQgKyAnLycgKyAnTWVzc2FnZXMnKTtcbiAgICAgICAgdmFyIHVzZXJSZWYgPSBuZXcgRmlyZWJhc2UgKEZJUkVCQVNFX1VSSSArICdTZXNzaW9uJyArICcvJyArICRzY29wZS5zZXNzaW9uSUQgKyAnLycgKyAnVXNlcnMnKTtcbiAgICAgICAgLy92YXIgdm90ZVJlZiA9IG5ldyBGaXJlYmFzZSAoRklSRUJBU0VfVVJJICsgJ1Nlc3Npb24nICsgJy8nICsgJHNjb3BlLnNlc3Npb25JRCArICcvJyArICdWb3RlcycgKVxuXG4gICAgICAgIC8vIHZhciBzZXNzaW9uUmVmID0gbmV3IEZpcmViYXNlKEZJUkVCQVNFX1VSSSArICdTZXNzaW9uJyArICcvJyArIHNlc3Npb25JRCk7XG4gICAgICAgIFxuICAgICAgICAkc2NvcGUudXNlciA9IDA7XG4gICAgICAgIC8vY3JlYXRlIGFub24gdXNlciB3aXRoIHVpZCBhbmQgbGltaXQgc2Vzc2lvbiB0byBicm93c2VyIG9wZW4gb25seS5cbiAgICAgICAgJHNjb3BlLmF1dGhBbm9uVXNlcj0gZnVuY3Rpb24odXNlcm5hbWUpe1xuICAgICAgICAgICAgY2hhdFJlZi5hdXRoQW5vbnltb3VzbHkoZnVuY3Rpb24oZXJyb3IsIGF1dGhEYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoZW50aWNhdGlvbiBGYWlsZWQhXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1c2VyUmVmLnB1c2goe2lkOmF1dGhEYXRhLnVpZCwgbmFtZTp1c2VybmFtZSwgdG9rZW46YXV0aERhdGEudG9rZW59KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dnZWQgaW4gYXM6XCIsIGF1dGhEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVycm9yPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VyID0gYXV0aERhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcmVtZW1iZXI6IFwic2Vzc2lvblwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRzY29wZS5tZXNzYWdlcyA9ICRmaXJlYmFzZUFycmF5KGNoYXRSZWYpO1xuXG4gICAgICAgIC8vYWRkIG1lc3NhZ2VzIHRvIHNjb3BlXG4gICAgICAgICRzY29wZS5hZGRNZXNzYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRzY29wZS5tZXNzYWdlcy4kYWRkKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiRzY29wZS5uZXdNZXNzYWdlVGV4dCxcbiAgICAgICAgICAgICAgICBpZDogJHNjb3BlLnVzZXIudWlkLFxuICAgICAgICAgICAgICAgIG5hbWU6ICRzY29wZS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICB2b3Rlczoge30sXG4gICAgICAgICAgICAgICAgdGltZTpGaXJlYmFzZS5TZXJ2ZXJWYWx1ZS5USU1FU1RBTVBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9mb3JtYXQgVGltZSBmcm9tIFVOSVggdG8gaHVtYW4gcmVhZGFibGVcbiAgICAgICAgJHNjb3BlLmZvcm1hdFRpbWUgPSBmdW5jdGlvbih0aW1lc3RhbXApIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gKHRpbWVzdGFtcCkgPyBuZXcgRGF0ZSh0aW1lc3RhbXApIDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSB8fCAxMixcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gJycgKyBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgICAgICBhbXBtID0gKGRhdGUuZ2V0SG91cnMoKSA+PSAxMikgPyAncG0nIDogJ2FtJztcblxuICAgICAgICAgICAgaG91cnMgPSAoaG91cnMgPiAxMikgPyBob3VycyAtIDEyIDogaG91cnM7XG4gICAgICAgICAgICBtaW51dGVzID0gKG1pbnV0ZXMubGVuZ3RoIDwgMikgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcztcbiAgICAgICAgICAgIHJldHVybiAnJyArIGhvdXJzICsgJzonICsgbWludXRlcyArIGFtcG07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9saXN0ZW4gZm9yIGNoYW5nZXMgdG8gbW9kZWwgYW5kIHB1bGwgdXNlciBuYW1lXG4gICAgICAgIGNoYXRSZWYub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwc2hvdCwgcHJldkNoaWxkS2V5KSB7XG4gICAgICAgICAgICB2YXIgbmV3TWVzc2FnZSA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICAgICAgJHNjb3BlLm5hbWUgPSBuZXdNZXNzYWdlLm5hbWU7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9VcHZvdGUgZnVuY3Rpb25cbiAgICAgICAgJHNjb3BlLmVycm9yPSBmYWxzZTtcbiAgICAgICAgJHNjb3BlLnZvdGVkID0gZmFsc2U7XG5cbiAgICAgICAgJHNjb3BlLnVwVm90ZSA9IGZ1bmN0aW9uKGluZGV4LCBtZXNzYWdlKXtcbiAgICAgICAgICAgIGlmKCEkc2NvcGUudXNlcil7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVycm9yID10cnVlO1xuICAgICAgICAgICAgfWVsc2Uge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnVzZXIudWlkLCBcIlVJRFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1lc3NhZ2Uudm90ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uudm90ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2Uudm90ZXNbJHNjb3BlLnVzZXIuYXV0aC51aWRdKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS52b3Rlc1skc2NvcGUudXNlci5hdXRoLnVpZF0gPSAhKCRzY29wZS51c2VyLmF1dGgudWlkIGluIG1lc3NhZ2Uudm90ZXMpID8gMCA6IG1lc3NhZ2Uudm90ZXNbJHNjb3BlLnVzZXIuYXV0aC51aWRdICsgMTtcblxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnZvdGVjb3VudCA9IE9iamVjdC5rZXlzKG1lc3NhZ2Uudm90ZXMpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2VzLiRzYXZlKGluZGV4KTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlcicsIG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vJHNjb3BlLm1lc3NhZ2VzLnZvdGVzID0gbWVzc2FnZS52b3RlY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLm1lc3NhZ2VzKTtcblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAvLyRzY29wZS5lcnJvcj0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgICAgICAgLy9tZXNzYWdlLnZvdGVzKys7XG4gICAgICAgICAgICAgICAgLy8kc2NvcGUubWVzc2FnZXMuJHNhdmUoaW5kZXgpO1xuICAgICAgICAgICAgICAgIC8vLy9tZXNzYWdlLnZvdGVzKys7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZS51c2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuXG5cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbigpe1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXIubW9kdWxlKCdzbS5hZG1pbicsW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKXtcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uYWRtaW4nKVxuXHRcdC5ydW4oYXBwUnVuKTtcblxuXHRcdGZ1bmN0aW9uIGFwcFJ1bihyb3V0ZXJIZWxwZXIpe1xuXHRcdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSk7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGdldFN0YXRlcygpe1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXRlOiAnYWRtaW4nLFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0dXJsOiAnL2FkbWluJyxcblx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdBZG1pbkNvbnRyb2xsZXInLFxuXHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5odG1sJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKXtcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uYWRtaW4nKVxuICAgICAgICAuZmFjdG9yeSgnQWRtaW5GYWN0b3J5JywgQWRtaW5GYWN0b3J5KTtcblxuICAgIEFkbWluRmFjdG9yeS4kaW5qZWN0ID0gWydVcGxvYWQnLCdGSVJFQkFTRV9VUkknXTtcblxuXG4gICAgZnVuY3Rpb24gQWRtaW5GYWN0b3J5KFVwbG9hZCl7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBsb2FkSW1nKGZpbGUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZSwgXCJmYWN0b3J5XCIpXG4gICAgICAgICAgICByZXR1cm4gVXBsb2FkLnVwbG9hZCh7XG4gICAgICAgICAgICAgICAgdXJsOlwiL2FwaS91cGxvYWQvaW1hZ2VcIixcbiAgICAgICAgICAgICAgICBmaWxlOmZpbGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVwbG9hZEltZzogdXBsb2FkSW1nXG4gICAgICAgIH1cblxuICAgIH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKXtcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uYWRtaW4nKVxuXHRcdC5jb250cm9sbGVyKCdBZG1pbkNvbnRyb2xsZXInLCBBZG1pbkNvbnRyb2xsZXIpO1xuXG5cdFx0QWRtaW5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsJyRyb290U2NvcGUnLCdBZG1pbkZhY3RvcnknLCAnJGZpcmViYXNlT2JqZWN0JywnJGZpcmViYXNlQXJyYXknLCdGSVJFQkFTRV9VUkknXTtcblxuXHRcdGZ1bmN0aW9uIEFkbWluQ29udHJvbGxlcigkc2NvcGUsIEFkbWluRmFjdG9yeSwkcm9vdFNjb3BlLCAkZmlyZWJhc2VPYmplY3QsICRmaXJlYmFzZUFycmF5LCBGSVJFQkFTRV9VUkkpe1xuXHRcdFx0dmFyIGV2ZW50UmVmID0gbmV3IEZpcmViYXNlKEZJUkVCQVNFX1VSSSArICdTZXNzaW9uJyk7XG5cbiAgICAgICAgICAgIC8vaW5zdGF0aWF0ZSBzZXNzaW9uIG9iamVjdCBhbmQgYWRkIHRvICRzY29wZVxuICAgICAgICAgICAgJHNjb3BlLnNlc3Npb24gPSB7XG4gICAgICAgICAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICAgICAgICAgIHByZXNlbnRlcjpcIlwiLFxuICAgICAgICAgICAgICAgIGRlc2M6XCJcIixcbiAgICAgICAgICAgICAgICB0aW1lOlwiXCIsXG4gICAgICAgICAgICAgICAgaW1nVXJsOlwiXCJcbiAgICAgICAgICAgIH07XG5cblxuXHRcdFx0JHNjb3BlLnNlc3Npb25zID0gJGZpcmViYXNlQXJyYXkoZXZlbnRSZWYpO1xuXG4gICAgICAgICAgICAvL3ZhciBsaXN0ID0gJGZpcmViYXNlQXJyYXkocmVmKTtcbiAgICAgICAgICAgIC8vbGlzdC4kYWRkKHsgZm9vOiBcImJhclwiIH0pLnRoZW4oZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAvLyAgICB2YXIgaWQgPSByZWYua2V5KCk7XG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcImFkZGVkIHJlY29yZCB3aXRoIGlkIFwiICsgaWQpO1xuICAgICAgICAgICAgLy8gICAgbGlzdC4kaW5kZXhGb3IoaWQpOyAvLyByZXR1cm5zIGxvY2F0aW9uIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgLy99KTtcblxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdFNlc3Npb24gPSBmdW5jdGlvbihzZXNzaW9uKXtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24sIFwiU0VTU0lPTiBTVUJNSVRURUQgVE8gRklSRUJBU0VcIilcblx0XHRcdFx0JHNjb3BlLnNlc3Npb25zLiRhZGQoc2Vzc2lvbik7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlc3Npb24gPXt9O1xuICAgICAgICAgICAgICAgICRzY29wZS51cGxvYWQgPVwiXCI7XG5cdFx0XHR9O1xuXG4gICAgICAgICAgICAvL3dhdGNoIGZpbGUgZm9yIGNoYW5nZSwgZG8gc3R1ZmYgYW5kIHRyaWdnZXIgZmFjdG9yeSBGdW5jLlxuXHRcdFx0JHNjb3BlLiR3YXRjaCgnZmlsZScsIGZ1bmN0aW9uKGZpbGUpe1xuXHRcdFx0XHRpZihmaWxlKXtcblx0XHRcdFx0XHQkc2NvcGUubG9hZGluZyA9IHRydWU7XG5cblx0XHRcdFx0XHRBZG1pbkZhY3RvcnkudXBsb2FkSW1nKCRzY29wZS5maWxlKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdFx0JHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiZGF0YVwiKTtcblx0XHRcdFx0XHRcdCRzY29wZS51cGxvYWQgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dldCBwYXRoIG9uIGNhbGxiYWNrIGZyb20gQVdTXG5cdFx0XHRcdFx0XHR2YXIgaW5pdGlhbF9wYXRoID1cImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vc3VwZXJtZXNoL1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIG9mIHRoZSB3YXkgQVdTIGZvcm1hdHMgc3BhY2VzIFwiK1wiXG5cdFx0XHRcdFx0XHQkc2NvcGUuc2Vzc2lvbi5pbWdVcmwgPSBpbml0aWFsX3BhdGggKyBkYXRhLmRhdGEuc3BsaXQoJyAnKS5qb2luKCcrJyk7XG5cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtJywgW1xuXG4gICAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgICAnZmlyZWJhc2UnLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIE9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4gICAgICAgICAqIEV2ZXJ5Ym9keSBoYXMgYWNjZXNzIHRvIHRoZXNlLlxuICAgICAgICAgKiBXZSBjb3VsZCBwbGFjZSB0aGVzZSB1bmRlciBldmVyeSBmZWF0dXJlIGFyZWEsXG4gICAgICAgICAqIGJ1dCB0aGlzIGlzIGVhc2llciB0byBtYWludGFpbi5cbiAgICAgICAgICovIFxuICAgICAgICAgXG4gICAgICAgICdzbS5jb3JlJyxcbiAgICAgICAgJ3NtLnJvdXRlcicsXG4gICAgICAgICduZ0ZpbGVVcGxvYWQnLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIEZlYXR1cmUgYXJlYXNcbiAgICAgICAgICovXG4gICAgICAgICBcbiAgICAgICAgJ3NtLmFkbWluJyxcbiAgICAgICAgJ3NtLmNjJyxcbiAgICAgICAgJ3NtLmNoYXQnLFxuICAgICAgICAnc20uc2Vzc2lvbicsXG4gICAgICAgICdzbS5zZXNzaW9ucycsXG4gICAgICAgICdzbS5zaWduaW4nLFxuICAgICAgICAnc20uc2lnbnVwJ1xuICAgIF0pO1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uZmlyZWJhc2UnLFtdKVxuICAgIFx0LmNvbnN0YW50KCdGSVJFQkFTRV9VUkknLCAnaHR0cHM6Ly9sdW1pbm91cy1pbmZlcm5vLTY0MC5maXJlYmFzZWlvLmNvbScpO1xuXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==