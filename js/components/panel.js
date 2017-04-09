'use strict';

angular.module('viewComponents').component('panel', {

  template: `
    <div class="panel panel-default">
      <div class="panel-heading">{{$ctrl.title}}</div>
      <div class="panel-body">
        <button class="btn btn-success" ng-click="$ctrl.switchView()">Switch to home</button>
      </div>
    </div>  
  `,

  bindings: {
    title: '@'
  },

  controller: function ($log, $timeout, $state) {

    this.$onInit = () => {
      $log.info('Panel component init');
    };
    
    this.switchView = () => {
      $timeout(() => $state.go('home', {
        id: 100
      }), 5000);
    };
  }

});