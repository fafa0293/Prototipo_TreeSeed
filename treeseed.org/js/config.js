
angular.module('treeSeed')
.run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
.config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 'MODULE_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG, MODULE_CONFIG) {


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
              templateUrl: '/layouts/pages/index.html',
              controller: 'indexController'
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
        .state('treeSeed.searchTransReport', {
            url: '/str',
            templateUrl: '/layouts/pages/transparencyReportSearch.html'
            //resolve: load(['js/controllers/chart.js'])
        })
        
}]);

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

angular.module('treeSeed').config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])
  .config(['$translateProvider', function($translateProvider){
    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: 'js/l10n/',
      suffix: '.js'
    });
    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    // Tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();
  }]);
// lazyload config
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  angular.module('treeSeed').constant('JQ_CONFIG', {
      easyPieChart:   [   '/js/libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   '/js/libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   '/js/libs/jquery/flot/jquery.flot.js',
                          '/js/libs/jquery/flot/jquery.flot.pie.js', 
                          '/js/libs/jquery/flot/jquery.flot.resize.js',
                          '/js/libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
                          '/js/libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js',
                          '/js/libs/jquery/flot-spline/js/jquery.flot.spline.min.js'],
      moment:         [   '/js/js/libs/jquery/moment/moment.js'],
      screenfull:     [   '/js/libs/jquery/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   '/js/libs/jquery/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   '/js/libs/jquery/html5sortable/jquery.sortable.js'],
      nestable:       [   '/js/libs/jquery/nestable/jquery.nestable.js',
                          '/js/libs/jquery/nestable/jquery.nestable.css'],
      filestyle:      [   '/js/libs/jquery/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   '/js/libs/jquery/bootstrap-slider/bootstrap-slider.js',
                          '/js/libs/jquery/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   '/js/libs/jquery/chosen/chosen.jquery.min.js',
                          '/js/libs/jquery/chosen/bootstrap-chosen.css'],
      TouchSpin:      [   '/js/libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          '/js/libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   '/js/libs/jquery/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '/js/libs/jquery/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '/js/libs/jquery/datatables/media/js/jquery.dataTables.min.js',
                          '/js/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '/js/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   '/js/libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '/js/libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '/js/libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '/js/libs/jquery/bower-jvectormap/jquery-jvectormap.css'],
      footable:       [   '/js/libs/jquery/footable/dist/footable.all.min.js',
                          '/js/libs/jquery/footable/css/footable.core.css'],
      fullcalendar:   [   '/js/js/libs/jquery/moment/moment.js',
                          '/js/libs/jquery/fullcalendar/dist/fullcalendar.min.js',
                          '/js/libs/jquery/fullcalendar/dist/fullcalendar.css',
                          '/js/libs/jquery/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   '/js/libs/jquery/moment/moment.js',
                          '/js/libs/jquery/bootstrap-daterangepicker/daterangepicker.js',
                          '/js/libs/jquery/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   '/js/libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '/js/libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  angular.module('treeSeed').constant('MODULE_CONFIG', [
      {
          name: 'ngGrid',
          files: [
              '/js/libs/angular/ng-grid/build/ng-grid.min.js',
              '/js/libs/angular/ng-grid/ng-grid.min.css',
              '/js/libs/angular/ng-grid/ng-grid.bootstrap.css'
          ]
      },
      {
          name: 'ui.grid',
          files: [
              '/js/libs/angular/angular-ui-grid/ui-grid.min.js',
              '/js/libs/angular/angular-ui-grid/ui-grid.min.css',
              '/js/libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
          ]
      },
      {
          name: 'ui.select',
          files: [
              '/js/libs/angular/angular-ui-select/dist/select.min.js',
              '/js/libs/angular/angular-ui-select/dist/select.min.css'
          ]
      },
      {
          name:'angularFileUpload',
          files: [
            '/js/libs/angular/angular-file-upload/angular-file-upload.js'
          ]
      },
      {
          name:'ui.calendar',
          files: ['/js/libs/angular/angular-ui-calendar/src/calendar.js']
      },
      {
          name: 'ngImgCrop',
          files: [
              '/js/libs/angular/ngImgCrop/compile/minified/ng-img-crop.js',
              '/js/libs/angular/ngImgCrop/compile/minified/ng-img-crop.css'
          ]
      },
      {
          name: 'angularBootstrapNavTree',
          files: [
              '/js/libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
              '/js/libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
          ]
      },
      {
          name: 'toaster',
          files: [
              '/js/libs/angular/angularjs-toaster/toaster.js',
              '/js/libs/angular/angularjs-toaster/toaster.css'
          ]
      },
      {
          name: 'textAngular',
          files: [
              '/js/libs/angular/textAngular/dist/textAngular-sanitize.min.js',
              '/js/libs/angular/textAngular/dist/textAngular.min.js'
          ]
      },
      {
          name: 'vr.directives.slider',
          files: [
              '/js/libs/angular/venturocket-angular-slider/build/angular-slider.min.js',
              '/js/libs/angular/venturocket-angular-slider/build/angular-slider.css'
          ]
      },
      {
          name: 'com.2fdevs.videogular',
          files: [
              '/js/libs/angular/videogular/videogular.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.controls',
          files: [
              '/js/libs/angular/videogular-controls/controls.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.buffering',
          files: [
              '/js/libs/angular/videogular-buffering/buffering.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.overlayplay',
          files: [
              '/js/libs/angular/videogular-overlay-play/overlay-play.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.poster',
          files: [
              '/js/libs/angular/videogular-poster/poster.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.imaads',
          files: [
              '/js/libs/angular/videogular-ima-ads/ima-ads.min.js'
          ]
      },
      {
          name: 'xeditable',
          files: [
              '/js/libs/angular/angular-xeditable/dist/js/xeditable.min.js',
              '/js/libs/angular/angular-xeditable/dist/css/xeditable.css'
          ]
      },
      {
          name: 'smart-table',
          files: [
              '/js/libs/angular/angular-smart-table/dist/smart-table.min.js'
          ]
      },
      {
          name: 'angular-skycons',
          files: [
              '/js/libs/angular/angular-skycons/angular-skycons.js'
          ]
      }
    ]
  )
  // oclazyload config
  angular.module('treeSeed').config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  false,
          events: true,
          modules: MODULE_CONFIG
      });
  }])
;