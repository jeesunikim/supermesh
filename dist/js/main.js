(function() {
    'use strict';

    angular.module('sm', [
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
         
        'sm.chat',
        'sm.map',
        'sm.session'
    ]);

})();
(function() {
    'use strict';

    angular
        .module('sm.chat')
        .controller('Chat', Chat);

    /* @ngInject */
    function Chat() {
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
    // function dataservice() {
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

    // }
})();
(function() {
    'use strict';

    angular
        .module('sm.signin')
        .controller('SignIn', SignIn);

    /* @ngInject */
    function SignIn() {
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

    angular.module('sm.signin', []);
})();
(function() {
    'use strict';

    angular
        .module('sm.map')
        .controller('Map', Map);

    /* @ngInject */
    function Map() {
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

    angular.module('sm.map', []);
})();
(function() {
    'use strict';

    angular
        .module('sm.session')
        .controller('Session', Session);

    /* @ngInject */
    function Session() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtLm1vZHVsZS5qcyIsImNoYXQvY2hhdC5qcyIsImNoYXQvY2hhdC5tb2R1bGUuanMiLCJjb3JlL2NvcmUubW9kdWxlLmpzIiwiY29yZS9kYXRhc2VydmljZS5qcyIsInNpZ25pbi9zaWduaW4uanMiLCJzaWduaW4vc2lnbmluLm1vZHVsZS5qcyIsIm1hcC9tYXAuanMiLCJtYXAvbWFwLm1vZHVsZS5qcyIsInNlc3Npb25zL3Nlc3Npb24uanMiLCJzZXNzaW9ucy9zZXNzaW9uLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzbScsIFtcbiAgICAgICAgLypcbiAgICAgICAgICogT3JkZXIgaXMgbm90IGltcG9ydGFudC4gQW5ndWxhciBtYWtlcyBhXG4gICAgICAgICAqIHBhc3MgdG8gcmVnaXN0ZXIgYWxsIG9mIHRoZSBtb2R1bGVzIGxpc3RlZFxuICAgICAgICAgKiBhbmQgdGhlbiB3aGVuIGFwcC5kYXNoYm9hcmQgdHJpZXMgdG8gdXNlIGFwcC5kYXRhLFxuICAgICAgICAgKiBpdHMgY29tcG9uZW50cyBhcmUgYXZhaWxhYmxlLlxuICAgICAgICAgKi9cblxuICAgICAgICAvKlxuICAgICAgICAgKiBFdmVyeWJvZHkgaGFzIGFjY2VzcyB0byB0aGVzZS5cbiAgICAgICAgICogV2UgY291bGQgcGxhY2UgdGhlc2UgdW5kZXIgZXZlcnkgZmVhdHVyZSBhcmVhLFxuICAgICAgICAgKiBidXQgdGhpcyBpcyBlYXNpZXIgdG8gbWFpbnRhaW4uXG4gICAgICAgICAqLyBcblxuICAgICAgICAnc20uY29yZScsXG5cbiAgICAgICAgLypcbiAgICAgICAgICogRmVhdHVyZSBhcmVhc1xuICAgICAgICAgKi9cbiAgICAgICAgIFxuICAgICAgICAnc20uY2hhdCcsXG4gICAgICAgICdzbS5tYXAnLFxuICAgICAgICAnc20uc2Vzc2lvbidcbiAgICBdKTtcblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5jaGF0JylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0NoYXQnLCBDaGF0KTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIENoYXQoKSB7XG4vLyAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuLy8gICAgICAgICB2YXIgdm0gPSB0aGlzO1xuLy8gICAgICAgICB2bS5hdmVuZ2VycyA9IFtdO1xuLy8gICAgICAgICB2bS50aXRsZSA9ICdBdmVuZ2Vycyc7XG5cbi8vICAgICAgICAgYWN0aXZhdGUoKTtcblxuLy8gICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbi8vIC8vICAgICAgICAgICAgVXNpbmcgYSByZXNvbHZlciBvbiBhbGwgcm91dGVzIG9yIGRhdGFzZXJ2aWNlLnJlYWR5IGluIGV2ZXJ5IGNvbnRyb2xsZXJcbi8vIC8vICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW2dldEF2ZW5nZXJzKCldO1xuLy8gLy8gICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UucmVhZHkocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgIHJldHVybiBnZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0FjdGl2YXRlZCBBdmVuZ2VycyBWaWV3Jyk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLmdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgICAgICAgICAgdm0uYXZlbmdlcnMgPSBkYXRhO1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB2bS5hdmVuZ2Vycztcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLmNoYXQnLCBbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uY29yZScsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uY29yZScpXG4gICAgICAgIC5mYWN0b3J5KCdkYXRhc2VydmljZScsIGRhdGFzZXJ2aWNlKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIC8vIGZ1bmN0aW9uIGRhdGFzZXJ2aWNlKCkge1xuICAgIC8vICAgICB2YXIgaXNQcmltZWQgPSBmYWxzZTtcbiAgICAvLyAgICAgdmFyIHByaW1lUHJvbWlzZTtcblxuICAgIC8vICAgICB2YXIgc2VydmljZSA9IHtcbiAgICAvLyAgICAgICAgIGdldEF2ZW5nZXJzQ2FzdDogZ2V0QXZlbmdlcnNDYXN0LFxuICAgIC8vICAgICAgICAgZ2V0QXZlbmdlckNvdW50OiBnZXRBdmVuZ2VyQ291bnQsXG4gICAgLy8gICAgICAgICBnZXRBdmVuZ2VyczogZ2V0QXZlbmdlcnMsXG4gICAgLy8gICAgICAgICByZWFkeTogcmVhZHlcbiAgICAvLyAgICAgfTtcblxuICAgIC8vICAgICByZXR1cm4gc2VydmljZTtcblxuICAgIC8vICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VycygpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvbWFhJylcbiAgICAvLyAgICAgICAgICAgICAudGhlbihnZXRBdmVuZ2Vyc0NvbXBsZXRlKVxuICAgIC8vICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGV4Y2VwdGlvbi5jYXRjaGVyKCdYSFIgRmFpbGVkIGZvciBnZXRBdmVuZ2VycycpKG1lc3NhZ2UpO1xuICAgIC8vICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvJyk7XG4gICAgLy8gICAgICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzQ29tcGxldGUoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gZGF0YS5kYXRhWzBdLmRhdGEucmVzdWx0cztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJDb3VudCgpIHtcbiAgICAvLyAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgLy8gICAgICAgICByZXR1cm4gZ2V0QXZlbmdlcnNDYXN0KClcbiAgICAvLyAgICAgICAgICAgICAudGhlbihnZXRBdmVuZ2Vyc0Nhc3RDb21wbGV0ZSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZXhjZXB0aW9uLmNhdGNoZXIoJ1hIUiBGYWlsZWQgZm9yIGdldEF2ZW5nZXJDb3VudCcpKTtcblxuICAgIC8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnNDYXN0Q29tcGxldGUgKGRhdGEpIHtcbiAgICAvLyAgICAgICAgICAgICBjb3VudCA9IGRhdGEubGVuZ3RoO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiAkcS53aGVuKGNvdW50KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzQ2FzdCgpIHtcbiAgICAvLyAgICAgICAgIHZhciBjYXN0ID0gW1xuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnUm9iZXJ0IERvd25leSBKci4nLCBjaGFyYWN0ZXI6ICdUb255IFN0YXJrIC8gSXJvbiBNYW4nfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0NocmlzIEhlbXN3b3J0aCcsIGNoYXJhY3RlcjogJ1Rob3InfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0NocmlzIEV2YW5zJywgY2hhcmFjdGVyOiAnU3RldmUgUm9nZXJzIC8gQ2FwdGFpbiBBbWVyaWNhJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdNYXJrIFJ1ZmZhbG8nLCBjaGFyYWN0ZXI6ICdCcnVjZSBCYW5uZXIgLyBUaGUgSHVsayd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnU2NhcmxldHQgSm9oYW5zc29uJywgY2hhcmFjdGVyOiAnTmF0YXNoYSBSb21hbm9mZiAvIEJsYWNrIFdpZG93J30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdKZXJlbXkgUmVubmVyJywgY2hhcmFjdGVyOiAnQ2xpbnQgQmFydG9uIC8gSGF3a2V5ZSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnR3d5bmV0aCBQYWx0cm93JywgY2hhcmFjdGVyOiAnUGVwcGVyIFBvdHRzJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdTYW11ZWwgTC4gSmFja3NvbicsIGNoYXJhY3RlcjogJ05pY2sgRnVyeSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnUGF1bCBCZXR0YW55JywgY2hhcmFjdGVyOiAnSmFydmlzJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdUb20gSGlkZGxlc3RvbicsIGNoYXJhY3RlcjogJ0xva2knfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0NsYXJrIEdyZWdnJywgY2hhcmFjdGVyOiAnQWdlbnQgUGhpbCBDb3Vsc29uJ31cbiAgICAvLyAgICAgICAgIF07XG4gICAgLy8gICAgICAgICByZXR1cm4gJHEud2hlbihjYXN0KTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIHByaW1lKCkge1xuICAgIC8vICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gb25seSBiZSBjYWxsZWQgb25jZS5cbiAgICAvLyAgICAgICAgIGlmIChwcmltZVByb21pc2UpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gcHJpbWVQcm9taXNlO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBwcmltZVByb21pc2UgPSAkcS53aGVuKHRydWUpLnRoZW4oc3VjY2Vzcyk7XG4gICAgLy8gICAgICAgICByZXR1cm4gcHJpbWVQcm9taXNlO1xuXG4gICAgLy8gICAgICAgICBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgIC8vICAgICAgICAgICAgIGlzUHJpbWVkID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICBsb2dnZXIuaW5mbygnUHJpbWVkIGRhdGEnKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGZ1bmN0aW9uIHJlYWR5KG5leHRQcm9taXNlcykge1xuICAgIC8vICAgICAgICAgdmFyIHJlYWR5UHJvbWlzZSA9IHByaW1lUHJvbWlzZSB8fCBwcmltZSgpO1xuXG4gICAgLy8gICAgICAgICByZXR1cm4gcmVhZHlQcm9taXNlXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiAkcS5hbGwobmV4dFByb21pc2VzKTsgfSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZXhjZXB0aW9uLmNhdGNoZXIoJ1wicmVhZHlcIiBmdW5jdGlvbiBmYWlsZWQnKSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uc2lnbmluJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1NpZ25JbicsIFNpZ25Jbik7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBTaWduSW4oKSB7XG4vLyAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuLy8gICAgICAgICB2YXIgdm0gPSB0aGlzO1xuLy8gICAgICAgICB2bS5hdmVuZ2VycyA9IFtdO1xuLy8gICAgICAgICB2bS50aXRsZSA9ICdBdmVuZ2Vycyc7XG5cbi8vICAgICAgICAgYWN0aXZhdGUoKTtcblxuLy8gICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbi8vIC8vICAgICAgICAgICAgVXNpbmcgYSByZXNvbHZlciBvbiBhbGwgcm91dGVzIG9yIGRhdGFzZXJ2aWNlLnJlYWR5IGluIGV2ZXJ5IGNvbnRyb2xsZXJcbi8vIC8vICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW2dldEF2ZW5nZXJzKCldO1xuLy8gLy8gICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UucmVhZHkocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgIHJldHVybiBnZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0FjdGl2YXRlZCBBdmVuZ2VycyBWaWV3Jyk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLmdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgICAgICAgICAgdm0uYXZlbmdlcnMgPSBkYXRhO1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB2bS5hdmVuZ2Vycztcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLnNpZ25pbicsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20ubWFwJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ01hcCcsIE1hcCk7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBNYXAoKSB7XG4vLyAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuLy8gICAgICAgICB2YXIgdm0gPSB0aGlzO1xuLy8gICAgICAgICB2bS5hdmVuZ2VycyA9IFtdO1xuLy8gICAgICAgICB2bS50aXRsZSA9ICdBdmVuZ2Vycyc7XG5cbi8vICAgICAgICAgYWN0aXZhdGUoKTtcblxuLy8gICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbi8vIC8vICAgICAgICAgICAgVXNpbmcgYSByZXNvbHZlciBvbiBhbGwgcm91dGVzIG9yIGRhdGFzZXJ2aWNlLnJlYWR5IGluIGV2ZXJ5IGNvbnRyb2xsZXJcbi8vIC8vICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW2dldEF2ZW5nZXJzKCldO1xuLy8gLy8gICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UucmVhZHkocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgIHJldHVybiBnZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0FjdGl2YXRlZCBBdmVuZ2VycyBWaWV3Jyk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLmdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgICAgICAgICAgdm0uYXZlbmdlcnMgPSBkYXRhO1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB2bS5hdmVuZ2Vycztcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLm1hcCcsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uc2Vzc2lvbicpXG4gICAgICAgIC5jb250cm9sbGVyKCdTZXNzaW9uJywgU2Vzc2lvbik7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBTZXNzaW9uKCkge1xuLy8gICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cbi8vICAgICAgICAgdmFyIHZtID0gdGhpcztcbi8vICAgICAgICAgdm0uYXZlbmdlcnMgPSBbXTtcbi8vICAgICAgICAgdm0udGl0bGUgPSAnQXZlbmdlcnMnO1xuXG4vLyAgICAgICAgIGFjdGl2YXRlKCk7XG5cbi8vICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4vLyAvLyAgICAgICAgICAgIFVzaW5nIGEgcmVzb2x2ZXIgb24gYWxsIHJvdXRlcyBvciBkYXRhc2VydmljZS5yZWFkeSBpbiBldmVyeSBjb250cm9sbGVyXG4vLyAvLyAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtnZXRBdmVuZ2VycygpXTtcbi8vIC8vICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLnJlYWR5KHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICByZXR1cm4gZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdBY3RpdmF0ZWQgQXZlbmdlcnMgVmlldycpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VycygpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5nZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuLy8gICAgICAgICAgICAgICAgIHZtLmF2ZW5nZXJzID0gZGF0YTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdm0uYXZlbmdlcnM7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzbS5zZXNzaW9uJywgW10pO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=