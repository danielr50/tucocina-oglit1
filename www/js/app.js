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
  // VISTA HOME PRINCIPAL
    .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })

  // Each tab has its own nav history stack:
  // VISTA MESERO
  .state('mesero', {
    url: '/mesero',
        templateUrl: 'templates/mesero.html'
  })
  // VISTA MENU
  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html'
  })
  // VISTA PEDIR CUENTA
  .state('cuenta', {
    url: '/cuenta',
    templateUrl: 'templates/cuenta.html'
  })

  //RESUMEN PEDIDO
  .state('resumen-pedido', {
    url: '/resumen-pedido',
    templateUrl: 'templates/resumen-pedido.html'
  })

    // VISTA PROMOCIONES
    .state('promociones', {
    url: '/promociones',
    templateUrl: 'templates/promociones.html'
  })

       // VISTA MENU DEL PLATO
  .state('menu-plato', {
    url: '/menu-plato',
    templateUrl: 'templates/menu-plato.html'
  })
  // VISTA MENU POSTRE
  .state('menu-postres', {
    url: '/menu-postres',
    templateUrl: 'templates/menu-postres.html'
  })
  // VISTA MENU BEBIDAS
  .state('menu-bebidas', {
    url: '/menu-bebidas',
    templateUrl: 'templates/menu-bebidas.html'
  })

    // VISTA MENU DE LAS ENSALADAS
    .state('menu-ensaladas', {
      url: '/menu-ensaladas',
      templateUrl: 'templates/menu-ensaladas.html'
    })
    
      // VISTA SELECCIONAR VINOS
    .state('bebidas', {
    url: '/bebidas',
    templateUrl: 'templates/bebidas.html'
  })
    
    // VISTA SELECCIONAR INGREDIENTES ENSALADAS
    .state('ensaladas', {
    url: '/ensaladas',
    templateUrl: 'templates/ensaladas.html'
  })
     // VISTA SELECCIONAR INGREDIENTES POSTRE
    .state('postres', {
    url: '/postres',
    templateUrl: 'templates/postres.html'
  })
     // VISTA SELECCIONAR INGREDIENTES PLATO FUERTE
  .state('plato', {
    url: '/plato',
    templateUrl: 'templates/plato.html'
  })
  // VISTA RESUMEN
  .state('resumen', {
    url: '/resumen',
    templateUrl: 'templates/resumen.html'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
