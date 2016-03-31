(function(){
    "use strict";
    angular.module('CloudPhoenix').controller('ServerCtrl',serverController);    
    
    serverController.$inject = ['serverService','$scope','$stateParams'];
    
    
     function serverController(serverService,$scope,$stateParams){
         var self = this;
         self.server = [];
         serverService.getServer(parseInt($stateParams.id))
        .then(function(response){
            self.server = response;
        }.bind(this));
        
    }
})();