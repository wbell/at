'use strict';

var glossaryCtrl = function glossaryCtrl($scope, glossaryCollection){

  // language hook
  $scope.language = {selected: ''};

  // populate glossary items
  $scope.glossaryCollection = glossaryCollection;

};

module.exports = glossaryCtrl;
