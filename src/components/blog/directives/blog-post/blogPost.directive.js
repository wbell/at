'use strict';

var blogPostCtrl = require('./blogPost.controller');

var blogPostDir = function blogPostDir(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './src/components/blog/directives/blog-post/blogPost.html',
    controller: [
      '$scope',
      '$sce',
      blogPostCtrl
    ],
    scope: {
      post: '=',
      lang: '='
    }
  };
};

module.exports = blogPostDir;
