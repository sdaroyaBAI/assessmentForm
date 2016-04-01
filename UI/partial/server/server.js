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
         this.serverId = 0;
         this.$scope.newServer  = {};
         this.serverService.getServer(parseInt($stateParams.id))
        .then(function(response){
            self.server = response;
        });
    }

    serverController.prototype.setServerid = function(id){
        this.serverId = id;
    };

    serverController.prototype.resetModal = function(){
      $("modal :input[type='text']").val('');
    };

    serverController.prototype.loadServers = function(id){
      this.serverService.getServer(parseInt(id))
      .then(function(response){
         this.server = response;
      }.bind(this));
    };

    serverController.prototype.cancelEdit = function(item){
      this.loadServers(this.$scope.id);
    };

    serverController.prototype.saveEditedServers = function(newData){
      this.serverService.editServer(newData);
    };

    serverController.prototype.saveNewServers = function(newData){

      var self = this;

      var currentTime = new Date();
      var month = currentTime.getMonth() + 1;
      var day = currentTime.getDate();
      var year = currentTime.getFullYear();
      self.$scope.newServer = newData;

      self.$scope.newServer.CompanyID = self.$scope.id;
      self.$scope.newServer.ServerId = 0;
      self.$scope.newServer.DateCreated = month + "/" + day + "/" + year;
      self.$scope.newServer.UpdatedBy = "john";
      self.$scope.newServer.CreatedBy = "john";

      this.serverService.editServer(self.$scope.newServer)
      .then(function(response){
        self.loadServers(self.$scope.id);
        this.$scope.newServer = {};
      }.bind(this));
    };



    serverController.prototype.deleteServer = function(serverId){
      this.serverService.deleteServer(parseInt(serverId))
      .then(function(response){
         this.loadServers(this.$scope.id);
      }.bind(this));
    };

})();
