"use strict"

app.controller("homeController", function($scope, TicketServ) {

            TicketServ.getAll()
            .then(function(resData) {
                $scope.tickets = resData;
                let data = resData || [];

                $scope.count = {
                    ticket: data.length,
                    new: 0,
                    open: 0,
                    closed: 0
                };


                let statusKeys = Object.keys($scope.count);

                data.forEach(x => {
                    statusKeys.forEach(key => {
                        if (x.status === key) ++$scope.count[key];
                    })
                })

                $scope.myFunc = function() {
                    $scope.showTicket = !$scope.showTicket
                };
            })
        });
