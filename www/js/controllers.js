var app = angular.module('starter.controllers', ['starter.services']);

app.controller('MeseroCtrl', ['$scope', '$ionicPopup', '$timeout' ,function($scope, $ionicPopup, $timeout){
	
		 // A confirm dialog
 $scope.llamadaMesero = function() {
	   var confirmPopup = $ionicPopup.confirm({
	     title: 'Confirmación',
	     template: 'Realmente deseas llamar al mesero?'
	   });
	   confirmPopup.then(function(res) {
	     if(res) {
	       // An alert dialog
		
		   var alertPopup = $ionicPopup.alert({
		     title: 'Gracias',
		     template: 'El mesero llegara en unos segundos'
		   });
		   alertPopup.then(function(res) {
		     console.log('Thank you for not eating my delicious ice cream cone');
		   });
		 
	     } else {
	       console.log('You are not sure');
	     }
	   });
	 };
	
}]);

// AUN TRABAJO EN ESTA CONTROLADOR NO TOCAR

//  $scope.hacerpedido = function() {
// 	   var confirmPopup = $ionicPopup.confirm({
// 	     title: 'Confirmación',
// 	     template: 'Seguro'
// 	   });
// 	   confirmPopup.then(function(res) {
// 	     if(res) {
// 	       // An alert dialog
		
// 		   var alertPopup = $ionicPopup.alert({
// 		     title: 'Gracias',
// 		     template: 'El mesero llegara en unos segundos'
// 		   });
// 		   alertPopup.then(function(res) {
// 		     console.log('Thank you for not eating my delicious ice cream cone');
// 		   });
		 
// 	     } else {
// 	       console.log('You are not sure');
// 	     }
// 	   });
// 	 };
	
// }]);