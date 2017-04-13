'use strict';

angular.module('viewComponents').component('auth', {

  template: '/views/auth.html',

  controller: function (AuthService, $state) {

    this.$onInit = () => {
      this.title = $state.current.title;
      this.authType = $state.current.name;
    };

    this.submitForm = () => {
 
      console.log(this.formData);
      this.isSubmitting = true;

      AuthService.attemptAuth(this.authType, this.formData).then((response) => {
        this.isSubmitting = false;
        console.log(response);
      }).catch((err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
        console.log(err.data.errors);
      });
    };

  }

});