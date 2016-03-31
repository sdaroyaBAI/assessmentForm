(function () {
    "use strict";

    angular.module('CloudPhoenix')
        .factory('surveyService', surveyService);

    surveyService.$inject = ['$http', '$q'];

    function surveyService($http, $q) {
        function getAllQuestions() {
            var promise = $http({
                url: "http://localhost:22088/api/survey", method: "GET"
            }).then(function (response) {
                return response;
            }, function (errorResponse) {
                console.log(errorResponse.status);
                console.log(errorResponse.data);
            });
            return promise;
        }

        var service = {
            getAllQuestions: getAllQuestions
        };
        return service;
    }


})();