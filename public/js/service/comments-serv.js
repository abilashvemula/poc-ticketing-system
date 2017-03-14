 'use strict'
angular.module('myApp')
 .factory('CommentServ', function($http) {

        function get(name, text) {
            let params = {
                customer_name: name,
                comments: text
            }
            return $http.get('/addcomments', { params: params })
                .then(res => {
                    return res.data
                })
        }
        return {
            get: get
        }
    });