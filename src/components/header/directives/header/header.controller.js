'use strict';

var headerCtrl = function headerCtrl($scope){

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
