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