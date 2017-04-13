'use strict';

angular.module('appServices').service('AuthService',

  function (JWTService, AppConstants, $http, $q, $state) {

    // Object to store our user properties
    this.current = null;

    // Try to authenticate by registering or logging in
    this.attemptAuth = (type, credentials) => {
      if (type === 'login') {
        return $http.get(AppConstants.api + '/users?email=' + credentials.email + '&password=' + credentials.password).then((response) => {
          this.current = response.data[0];
          JWTService.save(this.current.id);
          return response;
        });
      } else {
        var user = {
          username: credentials.username,
          password: credentials.password,
          email: credentials.email
        };
        return $http.post(AppConstants.api + '/users', user).then((response) => {
          this.current = response.data;
          JWTService.save(this.current.id);
          return response;
        });
      }
    };

    this.verifyAuth = () => {
      let defer = $q.defer();

      // Check for JWT token first
      if (!JWTService.get()) {
        defer.resolve(false);
        return defer.promise;
      }

      // If there's a JWT & user is already set
      if (this.current) {
        defer.resolve(true);
        // If current user isn't set, get it from the server.
        // If server doesn't 401, set current user & resolve promise.
      } else {
        $http.get(AppConstants.api + '/users?id=' + JWTService.get()).then((response) => {
          this.current = response.data[0];
          defer.resolve(true);
        }).catch((err) => {
            // If an error happens, that means the user's token was invalid.
            JWTService.destroy();
            defer.resolve(false);
          }
          // Reject automatically handled by auth interceptor
          // Will boot them to homepage
        );
      }

      return defer.promise;
    };

    this.logout = () => {
      this.current = null;
      JWTService.destroy();
      // Do a hard reload of current state to ensure all data is flushed
      $state.go($state.$current, null, {
        reload: true
      });
    };

  }
);