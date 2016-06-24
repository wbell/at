'use strict';

var glossaryCtrl = function glossaryCtrl($scope, glossaryCollection){

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

  // populate glossary items
  $scope.glossaryCollection = glossaryCollection;

};

module.exports = glossaryCtrl;
