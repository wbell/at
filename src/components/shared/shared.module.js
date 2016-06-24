'use strict';

var angular = require('angular');

// module components
var langSelectDir = require('./directives/lang-select/langSelect.directive');

// module
var moduleName = 'at.sharedModule';
var sharedModule = angular.module(moduleName, []);

sharedModule.directive('atLangSelect', langSelectDir);

module.exports = moduleName;
