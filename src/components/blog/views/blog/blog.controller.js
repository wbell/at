'use strict';

var blogCtrl = function blogCtrl($scope, blogCollection){

  // Language configuration
  $scope.language = {
    selected: '',
    options: [
      {
        name: 'Language',
        value: ''
      },
      {
        name: 'English',
        value: 'en'
      },
      {
        name: 'Spanish',
        value: 'es'
      }
    ]
  };

  // populate blog items
  $scope.blogCollection = blogCollection;

};

module.exports = blogCtrl;
