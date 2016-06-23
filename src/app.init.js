'use strict';

// libraries
require('angular');
require('angular-ui-router');

// component modules
require('./components/**/*.module.js', {mode: 'expand'});

// base module
require('./app.module.js'); 
