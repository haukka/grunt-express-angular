'use strict'

var module = angular.module('app', ['ngRoute', 'app.controllerstodo']);

function RouteConfig($routeProvider, $locationProvider) {
    $routeProvider
	.when("/todolist", {
	    templateUrl: "todo.ejs",
	    controller: "TodoCtrl" })
	.otherwise({ redirectTo: "/todolist" });

    $locationProvider.html5Mode(true);
}

angular.module('app').config(RouteConfig);
