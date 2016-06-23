'use strict';

var angular = require('angular');

var appModule = angular.module('at', [
  require('angular-ui-router'),                     // ui router
  require('./components/api/api.module'),           // api
  require('./components/header/header.module'),     // api
  // require('./components/blog/blog.module'),         // blog
  // require('./components/glossary/glossary.module'), // glossary
  // require('./components/contact/contact.module'),   // contact
  'at.templatesModule'                              // templates
]);



module.exports = appModule;
