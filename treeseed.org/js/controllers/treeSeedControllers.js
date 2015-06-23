
var treeSeedAppControllers = angular.module('treeSeed.controller',['treeSeed.services']);


treeSeedAppControllers.controller('transpReportSearchController', function($state, $location,$sharedData, $scope) {
    $scope.resul = false;
      //$scope.styleClass="form-control";
      
      $scope.ong=$sharedData.getOngName();

    $scope.search = function(){
      $scope.resul = true;
      
    };
});
treeSeedAppControllers.controller('searchTransparecyReportController', function($state, $location,$sharedData, $scope) {
  //if($sharedData.getLoged()==true){
      $scope.begin = "";
      $scope.end = "";

    /*$scope.validar = function(){
      $scope.valuesStart=fechaInicial.split("-");
      $scope.valuesEnd=fechaFinal.split("-");

      // Verificamos que la fecha no sea posterior a la actual
      $scope.dateStart=new Date(valuesStart[2],(valuesStart[1]-1),valuesStart[0]);
      $scope.dateEnd=new Date(valuesEnd[2],(valuesEnd[1]-1),valuesEnd[0]);
      if(dateStart>=dateEnd)
      {
          return true;
      }
      return false;
    }*/

    //*********************************calendar*************************
    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

  //}else{
    //$state.go('signin');
 // }
  })
;




treeSeedAppControllers.controller('indexController', function($state, $location,$sharedData, $scope) {
  //if($sharedData.getLoged()==true){
    $scope.report=function(){
      $state.go('treeSeed.searchTransReport');
    }
  //}else{
  //  $state.go('signin');
  //}
  })
;

treeSeedAppControllers.controller('logoutController', function($sharedData, $location, $scope,$state) {
    $scope.logout=function(){
        $sharedData.setLoggedUser('');
        $sharedData.setLoged(false);
        $state.go('signin');
    }
  })
;

treeSeedAppControllers.controller('navigateController', function($state, $location,$sharedData, $scope) {
    $scope.navigateDonor=function(){
      $state.go('treeSeed.donor');
    }
  })
;

treeSeedAppControllers.controller('SigninFormController', function($scope, $http, $state, $userData, $sharedData, $location) {
    if($sharedData.getLoged()==false){
      $scope.authError = null;
      $scope.users = $userData.getUsers();
      $scope.login = function() {
        var totalUsers = $scope.users.length;
          var usernameTyped = $scope.user.email;
          var passwordTyped = $scope.user.password;
          var userType = "";
          var loggedin= false;
          
         for(i=0; i < totalUsers; i++ ) {
              if( $scope.users[i].Name == usernameTyped && $scope.users[i].Password == passwordTyped) {
                  loggedin=true;
                  userType = $scope.users[i].Type;
              }
          }

          if( loggedin === true ) {
              $sharedData.setLoggedUser(usernameTyped);
              $sharedData.setLoged(true);

              if(userType == "ONG"){
                   $state.go('treeSeed.nonProfit');
              }else{
                  $state.go('treeSeed.index');
              }
              

          } else {
              $scope.authError="wrong email or password";
              $sharedData.setLoged(false);
          }
      };
    }else{
      $state.go('treeSeed.index');
    }
})
;

treeSeedAppControllers.controller('TypeaheadDemoCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function(res){
        var addresses = [];
        angular.forEach(res.data.results, function(item){
          addresses.push(item.formatted_address);
        });
        return addresses;
      });
    };
  }])
  ; 






  treeSeedAppControllers.controller('NonProfitController', function($scope, $http, $state,  $sharedData, $location) {
   
})
;


treeSeedAppControllers.controller('CarouselDemoCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: 'http://placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  }])
  ; 
