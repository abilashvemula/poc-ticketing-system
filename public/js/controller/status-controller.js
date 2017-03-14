 "use strict"

 app.controller('complaintController', function($scope, StatusServ) {
 $scope.status = {};
        
          $scope.changeStatusToClosed = function () {
            StatusServ.get($scope.status.name)
            .then(data => {
            data ? ($scope.complaint.responseData = data) : ($scope.complaint.errorMessage = true);
            })
           
         }
});