'use strict';

// libraries
require('angular');
require('angular-ui-router');
require('angular-sanitize');

// component modules
require('./components/**/*.module.js', {mode: 'expand'});

// base module
require('./app.module.js');
