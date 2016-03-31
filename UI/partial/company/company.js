(function(){
    "use strict";
    angular.module('CloudPhoenix').controller('CompanyCtrl',companyController);
    
    companyController.$inject = ['$scope','homeService','$stateParams'];
    
    function companyController($scope,homeService,$stateParams){
        // $scope.companies = [
        //   {name: "ABC Company", officeAddress: "sample", contactPerson:"sample",designation:"",email:"",contactNo:"sample",servers:"1",brand:"sample",bandwidth:"sample",activeDirectory:"asd"},
            
        // ];
        var self = this;
         homeService.getCompanyById(parseInt($stateParams.id))
        .then(function(response){
            self.company = JSON.parse(response.data.company_detail);
        }.bind(this));
    }
})();