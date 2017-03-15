'use strict'
angular.module('myApp')
 .factory('AssignServ', function($http) {
  function get(name, user) {

            let params = {
                customer_name: name,
                user: user
            }
           return $http.get('/assignuser', {params: params})
           .then(res => {
                return res.data;
            })
       }
       return {
            get: get
        }

        });
