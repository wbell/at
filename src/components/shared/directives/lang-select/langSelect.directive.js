'use strict';

var langSelectCtrl = require('./langSelect.controller');

var langSelectDir = function langSelectDir(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './src/components/shared/directives/lang-select/langSelect.html',
    controller: [
      '$rootScope',
      '$scope',
      langSelectCtrl
    ],
    scope: {
      model: '='
    }
  };
};

module.exports = langSelectDir;
