angular
	.module('webApp',[\
		'ui-router',
		'login',
		'home',
		])
	.config(['$urlRouterProvider', '$stateProvider',stateProvider])
    .run(['$rootScope', '$state', 'localStorageService']);

 function stateProvider($urlRouterProvider,$stateProvider){

 	$urlRouterProvider.otherwise("/home");
 }