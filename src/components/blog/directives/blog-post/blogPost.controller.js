'use strict';

/**
 * controller for blogPost directive
 * @param  {Object} $scope angular scope service
 */
var blogPostCtrl = function blogPostCtrl($scope){

  /**
   * scope method to parse date strings into date objects
   * @param  {String} dateString date string in format "2014-08-28 00:00:00 -0400"
   * @return {Date}              JavaScript date object
   */
  $scope.parseDate = function(dateString){
    return new Date(dateString);
  };

};

module.exports = blogPostCtrl;
