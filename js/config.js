'use strict';

angular.module('viewApp')

  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('viewApp');
  })

  .config(function ($httpProvider) {

    // Push our interceptor for auth
    $httpProvider.interceptors.push(function (JWTService, AppConstants, $window) {

      return {

        // automatically attach Authorization header
        request: function (config) {
          if (config.url.indexOf(AppConstants.api) === 0 && JWTService.get()) {
            config.headers.Authorization = 'Token ' + JWTService.get();
          }
          return config;
        },

        // Handle 401
        responseError: function (rejection) {
          if (rejection.status === 401) {
            JWTService.destroy();
            $window.location.reload();
          }
          return $q.reject(rejection);
        }
      };

    });
  });