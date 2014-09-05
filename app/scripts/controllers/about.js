'use strict';

/**
 * @ngdoc function
 * @name dfcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dfcApp
 */
angular.module('dfcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
