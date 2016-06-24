'use strict';

var angular = require('angular');

var routes = require('./app.routes');

var appModule = angular.module('at', [
  require('angular-sanitize'),                      // sanitize
  require('angular-ui-router'),                     // ui router
  require('./components/api/api.module'),           // api
  require('./components/header/header.module'),     // api
  require('./components/blog/blog.module'),         // blog
  require('./components/glossary/glossary.module'), // glossary
  // require('./components/contact/contact.module'),   // contact
  'at.templatesModule'                              // templates
]);

appModule.config([
  '$stateProvider',
  '$urlRouterProvider',
  routes
]);

module.exports = appModule;
