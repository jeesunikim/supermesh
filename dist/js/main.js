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

    angular.module('sm.core', []);
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
(function() {
    'use strict';

    angular
        .module('sm.chat')
        .controller('chatCtrl', chatCtrl);

    /* @ngInject */
    function chatCtrl($scope) {
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

    angular.module('sm', [
        
        'ui.router',

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
         
        'sm.cc',
        'sm.chat',
        'sm.session',
        'sm.schedule'
    ]);

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jYy5tb2R1bGUuanMiLCJjb21tb24vbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJzZXNzaW9uL3Nlc3Npb24ubW9kdWxlLmpzIiwic2Vzc2lvbi92aWV3L3Nlc3Npb24udmlldy5yb3V0ZXMuanMiLCJzZXNzaW9uL3ZpZXcvc2Vzc2lvbi52aWV3LmNvbnRyb2xsZXIuanMiLCJzZXNzaW9uL3RpbGUvc2Vzc2lvbi50aWxlLmRpcmVjdGl2ZS5qcyIsImNvcmUvcm91dGVyL3JvdXRlci5tb2R1bGUuanMiLCJjb3JlL3JvdXRlci9yb3V0ZXIucHJvdmlkZXIuanMiLCJzaWduaW4vc2lnbmluLm1vZHVsZS5qcyIsInNpZ25pbi9zaWduaW4uanMiLCJzY2hlZHVsZS9zY2hlZHVsZS5tb2R1bGUuanMiLCJzY2hlZHVsZS9zY2hlZHVsZS5yb3V0ZXMuanMiLCJzY2hlZHVsZS9zY2hlZHVsZS5jb250cm9sbGVyLmpzIiwiY29yZS9jb3JlLm1vZHVsZS5qcyIsImNvcmUvZGF0YXNlcnZpY2UuanMiLCJjaGF0L2NoYXQubW9kdWxlLmpzIiwiY2hhdC9jaGF0LmN0cmwuanMiLCJhZG1pbi9hZG1pbi5tb2R1bGUuanMiLCJzbS5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdzbS5jYycsW10pO1xuXHRcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uY2MnKVxuXHRcdC5kaXJlY3RpdmUoJ25hdkJhcicsIG5hdkJhcik7XG5cblx0ZnVuY3Rpb24gbmF2QmFyKCkge1xuXG5cdFx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL25hdmJhci9uYXZiYXIuaHRtbCcsXG5cdFx0XHRyZXN0cmljdDogJ0EnXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRpcmVjdGl2ZTtcblx0fVxuXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdzbS5zZXNzaW9uJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKXtcblx0J3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uc2Vzc2lvbicpXG5cdFx0LnJ1bihhcHBSdW4pXG5cblx0XHRmdW5jdGlvbiBhcHBSdW4ocm91dGVySGVscGVyKXtcblx0XHRcdHJvdXRlckhlbHBlci5jb25maWd1cmVTdGF0ZXMoZ2V0U3RhdGVzKCkpO1xuXHRcdH1cblxuXHRcdC8vIGdldFN0YXRlcy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlcicsICckc3RhdGVQYXJhbXMnXTtcblxuXHRcdGZ1bmN0aW9uIGdldFN0YXRlcygpe1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXRlOiAnc2Vzc2lvbicsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHR1cmw6ICcvc2Vzc2lvbi86aWQnLFxuXHRcdFx0XHRcdFx0Y29udHJvbGxlcjogJ1Nlc3Npb25Db250cm9sbGVyJyxcblx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2Vzc2lvbi92aWV3L3Nlc3Npb24udmlldy5odG1sJyxcblx0XHRcdFx0XHRcdHJlc29sdmU6IHtcblx0XHRcdFx0XHRcdFx0c2Vzc2lvbjogZnVuY3Rpb24oJHN0YXRlUGFyYW1zKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gU2hvdWxkIHJldHVybiBhbGwgaW5mb3JtYXRpb24gY29uY2VybmluZyBhIHBhcnRpY3VsYXIgc2Vzc2lvbiB3LyBzb21lIGdldCBmdW5jdGlvblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZDogJHN0YXRlUGFyYW1zLmlkXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdO1xuXHRcdH07XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5zZXNzaW9uJylcblx0XHQuY29udHJvbGxlcignU2Vzc2lvbkNvbnRyb2xsZXInLCBTZXNzaW9uQ29udHJvbGxlcik7XG5cblx0XHRTZXNzaW9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnc2Vzc2lvbiddO1xuXG5cdFx0ZnVuY3Rpb24gU2Vzc2lvbkNvbnRyb2xsZXIoJHNjb3BlLCBzZXNzaW9uKSB7XG5cblx0XHRcdCRzY29wZS5zZXNzaW9uID0gc2Vzc2lvbjtcblxuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0J1xuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc20uc2Vzc2lvbicpXG5cdFx0LmRpcmVjdGl2ZSgnc2Vzc2lvblRpbGUnLCBzZXNzaW9uVGlsZSk7XG5cblx0XHRmdW5jdGlvbiBzZXNzaW9uVGlsZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHJlc3RyaWN0OiAnQScsXG5cdFx0XHRcdHNjb3BlOiB7XG5cdFx0XHRcdFx0J3Nlc3Npb24nOiAnPSdcblx0XHRcdFx0fSxcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9zZXNzaW9uL3RpbGUvc2Vzc2lvbi50aWxlLmh0bWwnXG5cdFx0XHR9XG5cdFx0fVxuXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhci5tb2R1bGUoJ3NtLnJvdXRlcicsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLnJvdXRlcicpXG4gICAgICAgIC5wcm92aWRlcigncm91dGVySGVscGVyJywgcm91dGVySGVscGVyUHJvdmlkZXIpO1xuXG4gICAgICAgIHJvdXRlckhlbHBlclByb3ZpZGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvblByb3ZpZGVyJywgJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJvdXRlckhlbHBlclByb3ZpZGVyKCRsb2NhdGlvblByb3ZpZGVyLCAkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgICAgICAgIHRoaXMuJGdldCA9IFJvdXRlckhlbHBlcjtcblxuICAgICAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXG4gICAgICAgICAgICBSb3V0ZXJIZWxwZXIuJGluamVjdCA9IFsnJHN0YXRlJ107XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIFJvdXRlckhlbHBlcigkc3RhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzT3RoZXJ3aXNlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2VydmljZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlU3RhdGVzOiBjb25maWd1cmVTdGF0ZXMsXG4gICAgICAgICAgICAgICAgICAgIGdldFN0YXRlczogZ2V0U3RhdGVzXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb25maWd1cmVTdGF0ZXMoc3RhdGVzLCBvdGhlcndpc2VQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZShzdGF0ZS5zdGF0ZSwgc3RhdGUuY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdGhlcndpc2VQYXRoICYmICFoYXNPdGhlcndpc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc090aGVyd2lzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKG90aGVyd2lzZVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0U3RhdGVzKCkgeyByZXR1cm4gJHN0YXRlLmdldCgpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLnNpZ25pbicsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uc2lnbmluJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ3NpZ25JbkN0cmwnLCBzaWduSW5DdHJsKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIHNpZ25JbkN0cmwoKSB7XG4vLyAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuLy8gICAgICAgICB2YXIgdm0gPSB0aGlzO1xuLy8gICAgICAgICB2bS5hdmVuZ2VycyA9IFtdO1xuLy8gICAgICAgICB2bS50aXRsZSA9ICdBdmVuZ2Vycyc7XG5cbi8vICAgICAgICAgYWN0aXZhdGUoKTtcblxuLy8gICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbi8vIC8vICAgICAgICAgICAgVXNpbmcgYSByZXNvbHZlciBvbiBhbGwgcm91dGVzIG9yIGRhdGFzZXJ2aWNlLnJlYWR5IGluIGV2ZXJ5IGNvbnRyb2xsZXJcbi8vIC8vICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW2dldEF2ZW5nZXJzKCldO1xuLy8gLy8gICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UucmVhZHkocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgIHJldHVybiBnZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0FjdGl2YXRlZCBBdmVuZ2VycyBWaWV3Jyk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLmdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgICAgICAgICAgdm0uYXZlbmdlcnMgPSBkYXRhO1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB2bS5hdmVuZ2Vycztcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXIubW9kdWxlKCdzbS5zY2hlZHVsZScsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ3NtLnNjaGVkdWxlJylcblx0XHQucnVuKGFwcFJ1bilcblxuXHRcdGZ1bmN0aW9uIGFwcFJ1bihyb3V0ZXJIZWxwZXIpe1xuXHRcdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSk7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGdldFN0YXRlcygpe1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXRlOiAnc2NoZWR1bGUnLFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0dXJsOiAnLycsXG5cdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnU2NoZWR1bGVDb250cm9sbGVyJyxcblx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2NoZWR1bGUvc2NoZWR1bGUuaHRtbCcsXG5cdFx0XHRcdFx0XHRyZXNvbHZlOiB7XG5cdFx0XHRcdFx0XHRcdHNlc3Npb25zOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRcdC8vIHNob3VsZCByZXR1cm4gYW4gYXJyYXkgb2Ygc2Vzc2lvbnMgZnJvbSB0aGUgZXZlbnQgKHZpYSBmaXJlYmFzZSlcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRfaWQ6IDI0MjQyNDI0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAnQ29tbXVuaXR5IERldmVsb3BtZW50IDEwMSdcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9pZDogNzg3ODc4LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAnVGVjaCBmb3IgdGhlIE5laWdoYm9yaG9vZCdcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdF07XG5cdFx0fTtcblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ3NtLnNjaGVkdWxlJylcblx0XHQuY29udHJvbGxlcignU2NoZWR1bGVDb250cm9sbGVyJywgU2NoZWR1bGVDb250cm9sbGVyKTtcblxuXHRcdFNjaGVkdWxlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCdzZXNzaW9ucyddO1xuXG5cdFx0ZnVuY3Rpb24gU2NoZWR1bGVDb250cm9sbGVyICgkc2NvcGUsIHNlc3Npb25zKSB7XG5cdFx0XHQvLyB2YXIgdm0gPSB0aGlzO1xuXHRcdFx0Ly8gdm0uc2Vzc2lvbnMgPSBzZXNzaW9ucztcblx0XHRcdCRzY29wZS5zZXNzaW9ucyA9IHNlc3Npb25zO1xuXHRcdH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLmNvcmUnLCBbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLmNvcmUnKVxuICAgICAgICAuZmFjdG9yeSgnZGF0YXNlcnZpY2UnLCBkYXRhc2VydmljZSk7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBkYXRhc2VydmljZSgpIHtcbiAgICAvLyAgICAgdmFyIGlzUHJpbWVkID0gZmFsc2U7XG4gICAgLy8gICAgIHZhciBwcmltZVByb21pc2U7XG5cbiAgICAvLyAgICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgLy8gICAgICAgICBnZXRBdmVuZ2Vyc0Nhc3Q6IGdldEF2ZW5nZXJzQ2FzdCxcbiAgICAvLyAgICAgICAgIGdldEF2ZW5nZXJDb3VudDogZ2V0QXZlbmdlckNvdW50LFxuICAgIC8vICAgICAgICAgZ2V0QXZlbmdlcnM6IGdldEF2ZW5nZXJzLFxuICAgIC8vICAgICAgICAgcmVhZHk6IHJlYWR5XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnMoKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL21hYScpXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oZ2V0QXZlbmdlcnNDb21wbGV0ZSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBleGNlcHRpb24uY2F0Y2hlcignWEhSIEZhaWxlZCBmb3IgZ2V0QXZlbmdlcnMnKShtZXNzYWdlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2Vyc0NvbXBsZXRlKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGEuZGF0YVswXS5kYXRhLnJlc3VsdHM7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VyQ291bnQoKSB7XG4gICAgLy8gICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgIC8vICAgICAgICAgcmV0dXJuIGdldEF2ZW5nZXJzQ2FzdCgpXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oZ2V0QXZlbmdlcnNDYXN0Q29tcGxldGUpXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKGV4Y2VwdGlvbi5jYXRjaGVyKCdYSFIgRmFpbGVkIGZvciBnZXRBdmVuZ2VyQ291bnQnKSk7XG5cbiAgICAvLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzQ2FzdENvbXBsZXRlIChkYXRhKSB7XG4gICAgLy8gICAgICAgICAgICAgY291bnQgPSBkYXRhLmxlbmd0aDtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gJHEud2hlbihjb3VudCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiBnZXRBdmVuZ2Vyc0Nhc3QoKSB7XG4gICAgLy8gICAgICAgICB2YXIgY2FzdCA9IFtcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1JvYmVydCBEb3duZXkgSnIuJywgY2hhcmFjdGVyOiAnVG9ueSBTdGFyayAvIElyb24gTWFuJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdDaHJpcyBIZW1zd29ydGgnLCBjaGFyYWN0ZXI6ICdUaG9yJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdDaHJpcyBFdmFucycsIGNoYXJhY3RlcjogJ1N0ZXZlIFJvZ2VycyAvIENhcHRhaW4gQW1lcmljYSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnTWFyayBSdWZmYWxvJywgY2hhcmFjdGVyOiAnQnJ1Y2UgQmFubmVyIC8gVGhlIEh1bGsnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1NjYXJsZXR0IEpvaGFuc3NvbicsIGNoYXJhY3RlcjogJ05hdGFzaGEgUm9tYW5vZmYgLyBCbGFjayBXaWRvdyd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnSmVyZW15IFJlbm5lcicsIGNoYXJhY3RlcjogJ0NsaW50IEJhcnRvbiAvIEhhd2tleWUnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0d3eW5ldGggUGFsdHJvdycsIGNoYXJhY3RlcjogJ1BlcHBlciBQb3R0cyd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnU2FtdWVsIEwuIEphY2tzb24nLCBjaGFyYWN0ZXI6ICdOaWNrIEZ1cnknfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1BhdWwgQmV0dGFueScsIGNoYXJhY3RlcjogJ0phcnZpcyd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnVG9tIEhpZGRsZXN0b24nLCBjaGFyYWN0ZXI6ICdMb2tpJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdDbGFyayBHcmVnZycsIGNoYXJhY3RlcjogJ0FnZW50IFBoaWwgQ291bHNvbid9XG4gICAgLy8gICAgICAgICBdO1xuICAgIC8vICAgICAgICAgcmV0dXJuICRxLndoZW4oY2FzdCk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiBwcmltZSgpIHtcbiAgICAvLyAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UuXG4gICAgLy8gICAgICAgICBpZiAocHJpbWVQcm9taXNlKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHByaW1lUHJvbWlzZTtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgcHJpbWVQcm9taXNlID0gJHEud2hlbih0cnVlKS50aGVuKHN1Y2Nlc3MpO1xuICAgIC8vICAgICAgICAgcmV0dXJuIHByaW1lUHJvbWlzZTtcblxuICAgIC8vICAgICAgICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAvLyAgICAgICAgICAgICBpc1ByaW1lZCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1ByaW1lZCBkYXRhJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiByZWFkeShuZXh0UHJvbWlzZXMpIHtcbiAgICAvLyAgICAgICAgIHZhciByZWFkeVByb21pc2UgPSBwcmltZVByb21pc2UgfHwgcHJpbWUoKTtcblxuICAgIC8vICAgICAgICAgcmV0dXJuIHJlYWR5UHJvbWlzZVxuICAgIC8vICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gJHEuYWxsKG5leHRQcm9taXNlcyk7IH0pXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKGV4Y2VwdGlvbi5jYXRjaGVyKCdcInJlYWR5XCIgZnVuY3Rpb24gZmFpbGVkJykpO1xuICAgIC8vICAgICB9XG5cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uY2hhdCcsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uY2hhdCcpXG4gICAgICAgIC5jb250cm9sbGVyKCdjaGF0Q3RybCcsIGNoYXRDdHJsKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIGNoYXRDdHJsKCRzY29wZSkge1xuLy8gICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cbi8vICAgICAgICAgdmFyIHZtID0gdGhpcztcbi8vICAgICAgICAgdm0uYXZlbmdlcnMgPSBbXTtcbi8vICAgICAgICAgdm0udGl0bGUgPSAnQXZlbmdlcnMnO1xuXG4vLyAgICAgICAgIGFjdGl2YXRlKCk7XG5cbi8vICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4vLyAvLyAgICAgICAgICAgIFVzaW5nIGEgcmVzb2x2ZXIgb24gYWxsIHJvdXRlcyBvciBkYXRhc2VydmljZS5yZWFkeSBpbiBldmVyeSBjb250cm9sbGVyXG4vLyAvLyAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtnZXRBdmVuZ2VycygpXTtcbi8vIC8vICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLnJlYWR5KHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICByZXR1cm4gZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdBY3RpdmF0ZWQgQXZlbmdlcnMgVmlldycpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VycygpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5nZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuLy8gICAgICAgICAgICAgICAgIHZtLmF2ZW5nZXJzID0gZGF0YTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdm0uYXZlbmdlcnM7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuICAgIH1cbn0pKCk7IiwiIiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzbScsIFtcbiAgICAgICAgXG4gICAgICAgICd1aS5yb3V0ZXInLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIE9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4gICAgICAgICAqIEV2ZXJ5Ym9keSBoYXMgYWNjZXNzIHRvIHRoZXNlLlxuICAgICAgICAgKiBXZSBjb3VsZCBwbGFjZSB0aGVzZSB1bmRlciBldmVyeSBmZWF0dXJlIGFyZWEsXG4gICAgICAgICAqIGJ1dCB0aGlzIGlzIGVhc2llciB0byBtYWludGFpbi5cbiAgICAgICAgICovIFxuICAgICAgICAgXG4gICAgICAgICdzbS5jb3JlJyxcbiAgICAgICAgJ3NtLnJvdXRlcicsXG5cbiAgICAgICAgLypcbiAgICAgICAgICogRmVhdHVyZSBhcmVhc1xuICAgICAgICAgKi9cbiAgICAgICAgIFxuICAgICAgICAnc20uY2MnLFxuICAgICAgICAnc20uY2hhdCcsXG4gICAgICAgICdzbS5zZXNzaW9uJyxcbiAgICAgICAgJ3NtLnNjaGVkdWxlJ1xuICAgIF0pO1xuXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==