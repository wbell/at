'use strict';

var angular = require('angular');

// module components
var glossaryCtrl = require('./views/glossary/glossary.controller');

// module
var moduleName = 'at.glossaryModule';
var glossaryModule = angular.module(moduleName, []);

// glossary view controller
glossaryModule.controller(moduleName + '.glossaryCtrl', [
  '$scope',
  'glossaryCollection',
  glossaryCtrl
]);

module.exports = moduleName;
