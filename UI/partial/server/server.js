(function(){
    "use strict";
    angular.module('CloudPhoenix').controller('ServerCtrl',serverController);

    serverController.$inject = ['serverService','$scope','$stateParams'];



     function serverController(serverService,$scope,$stateParams){
         var self = this;
         self.server = [];
         this.serverService = serverService;
         this.$scope = $scope;
         this.$scope.id = $stateParams.id;
         this.serverService.getServer(parseInt($stateParams.id))
        .then(function(response){
            self.server = response;
        });
    }

    serverController.prototype.loadServers = function(id){
      this.serverService.getServer(parseInt(id))
      .then(function(response){
         this.server = response;
      }.bind(this));
    };

    serverController.prototype.saveEditedServers = function(newData){
      this.serverService.editServer(newData)
      .then(function(response){
         this.loadServers(newData.CompanyID);
      }.bind(this));
    };

    serverController.prototype.deleteServer = function(serverId){
      this.serverService.deleteServer(parseInt(serverId))
     .then(function(response){
         this.loadServers(this.$scope.id);
      }.bind(this));
    };

})();
