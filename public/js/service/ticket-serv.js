'use strict'
angular.module('myApp')
    .factory('TicketServ', function($http) {
        function get(name) {
            let params = {
                customer_name: name
            }
            return $http.get('/ticket', { params: params })
                .then(res => {
                    return res.data[0]
                })
        }

        function getAll() {
            return $http.get("../data.txt")
            .then(function(res) {
            	return res.data;
            })
        }
        return {
            get: get,
            getAll: getAll
        }
    })

   
