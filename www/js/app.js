var app = angular.module('starter', ['ionic', 'ionic.service.core', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      .state('tab.form', {
        url: '/form',
        templateUrl: 'templates/form.html',
        views: {
          'tab-dash': {
            templateUrl: 'templates/form.html',
            controller: 'FormCtrl'
          }
        }
      });


    $urlRouterProvider.otherwise('/tab/form');

  });
