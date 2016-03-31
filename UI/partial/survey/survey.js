(function () {
    "use strict";
    angular.module('CloudPhoenix').controller('SurveyCtrl', surveyController);


    surveyController.$inject = ['surveyService', '$scope'];

    function surveyController(surveyService, $scope) {

        $scope.questions = [{
            name: "asd company"
        }, {
            name: "asd2 company"
        }, {
            name: "asd3 company"
        }];
    }

    surveyController.prototype.getAllQuestions = function () {
        this.surveyService.getSurveyQuestions().then(function (response) {
            this.questions = response.data.Content;
        }.bind(this));
    };
})();