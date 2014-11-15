'use strict';

var buildApp = angular.module('buildApp', ['ui.bootstrap', 'ngRoute']);

buildApp.config(function($routeProvider) {  
      $routeProvider.when('/issue/:issue',
       {
       	templateUrl: 'views/issueview.html'
       });
  $routeProvider.otherwise({redirectTo: '/'});
});



