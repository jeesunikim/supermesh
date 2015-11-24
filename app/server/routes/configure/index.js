'use strict';

module.exports = function(app) {

    // setValue and getValue are merely alias
    // for app.set and app.get used in the less
    // common way of setting application variables.
    app.setValue = app.set.bind(app);

    app.getValue = function(path) {
        return app.get(path);
    };

    require('./parsing.middleware')(app); 
    require('./requestState.middleware')(app);
    require('./error.middleware')(app);

    // Logging middleware, set as application
    // variable inside of server/app/configure/app-variables.js

    require('./statics.middleware')(app);

    app.use(app.getValue('log'));

};

// 'use strict';

// var app = require('express')();
// var path = require('path');

// app.use(require('./parsing.middleware'));

// app.use(require('./requestState.middleware'));

// app.use(require('./error.middleware'));

// app.use(require('./statics.middleware'));

// module.exports = app;