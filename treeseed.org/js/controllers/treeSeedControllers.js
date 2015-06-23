
var treeSeedAppControllers = angular.module('treeSeed.controller',['treeSeed.services']);


treeSeedAppControllers.controller('menuController', function($state, $location,$sharedData, $scope) {
    $scope.getMenu=function(){
      if($sharedData.getUserType() == "ONG"){
          return  "layouts/components/aside.html";
      }else{
          return "layouts/components/asideDonor.html" ;
      }
    }
    


});


treeSeedAppControllers.controller('searchTransparecyReportController', function($state, $location,$sharedData, $scope) {
      $scope.resul = false;
    //if($sharedData.getLoged()==true){
      
      $scope.ong=$sharedData.getOngName();

      $scope.search = function(){
        $scope.resul = true;  
      };

    //}else{
      //$state.go('signin');
    //}
  })
;




treeSeedAppControllers.controller('indexController', function($state, $location,$sharedData, $scope) {
  if($sharedData.getLoged()==true){
    $scope.report=function(){
      $state.go('treeSeed.searchTransReport');
    }
  }else{
    $state.go('signin');
  }
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

    $scope.navigateONG=function(){
      $state.go('treeSeed.nonProfit');
    }

    $scope.navigateCampaing=function(){
      $state.go('treeSeed.campaingViewer');
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
               $sharedData.setUserType(userType);

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


  treeSeedAppControllers.controller('DonationCtrl', function($state, $location,$sharedData, $scope, $modal, $log) {
      $scope.animationsEnabled = true;

      $scope.open = function () {

        var modalInstance = $modal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'ModalDonationCtrl',
        });
      };

      $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
      };
  })
;



 treeSeedAppControllers.controller('ModalDonationCtrl', function($state, $location,$sharedData, $scope, $modalInstance, $timeout) {

  $scope.ok = function () {

    $scope.correcto = "Donacion Realizada Correctamente!";
    $scope.status=true;
    $timeout(function () { $modalInstance.close();}, 3000);
    
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  })
;

 