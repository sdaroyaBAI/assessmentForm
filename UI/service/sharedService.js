(function () {
    "use strict";

    angular.module('CloudPhoenix')
        .factory('sharedService', sharedService);

    function sharedService() {
        var companyID = '';

        function getCompanyID() {
            return companyID;
        }

        function setCompanyID(value) {
            companyID = value;
        }

        var service = {
            getCompanyID: getCompanyID,
            setCompanyID: setCompanyID
        };
        return service;
    }


})();