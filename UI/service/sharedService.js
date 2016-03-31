(function () {
    "use strict";

    angular.module('CloudPhoenix')
        .factory('sharedService', sharedService);

    function sharedService() {
        var companyID = '1';
        var companyName = '';

        function getCompanyID() {
            return companyID;
        }

        function setCompanyID(value) {
            companyID = value;
        }
        
        function getCompanyName() {
            return companyName;
        }

        function setCompanyName(value) {
            companyName = value;
        }

        var service = {
            getCompanyID: getCompanyID,
            setCompanyID: setCompanyID,
            getCompanyName: getCompanyName,
            setCompanyName: setCompanyName
        };
        return service;
    }


})();