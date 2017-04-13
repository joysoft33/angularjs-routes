'use strict';

angular.module('viewComponents').component('users', {

  template: `
    <panel class="users" title="Liste des utilisateurs">
      <table class="table">
        <tbody>
          <tr ng-repeat="user in $ctrl.users track by user.id">
            <td ng-bind="user.id"></td>
            <td><a ng-bind="user.name" ui-sref="app.user({id: user.id})"></a></td>
          </tr>
        </tbody>
      </table>
      <hr/>
      <a class="btn btn-primary" ui-sref="app.newUser">
        <i class="glyphicon glyphicon-plus"></i> Nouvel utilisateur
      </a>
    </panel>  
  `,

  bindings: {
    users: '<'
  },

  controller: function ($log) {

    this.$onInit = () => {
      $log.info('Users component initialized');
    };

  }

});