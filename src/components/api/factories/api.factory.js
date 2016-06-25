'use strict';

/**
 * API factory, used for pulling data from external server
 * @param  {Object} $http angular ajax service
 * @return {Object}       hash of exposed methods
 */
var apiFactory = function apiFactory($http) {

  // healthcare.gov service URL
  var endpoint = 'https://www.healthcare.gov/api/';

  /**
   * method to GET data from healthcare.gov
   * @param  {String} contentType a content type as outlined here https://www.healthcare.gov/developers/
   * @return {Promise}            resolves with JSON payload from server
   */
  var get = function get(contentType) {
    return $http.get(endpoint + contentType + '.json');
  };

  return {
    get: get
  };
};

module.exports = apiFactory;
