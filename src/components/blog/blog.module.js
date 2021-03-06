'use strict';

var angular = require('angular');

// module components
var blogCtrl = require('./views/blog/blog.controller');
var blogPostDir = require('./directives/blog-post/blogPost.directive');

// module
var moduleName = 'at.blogModule';
var blogModule = angular.module(moduleName, []);

// blog controller
blogModule.controller(moduleName + '.blogCtrl', [
  '$scope',
  'blogCollection',
  blogCtrl
]);

// blog post directive
blogModule.directive('atBlogPost', blogPostDir);

module.exports = moduleName;
