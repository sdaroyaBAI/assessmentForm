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

			function deleteServer(serverId){
				var promise =  $http({
					url: "http://localhost:22088/api/server/" + serverId,
					method: "DELETE"
				}).then(function(response){
					return response;
				}, function(errorResponse){
					console.log(errorResponse.status);
					console.log(errorResponse.data);
				});
				return promise;
			}

      function editServer(serverData){
          var promise = $http({
             url: "http://localhost:22088/api/server/" + serverData.CompanyID,
             method: "POST",
						 headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
						 data:	"CompanyID=" + serverData.CompanyID +
										"&ServerId=" + serverData.ServerID  +
										"&ServerName=" + serverData.Server +
										"&ServerType=" + serverData.ServerType +
										"&Processor=" + serverData.Processor +
										"&Memory=" + serverData.Memory +
										"&HardDisk=" + serverData.HardDisk +
										"&ApplicationsRunning=" + serverData.ApplicationsRunning +
										"&CriticalNonCritical=" + serverData.CriticalNonCritical +
										"&UpdatedBy=" + serverData.UpdatedBy +
										"&CreatedBy=" + serverData.CreatedBy +
										"&DateCreated=" + serverData.DateCreated
          }).then(function(response){
							return response;
          }, function(errorResponse){
              console.log(errorResponse.status);
              console.log(errorResponse.data);
          });
      }

			var service = {
                getServer: getServer,
								editServer: editServer,
								deleteServer: deleteServer
			};
			return service;
		}


})();
