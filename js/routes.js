'use strict';

angular.module('viewApp')

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state({
        name: 'home',
        url: '/home',
        component: 'home'
      })
      .state({
        name: 'questions',
        url: '/questions',
        component: 'questions',
        resolve: {
          questions: function ($rootScope, QuestionsService) {
            return QuestionsService.get();
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  });
