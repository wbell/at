'use strict';

var blogPostCtrl = function blogPostCtrl($scope, $sce){

  $scope.parseDate = function(dateString){
    return new Date(dateString);
  };

  $scope.trust = function(content){
    return $sce.trustAsHtml(content);
  };

};

module.exports = blogPostCtrl;
