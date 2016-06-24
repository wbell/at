'use strict';

var langSelectCtrl = function langSelectCtrl($rootScope, $scope){

  // set model value based on stored rootscope value
  $scope.model = $rootScope.selectedLanguage || '';

  // Language configuration
  $scope.language = {
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

  // model change listener
  $scope.modelChanged = function(){
    $rootScope.selectedLanguage = $scope.model;
  };

};

module.exports = langSelectCtrl;
