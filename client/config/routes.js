var myApp = angular.module('myApp',['ngRoute','ngMessages'])
myApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'partials/dashboard.html'
    })
    .when('/index',{
      templateUrl:'partials/login.html'
    })
    .when('/new_question',{
      templateUrl:'partials/new_question.html'
    })
    .when('/question/:id',{
      templateUrl:'partials/question.html'
    })
    .when('/question/:id/new_answer',{
      templateUrl:'partials/new_answer.html'
    })
    .otherwise({
      redirectTo:'/index'
    })
})
