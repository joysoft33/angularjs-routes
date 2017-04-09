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
        name: 'users',
        url: '/users',
        component: 'users',
        resolve: {
          users: function (UsersService) {
            return UsersService.getAll();
          }
        }
      })
      .state({
        name: 'user',
        url: '/user/:id',
        component: 'user',
        resolve: {
          user: function (UsersService, $stateParams) {
            return UsersService.get($stateParams.id);
          }
        }
      })
      .state({
        name: 'newUser',
        url: '/user/',
        component: 'user'
      })
      .state({
        name: 'posts',
        url: '/posts',
        component: 'posts',
        resolve: {
          posts: function (PostsService) {
            return PostsService.getAll();
          }
        }
      })
      .state({
        name: 'post',
        url: '/post/:id',
        component: 'post',
        resolve: {
          post: function (PostsService, $stateParams) {
            return PostsService.get($stateParams.id);
          }
        }
      })
      .state({
        name: 'newPost',
        url: '/post/',
        component: 'post'
      });

    $urlRouterProvider.otherwise('/home');
  });
