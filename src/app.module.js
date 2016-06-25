'use strict';

var angular = require('angular');

// module components
var routes = require('./app.routes');

// module
var moduleName = 'at';
var appModule = angular.module(moduleName, [
  require('angular-sanitize'),                      // sanitize
  require('angular-ui-router'),                     // ui router
  require('./components/shared/shared.module'),     // shared
  require('./components/api/api.module'),           // api
  require('./components/header/header.module'),     // header
  require('./components/blog/blog.module'),         // blog
  require('./components/glossary/glossary.module'), // glossary
  require('./components/contact/contact.module'),   // contact
  'at.templatesModule'                              // templates
]);

// bind routes
appModule.config([
  '$stateProvider',
  '$urlRouterProvider',
  routes
]);

module.exports = moduleName;
