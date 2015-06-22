var treeSeedAppControllers = angular.module('treeSeed.controller',['treeSeed.services']);


treeSeedAppControllers.controller('indexController', function($state, $location) {
  if($sharedData.getLoged()===true){
    $location.path("treeseed.org/index");
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

treeSeedAppControllers.controller('SigninFormController', function($scope, $http, $state, $userData, $sharedData, $location) {
    $location.path("signin");
    if($sharedData.getLoged()===false){
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