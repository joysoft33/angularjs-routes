'use strict';

angular.module('viewApp')

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        resolve: {
          auth: function (AuthService) {
            return AuthService.verifyAuth();
          }
        }
      })
      .state({
        name: 'app.home',
        url: '/home',
        component: 'home'
      })
      .state({
        name: 'app.users',
        url: '/users',
        component: 'users',
        resolve: {
          users: function (UsersService) {
            return UsersService.getAll();
          }
        }
      })
      .state({
        name: 'app.user',
        url: '/user/:id',
        component: 'user',
        resolve: {
          user: function (UsersService, $stateParams) {
            return UsersService.get($stateParams.id);
          }
        }
      })
      .state({
        name: 'app.newUser',
        url: '/user/',
        component: 'user'
      })
      .state({
        name: 'app.posts',
        url: '/posts',
        component: 'posts',
        resolve: {
          posts: function (PostsService) {
            return PostsService.getAll();
          }
        }
      })
      .state({
        name: 'app.post',
        url: '/post/:id',
        component: 'post',
        resolve: {
          post: function (PostsService, $stateParams) {
            return PostsService.get($stateParams.id);
          }
        }
      })
      .state({
        name: 'app.newPost',
        url: '/post/',
        component: 'post'
      })
      .state({
        name: 'app.login',
        url: '/login',
        title: 'Se connecter',
        component: 'auth'
      })
      .state({
        name: 'app.register',
        url: '/register',
        title: `S'enregistrer`,
        component: 'auth'
      });

    ;

    $urlRouterProvider.otherwise('/home');
  });