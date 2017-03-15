 "use strict"

 app.controller('statusController', function($scope, StatusServ) {
 $scope.status = {};
        
          $scope.changeStatusToClosed = function () {
            StatusServ.get($scope.status.name)
            .then(data => {
            data ? ($scope.status.responseData = data) : ($scope.status.errorMessage = true);
            })
           
         }
});