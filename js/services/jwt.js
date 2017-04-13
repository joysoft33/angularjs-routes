'use strict';

angular.module('viewServices').service('JWTService',

  function ($http, $q) {

    const JWT_KEY = 'jwt$app';

    this.save =(token) => {
      localStorage[JWT_KEY] = token;
    };

    this.get = () => {
      return localStorage[JWT_KEY];
    }

    this.destroy = () => {
      localStorage.removeItem(JWT_KEY);
    }
});