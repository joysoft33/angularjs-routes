'use strict';

angular.module('appComponents').component('home', {

  template: `
    <panel title="Accueil" cancelable="false">
      <button ng-show="$ctrl.isLoading()" class="btn btn-primary" ng-click="$ctrl.removeLoading();">Done...</button>
      <p ng-hide="$ctrl.isLoading()">Bienvenue cher utilisateur !</p>
    </panel>
  `,

  bindings: {
    showLoading: '&',
    isLoading: '&'
  },

  controller: function ($log, $state) {

    this.$onInit = () => {
      $log.info('Home component initialized');
      this.showLoading({show: true});
    };

    this.removeLoading = () => {
      this.showLoading({show: false});
    };
  }

});