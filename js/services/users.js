'use strict';

angular.module('viewServices').service('UsersService',

  function ($http, $q) {

    const BASE_URL = 'http://localhost:3000/users';

    this.getAll = () => {

      var defer = $q.defer();

      $http.get(BASE_URL).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });

      return defer.promise;
    };

    this.get = (id) => {

      var defer = $q.defer();

      $http.get(BASE_URL + `/${id}`).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });

      return defer.promise;
    };

    this.save = (user) => {

      var promise;

      if (user.id) {
        promise = $http.put(BASE_URL + `/${user.id}`, user);
      } else {
        promise = $http.post(BASE_URL, user);
      }

      var defer = $q.defer();

      promise.then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });

      return defer.promise;
    };

    this.searchByEmail = (email) => {

      var defer = $q.defer();

      $http.get(BASE_URL + `/q?${email}`).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });

      return defer.promise;
    };

  });