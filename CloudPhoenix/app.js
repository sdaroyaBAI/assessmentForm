angular.module('CloudPhoenix', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('CloudPhoenix').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    
    $stateProvider.state('company', {
        url: '/company',
        templateUrl: 'partial/company/company.html',
        controller: 'CompanyCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('server', {
        url: '/server',
        templateUrl: 'partial/server/server.html',
        controller: 'ServerCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('survey', {
        url: '/survey',
        templateUrl: 'partial/survey/survey.html',
        controller: 'SurveyCtrl',
        controllerAs: 'ctrl'
    });
    
    $urlRouterProvider.otherwise('/home');

});

angular.module('CloudPhoenix').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
