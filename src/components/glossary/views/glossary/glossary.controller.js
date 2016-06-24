'use strict';

var glossaryCtrl = function glossaryCtrl($scope, glossaryCollection){

  // language hook
  $scope.language = {selected: ''};

  // populate glossary items
  $scope.glossaryCollection = glossaryCollection;

  // transform links
  $scope.transformLinks = function(htmlString){
    htmlString = htmlString
      .replace(/="\//gi, '="https://healthcare.gov/') // create absolute URLs
      .replace(/<a/g, '<a target="_blank"'); // set link target to new window

    return htmlString;
  };

  // search input model
  $scope.searchTerm = '';
  $scope.activeSearchTerm = '';
  $scope.setTerm = function(term){
    $scope.activeSearchTerm = term;
  };
  // $scope.filterGlossary = function(item){
  //   return (
  //     (item.title.toLowerCase().indexOf($scope.activeSearchTerm.toLowerCase()) !== -1) ||
  //     (item.content.toLowerCase().indexOf($scope.activeSearchTerm.toLowerCase()) !== -1)
  //   );
  // };

};

module.exports = glossaryCtrl;
