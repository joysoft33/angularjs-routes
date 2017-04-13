'use strict';

angular.module('viewComponents').component('panel', {

  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        {{$ctrl.title}}
        <a ng-if="$ctrl.cancelable" ui-sref="app.home" title="Annuler"><i class="glyphicon glyphicon-remove"></i></a>
      </div>
      <div class="panel-body">
        <div ng-transclude></div>
      </div>
    </div>  
  `,

  bindings: {
    title: '@',
    cancelable: '<'
  },

  transclude: true,

  controller: function ($log) {

    this.$onInit = () => {
      $log.info('Panel component initialized');
      if (angular.isUndefined(this.cancelable)) {
        this.cancelable = true;
      }
    };
  }

});