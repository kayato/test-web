'use strict';

/**
 * @ngdoc function
 * @name ookamiWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ookamiWebApp
 */
angular.module('ookamiWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
