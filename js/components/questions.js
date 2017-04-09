'use strict';

angular.module('viewComponents').component('questions', {

  template: `
    <div>
      <panel title="QUESTIONS"></panel>
      <ul>
        <li ng-repeat="question in $ctrl.questions">{{question.name}}</li>
      </ul>
    </div>
  `,

  bindings: {
    questions: '<'
  },

  controller: function ($log) {

    this.$onInit = () => {
      $log.info('Questions component init');
    };
  }

});