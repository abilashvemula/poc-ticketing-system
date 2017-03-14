"use strict"

 app.controller('ticketsController', function($scope, TicketServ) {

 $scope.ticket = {};
        
          $scope.ticketDetails = function () {
            TicketServ.get($scope.ticket.name)
            .then(data => {
            data ? ($scope.ticket.responseData = data) : ($scope.ticket.errorMessage = true);
            })
        }
});