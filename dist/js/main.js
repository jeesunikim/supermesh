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
(function() {
    'use strict';

    angular.module('sm.map', []);
})();
(function() {
    'use strict';

    angular
        .module('sm.map')
        .controller('mapCtrl', mapCtrl);

    /* @ngInject */
    function mapCtrl($scope) {
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
         
        'sm.chat',
        'sm.map',
        'sm.session'
        
    ]);

})();
(function() {
    'use strict';

    angular.module('sm.firebase',[])
    	.constant('FIREBASE_URI', 'https://luminous-inferno-640.firebaseio.com');

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29yZS5tb2R1bGUuanMiLCJjb3JlL2RhdGFzZXJ2aWNlLmpzIiwic2lnbmluL3NpZ25pbi5tb2R1bGUuanMiLCJzaWduaW4vc2lnbmluLmpzIiwic2Vzc2lvbnMvc2Vzc2lvbi5tb2R1bGUuanMiLCJzZXNzaW9ucy9zZXNzaW9uLmpzIiwibWFwL21hcC5tb2R1bGUuanMiLCJtYXAvbWFwLmN0cmwuanMiLCJjaGF0L2NoYXQubW9kdWxlLmpzIiwiY2hhdC9jaGF0LmRpci5qcyIsImNoYXQvY2hhdC5jdHJsLmpzIiwic20ubW9kdWxlLmpzIiwic20uZmlyZWJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLmNvcmUnLCBbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLmNvcmUnKVxuICAgICAgICAuZmFjdG9yeSgnZGF0YXNlcnZpY2UnLCBkYXRhc2VydmljZSk7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBkYXRhc2VydmljZSgpIHtcbiAgICAvLyAgICAgdmFyIGlzUHJpbWVkID0gZmFsc2U7XG4gICAgLy8gICAgIHZhciBwcmltZVByb21pc2U7XG5cbiAgICAvLyAgICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgLy8gICAgICAgICBnZXRBdmVuZ2Vyc0Nhc3Q6IGdldEF2ZW5nZXJzQ2FzdCxcbiAgICAvLyAgICAgICAgIGdldEF2ZW5nZXJDb3VudDogZ2V0QXZlbmdlckNvdW50LFxuICAgIC8vICAgICAgICAgZ2V0QXZlbmdlcnM6IGdldEF2ZW5nZXJzLFxuICAgIC8vICAgICAgICAgcmVhZHk6IHJlYWR5XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICAvLyAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnMoKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL21hYScpXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oZ2V0QXZlbmdlcnNDb21wbGV0ZSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBleGNlcHRpb24uY2F0Y2hlcignWEhSIEZhaWxlZCBmb3IgZ2V0QXZlbmdlcnMnKShtZXNzYWdlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2Vyc0NvbXBsZXRlKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGEuZGF0YVswXS5kYXRhLnJlc3VsdHM7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VyQ291bnQoKSB7XG4gICAgLy8gICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgIC8vICAgICAgICAgcmV0dXJuIGdldEF2ZW5nZXJzQ2FzdCgpXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oZ2V0QXZlbmdlcnNDYXN0Q29tcGxldGUpXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKGV4Y2VwdGlvbi5jYXRjaGVyKCdYSFIgRmFpbGVkIGZvciBnZXRBdmVuZ2VyQ291bnQnKSk7XG5cbiAgICAvLyAgICAgICAgIGZ1bmN0aW9uIGdldEF2ZW5nZXJzQ2FzdENvbXBsZXRlIChkYXRhKSB7XG4gICAgLy8gICAgICAgICAgICAgY291bnQgPSBkYXRhLmxlbmd0aDtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gJHEud2hlbihjb3VudCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiBnZXRBdmVuZ2Vyc0Nhc3QoKSB7XG4gICAgLy8gICAgICAgICB2YXIgY2FzdCA9IFtcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1JvYmVydCBEb3duZXkgSnIuJywgY2hhcmFjdGVyOiAnVG9ueSBTdGFyayAvIElyb24gTWFuJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdDaHJpcyBIZW1zd29ydGgnLCBjaGFyYWN0ZXI6ICdUaG9yJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdDaHJpcyBFdmFucycsIGNoYXJhY3RlcjogJ1N0ZXZlIFJvZ2VycyAvIENhcHRhaW4gQW1lcmljYSd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnTWFyayBSdWZmYWxvJywgY2hhcmFjdGVyOiAnQnJ1Y2UgQmFubmVyIC8gVGhlIEh1bGsnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1NjYXJsZXR0IEpvaGFuc3NvbicsIGNoYXJhY3RlcjogJ05hdGFzaGEgUm9tYW5vZmYgLyBCbGFjayBXaWRvdyd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnSmVyZW15IFJlbm5lcicsIGNoYXJhY3RlcjogJ0NsaW50IEJhcnRvbiAvIEhhd2tleWUnfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ0d3eW5ldGggUGFsdHJvdycsIGNoYXJhY3RlcjogJ1BlcHBlciBQb3R0cyd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnU2FtdWVsIEwuIEphY2tzb24nLCBjaGFyYWN0ZXI6ICdOaWNrIEZ1cnknfSxcbiAgICAvLyAgICAgICAgICAgICB7bmFtZTogJ1BhdWwgQmV0dGFueScsIGNoYXJhY3RlcjogJ0phcnZpcyd9LFxuICAgIC8vICAgICAgICAgICAgIHtuYW1lOiAnVG9tIEhpZGRsZXN0b24nLCBjaGFyYWN0ZXI6ICdMb2tpJ30sXG4gICAgLy8gICAgICAgICAgICAge25hbWU6ICdDbGFyayBHcmVnZycsIGNoYXJhY3RlcjogJ0FnZW50IFBoaWwgQ291bHNvbid9XG4gICAgLy8gICAgICAgICBdO1xuICAgIC8vICAgICAgICAgcmV0dXJuICRxLndoZW4oY2FzdCk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiBwcmltZSgpIHtcbiAgICAvLyAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UuXG4gICAgLy8gICAgICAgICBpZiAocHJpbWVQcm9taXNlKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHByaW1lUHJvbWlzZTtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgcHJpbWVQcm9taXNlID0gJHEud2hlbih0cnVlKS50aGVuKHN1Y2Nlc3MpO1xuICAgIC8vICAgICAgICAgcmV0dXJuIHByaW1lUHJvbWlzZTtcblxuICAgIC8vICAgICAgICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAvLyAgICAgICAgICAgICBpc1ByaW1lZCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1ByaW1lZCBkYXRhJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBmdW5jdGlvbiByZWFkeShuZXh0UHJvbWlzZXMpIHtcbiAgICAvLyAgICAgICAgIHZhciByZWFkeVByb21pc2UgPSBwcmltZVByb21pc2UgfHwgcHJpbWUoKTtcblxuICAgIC8vICAgICAgICAgcmV0dXJuIHJlYWR5UHJvbWlzZVxuICAgIC8vICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gJHEuYWxsKG5leHRQcm9taXNlcyk7IH0pXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKGV4Y2VwdGlvbi5jYXRjaGVyKCdcInJlYWR5XCIgZnVuY3Rpb24gZmFpbGVkJykpO1xuICAgIC8vICAgICB9XG5cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uc2lnbmluJywgW10pO1xufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdzbS5zaWduaW4nKVxuICAgICAgICAuY29udHJvbGxlcignc2lnbkluQ3RybCcsIHNpZ25JbkN0cmwpO1xuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gc2lnbkluQ3RybCgpIHtcbi8vICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4vLyAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4vLyAgICAgICAgIHZtLmF2ZW5nZXJzID0gW107XG4vLyAgICAgICAgIHZtLnRpdGxlID0gJ0F2ZW5nZXJzJztcblxuLy8gICAgICAgICBhY3RpdmF0ZSgpO1xuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuLy8gLy8gICAgICAgICAgICBVc2luZyBhIHJlc29sdmVyIG9uIGFsbCByb3V0ZXMgb3IgZGF0YXNlcnZpY2UucmVhZHkgaW4gZXZlcnkgY29udHJvbGxlclxuLy8gLy8gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbZ2V0QXZlbmdlcnMoKV07XG4vLyAvLyAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5yZWFkeShwcm9taXNlcykudGhlbihmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgcmV0dXJuIGdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnQWN0aXZhdGVkIEF2ZW5nZXJzIFZpZXcnKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnMoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UuZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbi8vICAgICAgICAgICAgICAgICB2bS5hdmVuZ2VycyA9IGRhdGE7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHZtLmF2ZW5nZXJzO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20uc2Vzc2lvbicsIFtdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnc20uc2Vzc2lvbicpXG4gICAgICAgIC5jb250cm9sbGVyKCdzZXNzaW9uQ3RybCcsIHNlc3Npb25DdHJsKTtcblxuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIHNlc3Npb25DdHJsKCRzY29wZSkge1xuLy8gICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cbi8vICAgICAgICAgdmFyIHZtID0gdGhpcztcbi8vICAgICAgICAgdm0uYXZlbmdlcnMgPSBbXTtcbi8vICAgICAgICAgdm0udGl0bGUgPSAnQXZlbmdlcnMnO1xuXG4vLyAgICAgICAgIGFjdGl2YXRlKCk7XG5cbi8vICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4vLyAvLyAgICAgICAgICAgIFVzaW5nIGEgcmVzb2x2ZXIgb24gYWxsIHJvdXRlcyBvciBkYXRhc2VydmljZS5yZWFkeSBpbiBldmVyeSBjb250cm9sbGVyXG4vLyAvLyAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtnZXRBdmVuZ2VycygpXTtcbi8vIC8vICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLnJlYWR5KHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICByZXR1cm4gZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdBY3RpdmF0ZWQgQXZlbmdlcnMgVmlldycpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VycygpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5nZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuLy8gICAgICAgICAgICAgICAgIHZtLmF2ZW5nZXJzID0gZGF0YTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdm0uYXZlbmdlcnM7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzbS5tYXAnLCBbXSk7XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLm1hcCcpXG4gICAgICAgIC5jb250cm9sbGVyKCdtYXBDdHJsJywgbWFwQ3RybCk7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBtYXBDdHJsKCRzY29wZSkge1xuLy8gICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cbi8vICAgICAgICAgdmFyIHZtID0gdGhpcztcbi8vICAgICAgICAgdm0uYXZlbmdlcnMgPSBbXTtcbi8vICAgICAgICAgdm0udGl0bGUgPSAnQXZlbmdlcnMnO1xuXG4vLyAgICAgICAgIGFjdGl2YXRlKCk7XG5cbi8vICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4vLyAvLyAgICAgICAgICAgIFVzaW5nIGEgcmVzb2x2ZXIgb24gYWxsIHJvdXRlcyBvciBkYXRhc2VydmljZS5yZWFkeSBpbiBldmVyeSBjb250cm9sbGVyXG4vLyAvLyAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtnZXRBdmVuZ2VycygpXTtcbi8vIC8vICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXJ2aWNlLnJlYWR5KHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICByZXR1cm4gZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdBY3RpdmF0ZWQgQXZlbmdlcnMgVmlldycpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmdW5jdGlvbiBnZXRBdmVuZ2VycygpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5nZXRBdmVuZ2VycygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuLy8gICAgICAgICAgICAgICAgIHZtLmF2ZW5nZXJzID0gZGF0YTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdm0uYXZlbmdlcnM7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzbS5jaGF0JywgW10pO1xufSkoKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgYWxleGFuZGVya296b3Zza2kgb24gOS8yNC8xNS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyXG4gICAgLm1vZHVsZSgnc20uY2hhdCcpXG4gICAgLmRpcmVjdGl2ZSgnY2hhdE1vZHVsZScsIGNoYXRNb2R1bGUpO1xuXG5mdW5jdGlvbiBjaGF0TW9kdWxlKCl7XG5cblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgcmVzdHJpY3Q6J0UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDonL2NsaWVudC9jb21wb25lbnRzL2NoYXQvY2hhdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2NoYXRDdHJsJ1xuICAgICAgICAvL2xpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCAgYXR0cil7XG4gICAgICAgIC8vICAgIGNvbnNvbGUuZGVidWcoc2NvcGUpO1xuICAgICAgICAvL1xuICAgICAgICAvL31cblxuICAgIH07XG5cblxufSIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3NtLmNoYXQnKVxuICAgICAgICAuY29udHJvbGxlcignY2hhdEN0cmwnLCBjaGF0Q3RybCk7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBjaGF0Q3RybCgkc2NvcGUpIHtcblxuICAgICAgICAkc2NvcGUuZmlyZT1cImhlbGxvXCI7XG5cbi8vICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4vLyAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4vLyAgICAgICAgIHZtLmF2ZW5nZXJzID0gW107XG4vLyAgICAgICAgIHZtLnRpdGxlID0gJ0F2ZW5nZXJzJztcblxuLy8gICAgICAgICBhY3RpdmF0ZSgpO1xuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuLy8gLy8gICAgICAgICAgICBVc2luZyBhIHJlc29sdmVyIG9uIGFsbCByb3V0ZXMgb3IgZGF0YXNlcnZpY2UucmVhZHkgaW4gZXZlcnkgY29udHJvbGxlclxuLy8gLy8gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbZ2V0QXZlbmdlcnMoKV07XG4vLyAvLyAgICAgICAgICAgIHJldHVybiBkYXRhc2VydmljZS5yZWFkeShwcm9taXNlcykudGhlbihmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgcmV0dXJuIGdldEF2ZW5nZXJzKCkudGhlbihmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnQWN0aXZhdGVkIEF2ZW5nZXJzIFZpZXcnKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZnVuY3Rpb24gZ2V0QXZlbmdlcnMoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gZGF0YXNlcnZpY2UuZ2V0QXZlbmdlcnMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbi8vICAgICAgICAgICAgICAgICB2bS5hdmVuZ2VycyA9IGRhdGE7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHZtLmF2ZW5nZXJzO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc20nLCBbXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgKiBPcmRlciBpcyBub3QgaW1wb3J0YW50LiBBbmd1bGFyIG1ha2VzIGFcbiAgICAgICAgICogcGFzcyB0byByZWdpc3RlciBhbGwgb2YgdGhlIG1vZHVsZXMgbGlzdGVkXG4gICAgICAgICAqIGFuZCB0aGVuIHdoZW4gYXBwLmRhc2hib2FyZCB0cmllcyB0byB1c2UgYXBwLmRhdGEsXG4gICAgICAgICAqIGl0cyBjb21wb25lbnRzIGFyZSBhdmFpbGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICAgXG4gICAgICAgICAvKlxuICAgICAgICAgKiAzcmQgcGFydHkgbGlicmFyaWVzXG4gICAgICAgICAqL1xuXG4gICAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgICAnc20uZmlyZWJhc2UnLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIEV2ZXJ5Ym9keSBoYXMgYWNjZXNzIHRvIHRoZXNlLlxuICAgICAgICAgKiBXZSBjb3VsZCBwbGFjZSB0aGVzZSB1bmRlciBldmVyeSBmZWF0dXJlIGFyZWEsXG4gICAgICAgICAqIGJ1dCB0aGlzIGlzIGVhc2llciB0byBtYWludGFpbi5cbiAgICAgICAgICovIFxuXG4gICAgICAgICdzbS5jb3JlJyxcblxuICAgICAgICAvKlxuICAgICAgICAgKiBGZWF0dXJlIGFyZWFzXG4gICAgICAgICAqL1xuICAgICAgICAgXG4gICAgICAgICdzbS5jaGF0JyxcbiAgICAgICAgJ3NtLm1hcCcsXG4gICAgICAgICdzbS5zZXNzaW9uJ1xuICAgICAgICBcbiAgICBdKTtcblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtLmZpcmViYXNlJyxbXSlcbiAgICBcdC5jb25zdGFudCgnRklSRUJBU0VfVVJJJywgJ2h0dHBzOi8vbHVtaW5vdXMtaW5mZXJuby02NDAuZmlyZWJhc2Vpby5jb20nKTtcblxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=