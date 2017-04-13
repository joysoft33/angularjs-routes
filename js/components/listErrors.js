'use strict';

angular.module('appComponents').component('listErrors', {

  template: `
    <ul class="error-messages" ng-show="$ctrl.errors">
      <div ng-repeat="(field, errors) in $ctrl.errors">
        <li ng-repeat="error in errors">
          {{field}} {{error}}
        </li>
      </div>
    </ul>
  `,

  bindings: {
    errors: '<'
  }

});