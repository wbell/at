'use strict';

/**
 * controller for glossary view
 * @param  {Object} $scope             angular scope service
 * @param  {array} glossaryCollection  resolved array of glossary items
 */
var glossaryCtrl = function glossaryCtrl($scope, glossaryCollection){

  // language hook
  $scope.language = {selected: ''};

  // populate glossary items
  $scope.glossaryCollection = glossaryCollection;

  /**
   * transforms links passed in html blocks
   * @param  {String} htmlString block of html returned by service
   * @return {String}            string with properly formatted links
   */
  $scope.transformLinks = function(htmlString){
    htmlString = htmlString
      .replace(/="\//gi, '="https://healthcare.gov/') // create absolute URLs
      .replace(/<a/g, '<a target="_blank"'); // set link target to new window

    return htmlString;
  };

  // search input model
  $scope.searchTerm = '';
  $scope.activeSearchTerm = '';

  /**
   * sets an active search term
   * @param  {String} term the term to filter glossary items by
   */
  $scope.setTerm = function(term){
    $scope.activeSearchTerm = term;
  };


};

module.exports = glossaryCtrl;
