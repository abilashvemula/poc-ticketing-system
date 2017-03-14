 "use strict"

 app.controller('complaintController', function($scope, ComplaintServ) {
 $scope.complaint = {};

         $scope.submitComplaint = function () {
           ComplaintServ.get($scope.complaint.name, $scope.complaint.text)
            .then(data => {
            data ? ($scope.complaint.responseData = data) : ($scope.complaint.errorMessage = true);
            })
         }
     });

