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
					state: '/schedule',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jYy5tb2R1bGUuanMiLCJjb21tb24vbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJzY2hlZHVsZS9zY2hlZHVsZS5tb2R1bGUuanMiLCJzY2hlZHVsZS9zY2hlZHVsZS5yb3V0ZXMuanMiLCJzY2hlZHVsZS9zY2hlZHVsZS5jb250cm9sbGVyLmpzIiwic2lnbmluL3NpZ25pbi5tb2R1bGUuanMiLCJzaWduaW4vc2lnbmluLmpzIiwic2Vzc2lvbi9zZXNzaW9uLm1vZHVsZS5qcyIsInNlc3Npb24vc2Vzc2lvbi5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJjb3JlL3JvdXRlci5wcm92aWRlci5qcyIsImNvcmUvZGF0YXNlcnZpY2UuanMiLCJjaGF0L2NoYXQubW9kdWxlLmpzIiwiY2hhdC9jaGF0LmN0cmwuanMiLCJhZG1pbi9hZG1pbi5tb2R1bGUuanMiLCJzbS5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ3NtLmNjJyxbXSk7XG5cdFxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5jYycpXG5cdFx0LmRpcmVjdGl2ZSgnbmF2QmFyJywgbmF2QmFyKTtcblxuXHRmdW5jdGlvbiBuYXZCYXIoKSB7XG5cblx0XHR2YXIgZGlyZWN0aXZlID0ge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL25hdmJhci5odG1sJyxcblx0XHRcdHJlc3RyaWN0OiAnQSdcblx0XHR9XG5cblx0XHRyZXR1cm4gZGlyZWN0aXZlO1xuXHR9XG5cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0Jztcblx0YW5ndWxhci5tb2R1bGUoJ3NtLnNjaGVkdWxlJyxbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpe1xuXHQndXNlIHN0cmljdCc7XG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdzbS5zY2hlZHVsZScpXG5cdFx0LnJ1bihhcHBSdW4pXG5cblx0XHRmdW5jdGlvbiBhcHBSdW4ocm91dGVySGVscGVyKXtcblx0XHRcdHJvdXRlckhlbHBlci5jb25maWd1cmVTdGF0ZXMoZ2V0U3RhdGVzKCkpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldFN0YXRlcygpe1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXRlOiAnL3NjaGVkdWxlJyxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHVybDogJy8nLFxuXHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICdjbGllbnQvY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5odG1sJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblxufSkoKTsiLCIiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLnNpZ25pbicsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uc2lnbmluJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ3NpZ25JbkN0cmwnLCBzaWduSW5DdHJsKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIHNpZ25JbkN0cmwoKSB7XG4vLyAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuLy8gICAgICAgICB2YXIgdm0gPSB0aGlzO1xuLy8gICAgICAgICB2bS5hdmVuZ2VycyA9IFtdO1xuLy8gICAgICAgICB2bS50aXRsZSA9ICdBdmVuZ2Vycyc7XG5cbi8vICAgICAgICAgYWN0aXZhdGUoKTtcblxuLy8gICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbi8vIC8vICAgICAgICAgICAgVXNpbmcgYSByZXNvbHZlciBvbiBhbGwgcm91dGVzIG9yIGRhdGFzZXJ2aWNlLnJlYWR5IGluIGV2ZXJ5IGNvbnRyb2xsZXJcbi8vIC8vICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW2dldEF2ZW5nZXJzKCldO1xuLy8gLy8gICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UucmVhZHkocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgIHJldHVybiBnZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0FjdGl2YXRlZCBBdmVuZ2VycyBWaWV3Jyk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLmdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgICAgICAgICAgdm0uYXZlbmdlcnMgPSBkYXRhO1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB2bS5hdmVuZ2Vycztcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLnNlc3Npb24nLCBbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLnNlc3Npb24nKVxuICAgICAgICAuY29udHJvbGxlcignc2Vzc2lvbkN0cmwnLCBzZXNzaW9uQ3RybCk7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBzZXNzaW9uQ3RybCgkc2NvcGUpIHtcbi8vICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4vLyAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4vLyAgICAgICAgIHZtLmF2ZW5nZXJzID0gW107XG4vLyAgICAgICAgIHZtLnRpdGxlID0gJ0F2ZW5nZXJzJztcblxuLy8gICAgICAgICBhY3RpdmF0ZSgpO1xuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuLy8gLy8gICAgICAgICAgICBVc2luZyBhIHJlc29sdmVyIG9uIGFsbCByb3V0ZXMgb3IgZGF0YXNlcnZpY2UucmVhZHkgaW4gZXZlcnkgY29udHJvbGxlclxuLy8gLy8gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbZ2V0QXZlbmdlcnMoKV07XG4vLyAvLyAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5yZWFkeShwcm9taXNlcykudGhlbihmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgcmV0dXJuIGdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnQWN0aXZhdGVkIEF2ZW5nZXJzIFZpZXcnKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnMoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UuZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbi8vICAgICAgICAgICAgICAgICB2bS5hdmVuZ2VycyA9IGRhdGE7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHZtLmF2ZW5nZXJzO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uY29yZScsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uY29yZScpXG4gICAgICAgIC5wcm92aWRlcigncm91dGVySGVscGVyJywgcm91dGVySGVscGVyUHJvdmlkZXIpO1xuXG4gICAgICAgIHJvdXRlckhlbHBlclByb3ZpZGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvblByb3ZpZGVyJywgJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJvdXRlckhlbHBlclByb3ZpZGVyKCRsb2NhdGlvblByb3ZpZGVyLCAkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgICAgICAgIHRoaXMuJGdldCA9IFJvdXRlckhlbHBlcjtcblxuICAgICAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXG4gICAgICAgICAgICBSb3V0ZXJIZWxwZXIuJGluamVjdCA9IFsnJHN0YXRlJ107XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIFJvdXRlckhlbHBlcigkc3RhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzT3RoZXJ3aXNlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2VydmljZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlU3RhdGVzOiBjb25maWd1cmVTdGF0ZXMsXG4gICAgICAgICAgICAgICAgICAgIGdldFN0YXRlczogZ2V0U3RhdGVzXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb25maWd1cmVTdGF0ZXMoc3RhdGVzLCBvdGhlcndpc2VQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZShzdGF0ZS5zdGF0ZSwgc3RhdGUuY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdGhlcndpc2VQYXRoICYmICFoYXNPdGhlcndpc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc090aGVyd2lzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKG90aGVyd2lzZVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0U3RhdGVzKCkgeyByZXR1cm4gJHN0YXRlLmdldCgpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5jb3JlJylcbiAgICAgICAgLmZhY3RvcnkoJ2RhdGFzZXJ2aWNlJywgZGF0YXNlcnZpY2UpO1xuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gZGF0YXNlcnZpY2UoKSB7XG4gICAgLy8gICAgIHZhciBpc1ByaW1lZCA9IGZhbHNlO1xuICAgIC8vICAgICB2YXIgcHJpbWVQcm9taXNlO1xuXG4gICAgLy8gICAgIHZhciBzZXJ2aWNlID0ge1xuICAgIC8vICAgICAgICAgZ2V0QXZlbmdlcnNDYXN0OiBnZXRBdmVuZ2Vyc0Nhc3QsXG4gICAgLy8gICAgICAgICBnZXRBdmVuZ2VyQ291bnQ6IGdldEF2ZW5nZXJDb3VudCxcbiAgICAvLyAgICAgICAgIGdldEF2ZW5nZXJzOiBnZXRBdmVuZ2VycyxcbiAgICAvLyAgICAgICAgIHJlYWR5OiByZWFkeVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9tYWEnKVxuICAgIC8vICAgICAgICAgICAgIC50aGVuKGdldEF2ZW5nZXJzQ29tcGxldGUpXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZXhjZXB0aW9uLmNhdGNoZXIoJ1hIUiBGYWlsZWQgZm9yIGdldEF2ZW5nZXJzJykobWVzc2FnZSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwoJy8nKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnNDb21wbGV0ZShkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBkYXRhLmRhdGFbMF0uZGF0YS5yZXN1bHRzO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlckNvdW50KCkge1xuICAgIC8vICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAvLyAgICAgICAgIHJldHVybiBnZXRBdmVuZ2Vyc0Nhc3QoKVxuICAgIC8vICAgICAgICAgICAgIC50aGVuKGdldEF2ZW5nZXJzQ2FzdENvbXBsZXRlKVxuICAgIC8vICAgICAgICAgICAgIC5jYXRjaChleGNlcHRpb24uY2F0Y2hlcignWEhSIEZhaWxlZCBmb3IgZ2V0QXZlbmdlckNvdW50JykpO1xuXG4gICAgLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2Vyc0Nhc3RDb21wbGV0ZSAoZGF0YSkge1xuICAgIC8vICAgICAgICAgICAgIGNvdW50ID0gZGF0YS5sZW5ndGg7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuICRxLndoZW4oY291bnQpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnNDYXN0KCkge1xuICAgIC8vICAgICAgICAgdmFyIGNhc3QgPSBbXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdSb2JlcnQgRG93bmV5IEpyLicsIGNoYXJhY3RlcjogJ1RvbnkgU3RhcmsgLyBJcm9uIE1hbid9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnQ2hyaXMgSGVtc3dvcnRoJywgY2hhcmFjdGVyOiAnVGhvcid9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnQ2hyaXMgRXZhbnMnLCBjaGFyYWN0ZXI6ICdTdGV2ZSBSb2dlcnMgLyBDYXB0YWluIEFtZXJpY2EnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ01hcmsgUnVmZmFsbycsIGNoYXJhY3RlcjogJ0JydWNlIEJhbm5lciAvIFRoZSBIdWxrJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdTY2FybGV0dCBKb2hhbnNzb24nLCBjaGFyYWN0ZXI6ICdOYXRhc2hhIFJvbWFub2ZmIC8gQmxhY2sgV2lkb3cnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0plcmVteSBSZW5uZXInLCBjaGFyYWN0ZXI6ICdDbGludCBCYXJ0b24gLyBIYXdrZXllJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdHd3luZXRoIFBhbHRyb3cnLCBjaGFyYWN0ZXI6ICdQZXBwZXIgUG90dHMnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1NhbXVlbCBMLiBKYWNrc29uJywgY2hhcmFjdGVyOiAnTmljayBGdXJ5J30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdQYXVsIEJldHRhbnknLCBjaGFyYWN0ZXI6ICdKYXJ2aXMnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1RvbSBIaWRkbGVzdG9uJywgY2hhcmFjdGVyOiAnTG9raSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnQ2xhcmsgR3JlZ2cnLCBjaGFyYWN0ZXI6ICdBZ2VudCBQaGlsIENvdWxzb24nfVxuICAgIC8vICAgICAgICAgXTtcbiAgICAvLyAgICAgICAgIHJldHVybiAkcS53aGVuKGNhc3QpO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gcHJpbWUoKSB7XG4gICAgLy8gICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBvbmx5IGJlIGNhbGxlZCBvbmNlLlxuICAgIC8vICAgICAgICAgaWYgKHByaW1lUHJvbWlzZSkge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBwcmltZVByb21pc2U7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIHByaW1lUHJvbWlzZSA9ICRxLndoZW4odHJ1ZSkudGhlbihzdWNjZXNzKTtcbiAgICAvLyAgICAgICAgIHJldHVybiBwcmltZVByb21pc2U7XG5cbiAgICAvLyAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgLy8gICAgICAgICAgICAgaXNQcmltZWQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdQcmltZWQgZGF0YScpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gcmVhZHkobmV4dFByb21pc2VzKSB7XG4gICAgLy8gICAgICAgICB2YXIgcmVhZHlQcm9taXNlID0gcHJpbWVQcm9taXNlIHx8IHByaW1lKCk7XG5cbiAgICAvLyAgICAgICAgIHJldHVybiByZWFkeVByb21pc2VcbiAgICAvLyAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuICRxLmFsbChuZXh0UHJvbWlzZXMpOyB9KVxuICAgIC8vICAgICAgICAgICAgIC5jYXRjaChleGNlcHRpb24uY2F0Y2hlcignXCJyZWFkeVwiIGZ1bmN0aW9uIGZhaWxlZCcpKTtcbiAgICAvLyAgICAgfVxuXG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLmNoYXQnLCBbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLmNoYXQnKVxuICAgICAgICAuY29udHJvbGxlcignY2hhdEN0cmwnLCBjaGF0Q3RybCk7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBjaGF0Q3RybCgkc2NvcGUpIHtcbi8vICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4vLyAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4vLyAgICAgICAgIHZtLmF2ZW5nZXJzID0gW107XG4vLyAgICAgICAgIHZtLnRpdGxlID0gJ0F2ZW5nZXJzJztcblxuLy8gICAgICAgICBhY3RpdmF0ZSgpO1xuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuLy8gLy8gICAgICAgICAgICBVc2luZyBhIHJlc29sdmVyIG9uIGFsbCByb3V0ZXMgb3IgZGF0YXNlcnZpY2UucmVhZHkgaW4gZXZlcnkgY29udHJvbGxlclxuLy8gLy8gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbZ2V0QXZlbmdlcnMoKV07XG4vLyAvLyAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5yZWFkeShwcm9taXNlcykudGhlbihmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgcmV0dXJuIGdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnQWN0aXZhdGVkIEF2ZW5nZXJzIFZpZXcnKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnMoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UuZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbi8vICAgICAgICAgICAgICAgICB2bS5hdmVuZ2VycyA9IGRhdGE7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHZtLmF2ZW5nZXJzO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbiAgICB9XG59KSgpOyIsIiIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20nLCBbXG5cbiAgICAgICAgLypcbiAgICAgICAgICogM3JkIHBhcnR5IGxpYnJhcmllc1xuICAgICAgICAgKi9cblxuICAgICAgICAndWkucm91dGVyJyxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAqIE9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuIEFuZ3VsYXIgbWFrZXMgYVxuICAgICAgICAgKiBwYXNzIHRvIHJlZ2lzdGVyIGFsbCBvZiB0aGUgbW9kdWxlcyBsaXN0ZWRcbiAgICAgICAgICogYW5kIHRoZW4gd2hlbiBhcHAuZGFzaGJvYXJkIHRyaWVzIHRvIHVzZSBhcHAuZGF0YSxcbiAgICAgICAgICogaXRzIGNvbXBvbmVudHMgYXJlIGF2YWlsYWJsZS5cbiAgICAgICAgICovXG5cbiAgICAgICAgLypcbiAgICAgICAgICogRXZlcnlib2R5IGhhcyBhY2Nlc3MgdG8gdGhlc2UuXG4gICAgICAgICAqIFdlIGNvdWxkIHBsYWNlIHRoZXNlIHVuZGVyIGV2ZXJ5IGZlYXR1cmUgYXJlYSxcbiAgICAgICAgICogYnV0IHRoaXMgaXMgZWFzaWVyIHRvIG1haW50YWluLlxuICAgICAgICAgKi8gXG5cbiAgICAgICAgJ3NtLmNvcmUnLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIEZlYXR1cmUgYXJlYXNcbiAgICAgICAgICovXG4gICAgICAgICBcbiAgICAgICAgJ3NtLmNjJyxcbiAgICAgICAgJ3NtLmNoYXQnLFxuICAgICAgICAnc20uc2Vzc2lvbicsXG4gICAgICAgICdzbS5zY2hlZHVsZSdcbiAgICBdKTtcblxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=