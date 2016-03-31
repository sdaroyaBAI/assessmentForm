(function () {
    "use strict";
    angular.module('CloudPhoenix').controller('SurveyCtrl', surveyController);


    surveyController.$inject = ['surveyService', 'sharedService', '$scope'];


    function surveyController(surveyService, sharedService, $scope) {
        var self = this;
        self.questions = [];
        self.companyID = sharedService.getCompanyID();
        
        

        surveyService.getSurveyQuestions(self.companyID)
            .then(function (response) {
                response.Table.forEach(function (item) {
                    self.questions.push(item);
                });

            }.bind(this));
<<<<<<< HEAD
            
         self.shouldShow = function(i){
            var myEl = document.getElementById('r1-2');
             if(i>2 && i<11){
                 if(myEl.checked){
                    return true;
                 }
                 return false;
             }     
             return true;
         }  
       
=======
        
        self.shouldShow = function(i){
            var myEl = document.getElementById('r1-2');
            if(i>2 && i<11){
                if(myEl.checked){
                    return true;
                }
                return false;
            }     
            return true;
        }
>>>>>>> origin/master
    }
    
    
})();
