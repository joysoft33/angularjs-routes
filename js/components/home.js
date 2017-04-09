'use strict';

angular.module('viewComponents').component('home', {

  template: `
    <div>
      <panel title="HOME"></panel>
    </div>
  `,

  bindings: {
  },

  controller: function ($log) {

    this.$onInit = () => {
      $log.info('Home component init');
    };
  }

});