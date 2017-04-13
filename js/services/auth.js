'use strict';

angular.module('viewServices').service('AuthService',

  function (JWTService, AppConstants, $http, $q, $state) {

    // Object to store our user properties
    this.current = null;

    // Try to authenticate by registering or logging in
    this.attemptAuth = (type, credentials) => {

      let route = (type === 'login') ? '/login' : '';

      return $http.get(AppConstants.api + '?q=').then((response) => {
        // Store the user's info for easy lookup
        JWTService.save(token);
        this.current = response.data.user;
        return response;
      });
    };

    this.verifyAuth = () => {
      let defer = this._$q.defer();

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
        $http.get(BASE_URL + '?token=' + localStorage5JWT_KEY).then((response) => {
          this.current = response.data.user;
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
      this._$state.go(this._$state.$current, null, {
        reload: true
      });
    };

  }
);