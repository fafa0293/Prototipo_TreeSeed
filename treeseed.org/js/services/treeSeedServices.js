var treeSeedAppServices = angular.module('treeSeed.services', []);

treeSeedAppServices.value('version', '0.1');

treeSeedAppServices.service('$sharedData', function(){
    var loggedUser = "";
    var loged = false;
    return {
        getLoggedUser : function(){
            return loggedUser;
        },
        setLoggedUser  : function(value){
            loggedUser =  value ;
        },
        getLoged : function(){
            return loged;
        },
        setLoged  : function(value){
            loged =  value ;
        }
    }
});

treeSeedAppServices.service('$userData', function(){
    var users = [
            {
                Name: "Ricardo@hola",
                Password: "test123"
               
            },
            {
                Name: "Aramis@hola",
                Password: "test456"
            },
            {
                Name: "Fabian@hola",
                Password: "test789"
            }
            ,
            {
                Name: "a@hola",
                Password: "1"
            }
        ];
    return {
        getUsers : function(){
            return users;
        },
        setUsers : function(value){
            users = value;
        }
    } 
});

