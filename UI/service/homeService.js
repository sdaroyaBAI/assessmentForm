(function(){
	"use strict";

	angular.module('CloudPhoenix')
		.factory('homeService', homeService);

		homeService.$inject = ['$http', '$q'];

		function homeService($http, $q){
			function getAllCompanies(){
				var promise =  $http({
					url: "http://localhost:22088/api/company",
					method: "GET"
				}).then(function(response){
					return response.data;
				}, function(errorResponse){
					console.log(errorResponse.status);
					console.log(errorResponse.data);
				});
				return promise;
			}
            
            function getCompanyById(id){
                var promise = $http({
                    url: "http://localhost:22088/api/company/" + id,
                    method: "GET"
                }).then(function(response){
                  return response;  
                }, function(errorResponse){
                   console.log(errorResponse.status);
					console.log(errorResponse.data); 
                });
                return promise;
            }
            
            function createCompany(){
                var promise = $http({
                    url: "http://localhost:22088/api/company",
                    method: "POST"
                }).then(function(response){
                    return response;
                }, function(errorResponse){
                    console.log(errorResponse.status);
                    console.log(errorResponse.data);
                });
                return promise;
            }
            

			var service = {
                getAllCompanies: getAllCompanies,
                getCompanyById: getCompanyById
			};
			return service;
		}


})();
