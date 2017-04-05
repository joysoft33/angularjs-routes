angular.module('viewComponents')
  .component('questions', {

    templateUrl: '/js/components/questions/questions.html',

    bindings: {
      $transition$: '<',
      questions: '<'
    },

    controller: function () {

      this.$onInit = () => {

        let to = this.$transition$.to();
        let toParams = this.$transition$.params("to");
        let from = this.$transition$.from();
        let fromParams = this.$transition$.params("from");

        console.log(`to:${to.name}, toParams:${toParams}, from:${from.name}, fromParams:${fromParams}`);
      };
    }

  });