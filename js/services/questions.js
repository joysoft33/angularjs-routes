angular.module('viewServices')

  .service('QuestionsService', function ($http, $q) {

    this.get = () => {

      var defer = $q.defer();

      $http.get('http://localhost:3000/dishes').then((response) => {
        defer.resolve(response.data);
      }).catch((err) => {
        console.log(`SVC: ERROR!!! ${err}`);
        defer.reject(err);
      });

      return defer.promise;
    };

  });