'use strict';

/**
 * controller for contact view
 * @param  {Object} $scope angular scope service
 */
var contactCtrl = function contactCtrl($scope){

  // contact object
  $scope.contact = {
    name: '',
    email: '',
    reason: '',
    message: ''
  };

  // reason options
  $scope.reasons = [
    {label: 'Reason for contact', code: ''},
    {label: 'Healthcare Marketplace', code: 'HM'},
    {label: 'Technical Support', code: 'TS'},
    {label: 'Website Feedback', code: 'WF'}
  ];

  /**
   * submission action
   * @param  {Object}  form        angular form object from the view
   * @param  {Boolean} form.$valid property indicating validity of the form
   */
  $scope.submit = function(form){
    if(form.$valid){
      alert('This form is valid');
    } else {
      alert('This form is invalid');
    }
  };

};

module.exports = contactCtrl;
