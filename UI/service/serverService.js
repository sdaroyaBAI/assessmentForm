(function(){
	"use strict";

	angular.module('CloudPhoenix')
		.factory('serverService', serverService);

		serverService.$inject = ['$http', '$q'];

		function serverService($http, $q){
			function getServer(id){
				var promise =  $http({
					url: "http://localhost:22088/api/server/" + id,
					method: "GET"
				}).then(function(response){
					return response.data.servers.Table;
				}, function(errorResponse){
					console.log(errorResponse.status);
					console.log(errorResponse.data);
				});
				return promise;
			}
            
            function editServer(id){
                var promise = $http({
                   url: "http://localhost:22088/api/server/edit" + id,
                   method: "POST" 
                }).then(function(response){
                    
                }, function(errorResponse){
                    console.log(errorResponse.status);
                    console.log(errorResponse.data);
                });
            }

			var service = {
                getServer: getServer
			};
			return service;
		}


})();
