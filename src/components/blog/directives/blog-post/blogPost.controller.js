'use strict';

var blogPostCtrl = function blogPostCtrl($scope){

  $scope.parseDate = function(dateString){
    return new Date(dateString);
  };

};

module.exports = blogPostCtrl;
