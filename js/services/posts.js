'use strict';

angular.module('appServices').service('PostsService',

  function ($http, $q) {

    const BASE_URL = 'http://localhost:3000/posts';

    this.getAll = () => {

      var defer = $q.defer();

      $http.get(BASE_URL + '?_embed=comments&_expand=user').then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });

      return defer.promise;
    };

    this.get = (id) => {

      var defer = $q.defer();

      $http.get(BASE_URL + `/${id}?_embed=comments&_expand=user`).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });

      return defer.promise;
    };

    this.save = (post) => {

      var promise;

      if (post.id) {
        promise = $http.put(BASE_URL + `/${post.id}`, post);
      } else {
        promise = $http.post(BASE_URL, post);
      }

      var defer = $q.defer();

      promise.then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });

      return defer.promise;
    };

  });