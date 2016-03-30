/*
(function () {
    "use strict";
    angular.module('CloudPhoenix').controller('SurveyCtrl', surveyController);


    surveyController.$inject = ['surveyService', '$scope'];

    function surveyController(surveyService, $scope) {

        $scope.questions = [];
        surveyService.getAllQuestions().then(function (results) {

            $scope.questions = results.data;

        });
    }

    surveyController.prototype.getAllQuestions = function () {
        this.surveyService.getSurveyQuestions().then(function (response) {
            this.questions = response.data.Content;
        }.bind(this));
    };
})();
*/


(function(){
    "use strict";
    angular.module('CloudPhoenix').controller('SurveyCtrl', surveyController);


    surveyController.$inject = ['surveyController','$scope'];
    
    
     function surveyController(surveyService,$scope){
         var self = this;
        self.questions = [];
        
        surveyService.getSurveyQuestions()
        .then(function(response){
            JSON.parse(response.survey)
            .forEach(function(question) {
                self.questions.push(question);
            });
        }.bind(this));
    }
})();