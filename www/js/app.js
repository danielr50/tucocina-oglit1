// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'starter.controllers']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })

  // Each tab has its own nav history stack:

  .state('mesero', {
    url: '/mesero',
        templateUrl: 'templates/mesero.html'
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html'
  })

  .state('cuenta', {
    url: '/cuenta',
    templateUrl: 'templates/cuenta.html'
  })

   .state('juegos', {
    url: '/juegos',
    templateUrl: 'templates/juegos.html'
  })

    .state('promociones', {
    url: '/promociones',
    templateUrl: 'templates/promociones.html'
  })

    .state('bebidas', {
    url: '/bebidas',
    templateUrl: 'templates/bebidas.html'
  })


    .state('menu-ensaladas', {
      url: '/menu-ensaladas',
      templateUrl: 'templates/menu-ensaladas.html'
    }) 

    .state('ensaladas', {
    url: '/ensaladas',
    templateUrl: 'templates/ensaladas.html'
  })

    .state('postres', {
    url: '/postres',
    templateUrl: 'templates/postres.html'
  })

  .state('plato', {
    url: '/plato',
    templateUrl: 'templates/plato.html'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
