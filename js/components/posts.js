'use strict';

angular.module('viewComponents').component('posts', {

  template: `
    <panel class="users" title="Liste des articles">
      <table class="table">
        <tbody>
          <tr ng-repeat="post in $ctrl.posts track by post.id">
            <td ng-bind="post.user.username"></td>
            <td><a ng-bind="post.title" ui-sref="post({id: post.id})"></a></td>
          </tr>
        </tbody>
      </table>
    </panel>  
  `,

  bindings: {
    posts: '<'
  },

  controller: function ($log) {

    this.$onInit = () => {
      $log.info('Posts component initialized');
    };

  }

});