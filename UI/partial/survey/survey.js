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
        
        self.setAnswers = function(answers){
            surveyService.setSurveyAnswers(JSON.stringify(answers));
        };
        
        self.shouldShow = function (i) {
            var myEl = document.getElementById('r1-2');
            if (!myEl.checked) {
                if (i > 2 && i < 11) {
                    return false;
                } else if (i === 11) {
                    return true;
                }
            }
            if (i === 11) {
                return false;
            }
            return true;
        };
    }


})();