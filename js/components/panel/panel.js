'use strict';

angular.module('viewComponents').component('panel', {

  templateUrl: '/js/components/panel/panel.html',

  bindings: {
    title: '@'
  },

  controller: function ($timeout, $state) {

    this.switchView = () => {
      $timeout(() => $state.go('home', {
        id: 100
      }), 5000);
    };
  }

});