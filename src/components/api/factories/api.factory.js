'use strict';

var apiFactory = function apiFactory($http) {

  var endpoint = 'https://www.healthcare.gov/api/';

  var get = function get(contentType) {
    return $http.get(endpoint + contentType + '.json');
  };

  return {
    get: get
  };
};

module.exports = apiFactory;
