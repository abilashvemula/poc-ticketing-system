 'use strict'
angular.module('myApp')
 .factory('StatusServ', function($http) {
 function get(name){

 let params = {
                customer_name: name
            }
           return $http.get('/changestatus', {params: params})
           .then(res => {
                return res.data
            })
}
return {
            get: get
        }
        });

 