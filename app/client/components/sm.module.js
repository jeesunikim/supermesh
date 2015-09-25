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
        'sm.schedule',
        'sm.signin'
    ]);

})();