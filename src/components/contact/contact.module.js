'use strict';

var angular = require('angular');

// module components
var contactCtrl = require('./views/contact/contact.controller');

// module
var moduleName = 'at.contactModule';
var contactModule = angular.module(moduleName, []);

// contact view controller
contactModule.controller(moduleName + '.contactCtrl', [
  '$scope',
  contactCtrl
]);

module.exports = moduleName;
