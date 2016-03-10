angular
	.module('home')
	.config(['$stateProvider',stateProvider]);

function stateProvider($stateProvider){

	$stateProvider
		 .state('home', {
			      url: "/home",
			      controller: "homeCtrl"
			      templateUrl: "web-app/modules/home/views/home.html",
			      
			    });
}

