(function () {
    "use strict";
    angular.module('CloudPhoenix').controller('SurveyCtrl', surveyController);

    surveyController.$inject = ['surveyService', 'sharedService', '$scope','$stateParams', '$location'];

    function surveyController(surveyService, sharedService, $scope,$stateParams,$location) {
        var self = this;
        self.questions = [];
        //self.companyID = sharedService.getCompanyID();
        self.companyID = $stateParams.id;

        surveyService.getSurveyQuestions(self.companyID)
            .then(function (response) {
                response.Table.forEach(function (item) {
                    self.questions.push(item);
                });

            }.bind(this));

        self.setAnswers = function(answers){
          surveyService.setSurveyAnswers(JSON.stringify(answers))
            .then(function (response){
            $location.path('/home');
            });
        };

        self.shouldShow = function (i) {
            var q3r1 = document.getElementById('r1-2');
            var currElement1 = document.getElementById('r1-'+i);
            var currElement2 = document.getElementById('r2-'+i);
            var currElement3 = document.getElementById('r3-'+i);
            if (!q3r1.checked) {
                if (i > 2 && i < 11) {
                    currElement1.checked = false;
                    currElement2.checked = false;
                    currElement3.checked = true;
                    return false;
                } else if (i === 11) {
                    return true;
                }
            }
            if (i === 11) {
                currElement1.checked = false;
                currElement2.checked = false;
                currElement3.checked = true;
                return false;
            }
            return true;
        };
    }


})();
