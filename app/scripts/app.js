'use strict';

/**
 * @ngdoc overview
 * @name dfcApp
 * @description
 * # dfcApp
 *
 * Main module of the application.
 */
angular.module('dfcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        // controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        // controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
