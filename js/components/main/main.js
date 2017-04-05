angular.module('viewComponents')
  .component('main', {

    templateUrl: '/js/components/main/main.html',

    bindings: {
      loading: '<'
    },

    controller: function ($rootScope) {

      $rootScope.$on('LOADING', (evt, param) => {
        this.loading = param;
      });

      $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        this.loading = false;
        // this is required if you want to prevent the $UrlRouter reverting the URL to the previous valid location
        event.preventDefault();
      });
    }

  });