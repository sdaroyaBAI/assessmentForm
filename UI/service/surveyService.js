(function () {
    "use strict";

    angular.module('CloudPhoenix')
        .factory('surveyService', surveyService);

    surveyService.$inject = ['$http', '$q'];

    function surveyService($http, $q) {
        function getSurveyQuestions(id) {
            var promise = $http({
                url: "http://localhost:22088/api/survey/" + id, 
                method: "GET"
            }).then(function (response) {
                return response.data.survey;
            }, function (errorResponse) {
                console.log(errorResponse.status);
                console.log(errorResponse.data);
            });
            return promise;
        }

        var service = {
            getSurveyQuestions: getSurveyQuestions
        };
        return service;
    }


})();