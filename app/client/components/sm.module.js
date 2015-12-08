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
        'ngFileUpload',

        /*
         * Feature areas
         */
         
        'sm.ideas',
        'sm.ideaDetails',
        'sm.message'
    ]);

})();