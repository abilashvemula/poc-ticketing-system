"use strict"

 app.controller('commentsController', function($scope, CommentServ) {

 $scope.comments = {};
        
          $scope.addComments = function () {
            CommentServ.get($scope.comments.name, $scope.comments.text)
            .then(data => {
            data ? ($scope.comments.responseData = data) : ($scope.comments.errorMessage = true);
            })
           
         }
     });


  