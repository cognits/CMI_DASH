var cmi = angular.module('cmi', ['ui.router']);

cmi.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('login', {
      url: "/login",
      views: {
        '': {
          templateUrl: "templates/login/login.html",
        }
      }
    })

    .state('info', {
      url: "/info",
      views: {
        '': {
          templateUrl: "templates/info/info.html",
        }
      }
    })
})
