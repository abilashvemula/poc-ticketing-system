  "use strict"

 app.controller('assignController', function($scope, AssignServ) {
 $scope.assign = {user : 'user0'};
        
          $scope.assignUser = function () {
             AssignServ.get($scope.assign.name, $scope.assign.user)
            .then(data => {
            data ? ($scope.assign.responseData = data) : ($scope.assign.errorMessage = true);
            })
         }
     });
  