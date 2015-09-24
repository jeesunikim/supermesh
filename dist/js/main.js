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
(function() {
    'use strict';

    angular.module('sm.session', []);
})();
(function() {
    'use strict';

    angular
        .module('sm.session')
        .controller('sessionCtrl', sessionCtrl);

    /* @ngInject */
    function sessionCtrl($scope) {
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
	angular.module('sm.schedule',[]);
})();
(function(){
	'use strict';
	angular
		.module('sm.schedule')
		.run(appRun)

		function appRun(routerHelper){
			routerHelper.configureStates(getStates());
		}

		function getStates(){
			return [
				{
					state: 'schedule',
					config: {
						url: '/',
						templateUrl: 'client/components/schedule/schedule.html'
					}
				}
			]
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

    /* @ngInject */
    function chatCtrl($scope) {

        $scope.fire="hello";

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

        /*
         * 3rd party libraries
         */

        'ui.router',
        
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * its components are available.
         */
         
         /*
         * 3rd party libraries
         */

        'ui.router',
        'sm.firebase',

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */ 

        'sm.core',

        /*
         * Feature areas
         */
         
        'sm.cc',
        'sm.chat',
        'sm.session',
        'sm.schedule'
    ]);

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jYy5tb2R1bGUuanMiLCJjb21tb24vbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJzaWduaW4vc2lnbmluLm1vZHVsZS5qcyIsInNpZ25pbi9zaWduaW4uanMiLCJzZXNzaW9uL3Nlc3Npb24ubW9kdWxlLmpzIiwic2Vzc2lvbi9zZXNzaW9uLmpzIiwic2NoZWR1bGUvc2NoZWR1bGUubW9kdWxlLmpzIiwic2NoZWR1bGUvc2NoZWR1bGUucm91dGVzLmpzIiwic2NoZWR1bGUvc2NoZWR1bGUuY29udHJvbGxlci5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJjb3JlL3JvdXRlci5wcm92aWRlci5qcyIsImNvcmUvZGF0YXNlcnZpY2UuanMiLCJjaGF0L2NoYXQubW9kdWxlLmpzIiwiY2hhdC9jaGF0LmN0cmwuanMiLCJhZG1pbi9hZG1pbi5tb2R1bGUuanMiLCJzbS5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ3NtLmNjJyxbXSk7XG5cdFxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5jYycpXG5cdFx0LmRpcmVjdGl2ZSgnbmF2QmFyJywgbmF2QmFyKTtcblxuXHRmdW5jdGlvbiBuYXZCYXIoKSB7XG5cblx0XHR2YXIgZGlyZWN0aXZlID0ge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL25hdmJhci5odG1sJyxcblx0XHRcdHJlc3RyaWN0OiAnQSdcblx0XHR9XG5cblx0XHRyZXR1cm4gZGlyZWN0aXZlO1xuXHR9XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzbS5zaWduaW4nLCBbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLnNpZ25pbicpXG4gICAgICAgIC5jb250cm9sbGVyKCdzaWduSW5DdHJsJywgc2lnbkluQ3RybCk7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBzaWduSW5DdHJsKCkge1xuLy8gICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cbi8vICAgICAgICAgdmFyIHZtID0gdGhpcztcbi8vICAgICAgICAgdm0uYXZlbmdlcnMgPSBbXTtcbi8vICAgICAgICAgdm0udGl0bGUgPSAnQXZlbmdlcnMnO1xuXG4vLyAgICAgICAgIGFjdGl2YXRlKCk7XG5cbi8vICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4vLyAvLyAgICAgICAgICAgIFVzaW5nIGEgcmVzb2x2ZXIgb24gYWxsIHJvdXRlcyBvciBkYXRhc2VydmljZS5yZWFkeSBpbiBldmVyeSBjb250cm9sbGVyXG4vLyAvLyAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtnZXRBdmVuZ2VycygpXTtcbi8vIC8vICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLnJlYWR5KHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICByZXR1cm4gZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdBY3RpdmF0ZWQgQXZlbmdlcnMgVmlldycpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VycygpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5nZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuLy8gICAgICAgICAgICAgICAgIHZtLmF2ZW5nZXJzID0gZGF0YTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdm0uYXZlbmdlcnM7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzbS5zZXNzaW9uJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5zZXNzaW9uJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ3Nlc3Npb25DdHJsJywgc2Vzc2lvbkN0cmwpO1xuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gc2Vzc2lvbkN0cmwoJHNjb3BlKSB7XG4vLyAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuLy8gICAgICAgICB2YXIgdm0gPSB0aGlzO1xuLy8gICAgICAgICB2bS5hdmVuZ2VycyA9IFtdO1xuLy8gICAgICAgICB2bS50aXRsZSA9ICdBdmVuZ2Vycyc7XG5cbi8vICAgICAgICAgYWN0aXZhdGUoKTtcblxuLy8gICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbi8vIC8vICAgICAgICAgICAgVXNpbmcgYSByZXNvbHZlciBvbiBhbGwgcm91dGVzIG9yIGRhdGFzZXJ2aWNlLnJlYWR5IGluIGV2ZXJ5IGNvbnRyb2xsZXJcbi8vIC8vICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW2dldEF2ZW5nZXJzKCldO1xuLy8gLy8gICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UucmVhZHkocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgIHJldHVybiBnZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0FjdGl2YXRlZCBBdmVuZ2VycyBWaWV3Jyk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLmdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgICAgICAgICAgdm0uYXZlbmdlcnMgPSBkYXRhO1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB2bS5hdmVuZ2Vycztcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXHRhbmd1bGFyLm1vZHVsZSgnc20uc2NoZWR1bGUnLFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0Jztcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ3NtLnNjaGVkdWxlJylcblx0XHQucnVuKGFwcFJ1bilcblxuXHRcdGZ1bmN0aW9uIGFwcFJ1bihyb3V0ZXJIZWxwZXIpe1xuXHRcdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCl7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhdGU6ICdzY2hlZHVsZScsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHR1cmw6ICcvJyxcblx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnY2xpZW50L2NvbXBvbmVudHMvc2NoZWR1bGUvc2NoZWR1bGUuaHRtbCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9XG5cbn0pKCk7IiwiIiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzbS5jb3JlJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5jb3JlJylcbiAgICAgICAgLnByb3ZpZGVyKCdyb3V0ZXJIZWxwZXInLCByb3V0ZXJIZWxwZXJQcm92aWRlcik7XG5cbiAgICAgICAgcm91dGVySGVscGVyUHJvdmlkZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uUHJvdmlkZXInLCAnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ107XG5cbiAgICAgICAgZnVuY3Rpb24gcm91dGVySGVscGVyUHJvdmlkZXIoJGxvY2F0aW9uUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIC8qIGpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICAgICAgdGhpcy4kZ2V0ID0gUm91dGVySGVscGVyO1xuXG4gICAgICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cbiAgICAgICAgICAgIFJvdXRlckhlbHBlci4kaW5qZWN0ID0gWyckc3RhdGUnXTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gUm91dGVySGVscGVyKCRzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNPdGhlcndpc2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVTdGF0ZXM6IGNvbmZpZ3VyZVN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgZ2V0U3RhdGVzOiBnZXRTdGF0ZXNcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVN0YXRlcyhzdGF0ZXMsIG90aGVyd2lzZVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmZvckVhY2goZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKHN0YXRlLnN0YXRlLCBzdGF0ZS5jb25maWcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyd2lzZVBhdGggJiYgIWhhc090aGVyd2lzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzT3RoZXJ3aXNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2Uob3RoZXJ3aXNlUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRTdGF0ZXMoKSB7IHJldHVybiAkc3RhdGUuZ2V0KCk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLmNvcmUnKVxuICAgICAgICAuZmFjdG9yeSgnZGF0YXNlcnZpY2UnLCBkYXRhc2VydmljZSk7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBkYXRhc2VydmljZSgpIHtcbiAgICAvLyAgICAgdmFyIGlzUHJpbWVkID0gZmFsc2U7XG4gICAgLy8gICAgIHZhciBwcmltZVByb21pc2U7XG5cbiAgICAvLyAgICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgLy8gICAgICAgICBnZXRBdmVuZ2Vyc0Nhc3Q6IGdldEF2ZW5nZXJzQ2FzdCxcbiAgICAvLyAgICAgICAgIGdldEF2ZW5nZXJDb3VudDogZ2V0QXZlbmdlckNvdW50LFxuICAgIC8vICAgICAgICAgZ2V0QXZlbmdlcnM6IGdldEF2ZW5nZXJzLFxuICAgIC8vICAgICAgICAgcmVhZHk6IHJlYWR5XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnMoKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL21hYScpXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oZ2V0QXZlbmdlcnNDb21wbGV0ZSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBleGNlcHRpb24uY2F0Y2hlcignWEhSIEZhaWxlZCBmb3IgZ2V0QXZlbmdlcnMnKShtZXNzYWdlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2Vyc0NvbXBsZXRlKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGEuZGF0YVswXS5kYXRhLnJlc3VsdHM7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VyQ291bnQoKSB7XG4gICAgLy8gICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgIC8vICAgICAgICAgcmV0dXJuIGdldEF2ZW5nZXJzQ2FzdCgpXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oZ2V0QXZlbmdlcnNDYXN0Q29tcGxldGUpXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKGV4Y2VwdGlvbi5jYXRjaGVyKCdYSFIgRmFpbGVkIGZvciBnZXRBdmVuZ2VyQ291bnQnKSk7XG5cbiAgICAvLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzQ2FzdENvbXBsZXRlIChkYXRhKSB7XG4gICAgLy8gICAgICAgICAgICAgY291bnQgPSBkYXRhLmxlbmd0aDtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gJHEud2hlbihjb3VudCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiBnZXRBdmVuZ2Vyc0Nhc3QoKSB7XG4gICAgLy8gICAgICAgICB2YXIgY2FzdCA9IFtcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1JvYmVydCBEb3duZXkgSnIuJywgY2hhcmFjdGVyOiAnVG9ueSBTdGFyayAvIElyb24gTWFuJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdDaHJpcyBIZW1zd29ydGgnLCBjaGFyYWN0ZXI6ICdUaG9yJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdDaHJpcyBFdmFucycsIGNoYXJhY3RlcjogJ1N0ZXZlIFJvZ2VycyAvIENhcHRhaW4gQW1lcmljYSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnTWFyayBSdWZmYWxvJywgY2hhcmFjdGVyOiAnQnJ1Y2UgQmFubmVyIC8gVGhlIEh1bGsnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1NjYXJsZXR0IEpvaGFuc3NvbicsIGNoYXJhY3RlcjogJ05hdGFzaGEgUm9tYW5vZmYgLyBCbGFjayBXaWRvdyd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnSmVyZW15IFJlbm5lcicsIGNoYXJhY3RlcjogJ0NsaW50IEJhcnRvbiAvIEhhd2tleWUnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0d3eW5ldGggUGFsdHJvdycsIGNoYXJhY3RlcjogJ1BlcHBlciBQb3R0cyd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnU2FtdWVsIEwuIEphY2tzb24nLCBjaGFyYWN0ZXI6ICdOaWNrIEZ1cnknfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1BhdWwgQmV0dGFueScsIGNoYXJhY3RlcjogJ0phcnZpcyd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnVG9tIEhpZGRsZXN0b24nLCBjaGFyYWN0ZXI6ICdMb2tpJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdDbGFyayBHcmVnZycsIGNoYXJhY3RlcjogJ0FnZW50IFBoaWwgQ291bHNvbid9XG4gICAgLy8gICAgICAgICBdO1xuICAgIC8vICAgICAgICAgcmV0dXJuICRxLndoZW4oY2FzdCk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiBwcmltZSgpIHtcbiAgICAvLyAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UuXG4gICAgLy8gICAgICAgICBpZiAocHJpbWVQcm9taXNlKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHByaW1lUHJvbWlzZTtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgcHJpbWVQcm9taXNlID0gJHEud2hlbih0cnVlKS50aGVuKHN1Y2Nlc3MpO1xuICAgIC8vICAgICAgICAgcmV0dXJuIHByaW1lUHJvbWlzZTtcblxuICAgIC8vICAgICAgICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAvLyAgICAgICAgICAgICBpc1ByaW1lZCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1ByaW1lZCBkYXRhJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiByZWFkeShuZXh0UHJvbWlzZXMpIHtcbiAgICAvLyAgICAgICAgIHZhciByZWFkeVByb21pc2UgPSBwcmltZVByb21pc2UgfHwgcHJpbWUoKTtcblxuICAgIC8vICAgICAgICAgcmV0dXJuIHJlYWR5UHJvbWlzZVxuICAgIC8vICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gJHEuYWxsKG5leHRQcm9taXNlcyk7IH0pXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKGV4Y2VwdGlvbi5jYXRjaGVyKCdcInJlYWR5XCIgZnVuY3Rpb24gZmFpbGVkJykpO1xuICAgIC8vICAgICB9XG5cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uY2hhdCcsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uY2hhdCcpXG4gICAgICAgIC5jb250cm9sbGVyKCdjaGF0Q3RybCcsIGNoYXRDdHJsKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIGNoYXRDdHJsKCRzY29wZSkge1xuLy8gICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cbi8vICAgICAgICAgdmFyIHZtID0gdGhpcztcbi8vICAgICAgICAgdm0uYXZlbmdlcnMgPSBbXTtcbi8vICAgICAgICAgdm0udGl0bGUgPSAnQXZlbmdlcnMnO1xuXG4vLyAgICAgICAgIGFjdGl2YXRlKCk7XG5cbi8vICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4vLyAvLyAgICAgICAgICAgIFVzaW5nIGEgcmVzb2x2ZXIgb24gYWxsIHJvdXRlcyBvciBkYXRhc2VydmljZS5yZWFkeSBpbiBldmVyeSBjb250cm9sbGVyXG4vLyAvLyAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtnZXRBdmVuZ2VycygpXTtcbi8vIC8vICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLnJlYWR5KHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICByZXR1cm4gZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdBY3RpdmF0ZWQgQXZlbmdlcnMgVmlldycpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VycygpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5nZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuLy8gICAgICAgICAgICAgICAgIHZtLmF2ZW5nZXJzID0gZGF0YTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdm0uYXZlbmdlcnM7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuICAgIH1cbn0pKCk7IiwiIiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzbScsIFtcblxuICAgICAgICAvKlxuICAgICAgICAgKiAzcmQgcGFydHkgbGlicmFyaWVzXG4gICAgICAgICAqL1xuXG4gICAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICogT3JkZXIgaXMgbm90IGltcG9ydGFudC4gQW5ndWxhciBtYWtlcyBhXG4gICAgICAgICAqIHBhc3MgdG8gcmVnaXN0ZXIgYWxsIG9mIHRoZSBtb2R1bGVzIGxpc3RlZFxuICAgICAgICAgKiBhbmQgdGhlbiB3aGVuIGFwcC5kYXNoYm9hcmQgdHJpZXMgdG8gdXNlIGFwcC5kYXRhLFxuICAgICAgICAgKiBpdHMgY29tcG9uZW50cyBhcmUgYXZhaWxhYmxlLlxuICAgICAgICAgKi9cblxuICAgICAgICAvKlxuICAgICAgICAgKiBFdmVyeWJvZHkgaGFzIGFjY2VzcyB0byB0aGVzZS5cbiAgICAgICAgICogV2UgY291bGQgcGxhY2UgdGhlc2UgdW5kZXIgZXZlcnkgZmVhdHVyZSBhcmVhLFxuICAgICAgICAgKiBidXQgdGhpcyBpcyBlYXNpZXIgdG8gbWFpbnRhaW4uXG4gICAgICAgICAqLyBcblxuICAgICAgICAnc20uY29yZScsXG5cbiAgICAgICAgLypcbiAgICAgICAgICogRmVhdHVyZSBhcmVhc1xuICAgICAgICAgKi9cbiAgICAgICAgIFxuICAgICAgICAnc20uY2MnLFxuICAgICAgICAnc20uY2hhdCcsXG4gICAgICAgICdzbS5zZXNzaW9uJyxcbiAgICAgICAgJ3NtLnNjaGVkdWxlJ1xuICAgIF0pO1xuXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==