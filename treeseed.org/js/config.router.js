
angular.module('treeSeed')

.config(function ($stateProvider,   $urlRouterProvider) {


    $urlRouterProvider.otherwise('/signin');
    $stateProvider
        .state('treeSeed',{
            abstract: true,
            url: '/treeseed.org',
            templateUrl: '/layouts/pages/main.html'
        })    
        .state('signin',{
            url: '/signin',
            templateUrl: '/layouts/components/page_signin.html',
            controller: 'SigninFormController'
        })
        .state('treeSeed.index', {
              url: '/index',
              templateUrl: '/layouts/pages/index.html'
              //controller: 'TypeaheadDemoCtrl'
        })    
        .state('treeSeed.donor', {
              url: '/donor',
              templateUrl: '/layouts/pages/donor.html'
              //controller: 'TypeaheadDemoCtrl'
        })
        .state('treeSeed.nonProfit', {
             url: '/nonProfit',
             templateUrl: '/layouts/pages/nonProfit.html'
             //resolve: load(['js/controllers/chart.js'])
        })
        .state('treeSeed.donate', {
            url: '/donate',
            templateUrl: '/layouts/pages/donate.html'
            //resolve: load(['js/controllers/chart.js'])
        })
        
});

/*.config(function($routeProvider, $locationProvider, $urlRouterProvider) {

    $routeProvider.when('/signin', {
                templateUrl: '/layouts/main.html', 
                controller: 'SigninFormController'                    
            } );
    $routeProvider.when('/', {
                emplateUrl: '/layouts/main.html' 
                //controller: 'moviesController'                    
            } );
    $routeProvider.when('/donor', {
                templateUrl: '/layouts/donor.html' 
                //controller: 'moviesController'
            } );
    $routeProvider.when('/nonProfit', {
                templateUrl: '/layouts/nonProfit.html'                    
                //controller: 'seatsController'
            } );
    $routeProvider.when('/donate', {
                templateUrl: '/layouts/donate.html' 
                //controller: 'confirmationController'
            } );

    //$locationProvider.html5Mode(true);

});*/

