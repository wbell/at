'use strict';

var blogCtrl = function blogCtrl($scope, blogCollection){

  // Language configuration
  $scope.language = {selected: ''};

  // populate blog items
  $scope.blogCollection = blogCollection;

};

module.exports = blogCtrl;
