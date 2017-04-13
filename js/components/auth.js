'use strict';

angular.module('appComponents').component('auth', {

  templateUrl: '/views/auth.html',

  controller: function (AuthService, $state, $log) {

    this.$onInit = () => {
      this.title = $state.current.title;
      this.authType = $state.current.name.replace('app.', '');
      $log.info(`Auth component initialized: ${this.authType}`);
    };

    this.submitForm = () => {
 
      this.isSubmitting = true;

      AuthService.attemptAuth(this.authType, this.formData).then((response) => {
        this.isSubmitting = false;
        $log.debug(response);
      }).catch((err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
        $log.error(err.data.errors);
      });
    };

  }

});