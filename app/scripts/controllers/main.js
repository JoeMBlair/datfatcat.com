'use strict';

/**
 * @ngdoc function
 * @name dfcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dfcApp
 */
angular.module('dfcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
