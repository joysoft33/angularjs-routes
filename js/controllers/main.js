'use strict';

angular.module('appControllers').controller('main',

  function ($log, $state, $transitions) {

    this.$onInit = () => {
      $log.info('Main controller initialized');
      this.errorMessage = '';
      this.loading = false;
    };

    this.isLoading = () => {
      return this.loading;
    };

    this.showLoading = (show) => {
      this.loading = show;
    };

    this.showError = (error) => {
      this.errorMessage = error;
      this.showLoading(false);
    };

    // ui-router transitions

    $transitions.onStart({}, (transition) => {
      $log.debug('onStart ' + transition._targetState._identifier);
      this.showLoading(true);
    });
    $transitions.onError({}, (transition, route) => {
      $log.debug('onError ' + transition._targetState._identifier);
      this.showError(`Erreur dans le module ${transition._targetState._identifier}`);
      return transition.router.stateService.target('home');
    });
    $transitions.onSuccess({}, (transition) => {
      $log.debug('onSuccess ' + transition._targetState._identifier);
    });
    $transitions.onBefore({}, (transition) => {
      $log.debug('onBefore ' + transition._targetState._identifier);
      this.errorMessage = '';
    });
    $transitions.onEnter({}, (transition, route) => {
      $log.debug('onEnter ' + transition._targetState._identifier);
    });
    $transitions.onRetain({}, (transition, route) => {
      $log.debug('onRetain ' + transition._targetState._identifier);
    });
    $transitions.onExit({}, (transition, route) => {
      $log.debug('onExit ' + transition._targetState._identifier);
    });
    $transitions.onFinish({}, (transition) => {
      $log.debug('onFinish ' + transition._targetState._identifier);
      this.showLoading(false);
    });

  }

);