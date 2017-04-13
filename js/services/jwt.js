'use strict';

angular.module('appServices').service('JWTService',

  function (localStorageService) {

    const JWT_KEY = 'jwt$app';

    this.save = (token) => {
      localStorageService.set(JWT_KEY, token);
    };

    this.get = () => {
      return localStorageService.get(JWT_KEY);
    }

    this.destroy = () => {
      localStorageService.remove(JWT_KEY);
    }
});