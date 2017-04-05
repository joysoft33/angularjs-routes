'use strict';

angular.module('viewComponents').component('main', {

  templateUrl: '/js/components/main/main.html',

  bindings: {
    loading: '<'
  },

  controller: function ($rootScope) {

    $rootScope.$on('LOADING', (evt, param) => {
      this.loading = param;
    });
  }

});