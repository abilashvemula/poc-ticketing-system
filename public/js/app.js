"use strict"
 var app = angular.module('myApp', ["ngRoute"]);
 
  app.config(function ($routeProvider) {
     $routeProvider
         .when("/", {
             templateUrl: "html/home.html",
             controller: "homeController"
         })
         .when("/ticket", {
             templateUrl: "html/tickets.html",
             controller: "ticketsController"

         })
         .when("/addcomplaint", {
             templateUrl: "html/addcomplaint.html",
             controller: "complaintController"
         })
         .when("/assignuser", {
             templateUrl: "html/assignuser.html",
             controller: "assignController"

         })
         .when("/addcomment", {
             templateUrl: "html/addcomment.html",
             controller: "commentsController"

         })
         .when("/changestate", {
             templateUrl: "html/changestate.html",
             controller: "statusController"

         })
         .otherwise('/')

 });
