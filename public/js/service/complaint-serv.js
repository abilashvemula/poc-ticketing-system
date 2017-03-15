 'use strict'
angular.module('myApp')
 .factory('ComplaintServ', function($http) {
 	function get(name, text){
       let params = {
                customer_name: name,
                complaint: text
            }
           return $http.get('/addcomplaint', {params: params})
                .then(res => {
                    return res.data
            })
            }
            return {
            get: get
        }

        });

