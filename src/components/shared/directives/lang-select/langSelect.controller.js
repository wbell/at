'use strict';

/**
 * controller for language select directive
 * @param  {Object} $rootScope angular root scope service
 * @param  {Object} $scope     angular scope service
 */
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

  /**
   * when model is changed, save the value to rootscope
   * in order to persist the language selection
   * across all views using this directive
   */
  $scope.modelChanged = function(){
    $rootScope.selectedLanguage = $scope.model;
  };

};

module.exports = langSelectCtrl;
