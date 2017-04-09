'use strict';

angular.module('viewServices').service('QuestionsService',

  function ($log, $http, $q) {

    this.get = () => {

      var defer = $q.defer();

      $http.get('http://localhost:3000/dishes').then((response) => {
        defer.resolve(response.data);
      }).catch((err) => {
        $log.debug(`SVC: ERROR!!! ${err}`);
        defer.reject(err);
      });

      return defer.promise;
    };

  });