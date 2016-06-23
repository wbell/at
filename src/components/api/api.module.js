'use strict';

var angular = require('angular');

// module components
var apiFactory = require('./factories/api.factory');

// module
var moduleName = 'at.apiModule';
var apiModule = angular.module(moduleName, []);

apiModule.factory(moduleName + '.apiFactory', [
  '$http',
  apiFactory
]);

module.exports = moduleName;
