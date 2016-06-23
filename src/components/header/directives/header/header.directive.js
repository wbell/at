'use strict';

var headerCtrl = require('./header.controller');

var headerDir = function headerDir(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './src/components/header/directives/header/header.html',
    controller: [
      '$scope',
      headerCtrl
    ],
    scope: {}
  };
};

module.exports = headerDir;
