(function(){
    "use strict";
    angular.module('CloudPhoenix').controller('HomeCtrl', homeController);


    homeController.$inject = ['homeService','$scope','$stateParams'];
    
    
     function homeController(homeService,$scope,$stateParams){
         var self = this;
        self.companies = [];
        
        homeService.getAllCompanies()
        .then(function(response){
            JSON.parse(response.company_list)
            .forEach(function(company) {
                self.companies.push(company);
            });
        }.bind(this));
    }
})();
