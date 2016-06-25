'use strict';

/**
 * controller for blog view
 * @param  {Object} $scope         angular scope service
 * @param  {Array} blogCollection  resolved array of blog posts
 */
var blogCtrl = function blogCtrl($scope, blogCollection){

  // Language configuration
  $scope.language = {selected: ''};

  // populate blog items
  $scope.blogCollection = blogCollection;

};

module.exports = blogCtrl;
