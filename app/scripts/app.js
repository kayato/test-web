'use strict';

/**
 * @ngdoc overview
 * @name ookamiWebApp
 * @description
 * # ookamiWebApp
 *
 * Main module of the application.
 */
angular
  .module('ookamiWebApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/news/:id/', {
        templateUrl: 'views/news_detail.html',
        controller: 'NewsDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
