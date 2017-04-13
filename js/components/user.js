'use strict';

angular.module('appComponents').component('user', {

  template: `
    <panel title="Utilisateur">
      <br/>
      <form>
        <input name="id" type="hidden" ng-model="$ctrl.user.id" />
        <div class="form-group">
          <label for="subject">Nom</label>
          <input class="form-control" id="name" type="text" ng-model="$ctrl.user.name" />
        </div>
        <div class="form-group">
          <label for="email">Adresse mail</label>
          <input class="form-control" id="email" type="email" ng-model="$ctrl.user.email" />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input class="form-control" id="password" type="password" ng-model="$ctrl.user.password" />
        </div>
        <hr />
        <button class="btn btn-success" ng-click="$ctrl.submit()">Valider</button>
        <a class="btn btn-default" ui-sref="app.home">Annuler</a>
      </form>
    </panel>  
  `,

  bindings: {
    user: '<'
  },

  controller: function ($log, UsersService) {

    this.$onInit = () => {
      $log.info('User component initialized');
    };

    this.submit = () => {
      UsersService.save(this.user).then((user) => {
        if (typeof this.user.id == 'undefined') {
          this.user.id = user.id;
        }
      }).catch((error) => {
        $log.error(error);
      });
    };

  }

});