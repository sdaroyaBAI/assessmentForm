(function(){
  "use strict";
  angular.module('CloudPhoenix').controller('CreatecompanyCtrl',createcompanyCtrl);

  createcompanyCtrl.$inject = ['$scope','homeService','$stateParams','$state'];

  function createcompanyCtrl($scope,homeService,$stateParams,$state){
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.homeService = homeService;
    this.$state = $state;
    this.newCompany = {};
  }
  createcompanyCtrl.prototype.save = function(company){
      var self = this;
      company.CreatedBy = "";
      company.UpdatedBy = "";
      this.homeService.createCompany(this.newCompany)
      .then(function(response){
          self.$state.go('home');
      }, function(errorResponse){
      });
  };

})();