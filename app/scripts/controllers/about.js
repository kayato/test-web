'use strict';

/**
 * @ngdoc function
 * @name ookamiWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ookamiWebApp
 */
angular.module('ookamiWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
