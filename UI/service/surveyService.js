angular.module('CloudPhoenix').factory('surveyService',function() {

	var surveyService = {};

	return surveyService;
});
(function () {
    "use strict";

    angular.module('CloudPhoenix')
        .factory('surveyService', surveyService);

    surveyService.$inject = ['$http', '$q'];

    function surveyService($http, $q) {
        function getSurveyQuestions(id) {
            var promise = $http({
                url: "http://localhost:22088/api/survey/" + id, method: "GET"
            }).then(function (response) {
                return response.data.survey;
            }, function (errorResponse) {
                console.log(errorResponse.status);
                console.log(errorResponse.data);
            });
            return promise;
        }

         function setSurveyAnswers(answers){
             var promise = $http({
                 url: "http://localhost:22088/api/survey/", 
                 method: "POST",
                 data: answers,
                 contentType: "application/json; charset=utf-8"
             }).then(function (response) {
                 return response;
             }, function (errorResponse) {
                 console.log(errorResponse.status);
                 console.log(errorResponse.data);
             });
             return promise;
         }

        var service = {
            getSurveyQuestions: getSurveyQuestions,
            setSurveyAnswers: setSurveyAnswers
        };
        return service;
    }


})();
