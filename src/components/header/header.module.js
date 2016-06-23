'use strict';

var angular = require('angular');

// module components
var headerDir = require('./directives/header/header.directive');

// module
var moduleName = 'at.headerModule';
var apiModule = angular.module(moduleName, []);

apiModule.directive('atHeader', headerDir);

module.exports = moduleName;
