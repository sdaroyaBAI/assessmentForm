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
    }
})();
