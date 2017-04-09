'use strict';

angular.module('viewComponents').component('main', {

  templateUrl: '/views/main.html',

  bindings: {
    loading: '<'
  },

  controller: function ($log, $rootScope, $transitions) {

    this.$onInit = () => {
      $log.info('Main component init');
      this.loading = false;
    };

    $rootScope.$on('LOADING', (evt, param) => {
      this.loading = param;
    });

    $transitions.onBefore({}, (trans) => {
      $log.debug('onBefore ' + trans._targetState._identifier);
    });
    $transitions.onStart({}, (trans) => {
      $log.debug('onStart ' + trans._targetState._identifier);
      this.loading = true;
    });
    $transitions.onError({}, (trans) => {
      $log.debug('onError ' + trans._targetState._identifier);
      this.loading = false;
    });
    $transitions.onSuccess({}, (trans) => {
      $log.debug('onSuccess ' + trans._targetState._identifier);
    });
    $transitions.onEnter({}, (trans, params) => {
      $log.debug('onEnter ' + trans._targetState._identifier);
    });
    $transitions.onRetain({}, (trans, params) => {
      $log.debug('onRetain ' + trans._targetState._identifier);
    });
    $transitions.onExit({}, (trans, params) => {
      $log.debug('onExit ' + trans._targetState._identifier);
    });
    $transitions.onFinish({}, (trans) => {
      $log.debug('onFinish ' + trans._targetState._identifier);
      this.loading = false;
    });
  }

});