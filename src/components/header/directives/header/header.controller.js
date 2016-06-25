'use strict';

/**
 * controller for header directive
 * @param  {Object} $scope angular scope service
 */
var headerCtrl = function headerCtrl($scope){

  // navigation links
  $scope.navItems = [
    {
      label: 'Blog',
      state: 'blog'
    },
    {
      label: 'Glossary',
      state: 'glossary'
    },
    {
      label: 'Contact',
      state: 'contact'
    }
  ];

};

module.exports = headerCtrl;
