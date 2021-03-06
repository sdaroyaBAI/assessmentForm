angular.module('CloudPhoenix', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('CloudPhoenix').config(function($stateProvider, $urlRouterProvider) {

 
    /* Add New States Above */
    
    $stateProvider.state('company', {
        url: '/company/:id',
        templateUrl: 'partial/company/company.html',
        controller: 'CompanyCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('createCompany', {
        url: '/createCompany',
        templateUrl: 'partial/createCompany/createCompany.html',
        controller: 'CreatecompanyCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('server', {
        url: '/server/:id',
        templateUrl: 'partial/server/server.html',
        controller: 'ServerCtrl',
        controllerAs: 'ctrl'
    });
    $stateProvider.state('survey', {
        url: '/survey/:id',
        templateUrl: 'partial/survey/survey.html',
        controller: 'SurveyCtrl',
        controllerAs: 'ctrl'
    });
    
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partial/home/home.html',
        controller: 'HomeCtrl',
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
