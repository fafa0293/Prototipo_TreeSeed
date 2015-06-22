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
                Password: "test123",
                Type: "donor"
               
            },
            {
                Name: "Aramis@hola",
                Password: "test456",
                Type: "donor"
            },
            {
                Name: "Fabian@hola",
                Password: "test789",
                Type: "donor"
            }
            ,
            {
                Name: "a@hola",
                Password: "1",
                Type: "donor"
            },
             {
                Name: "territoriodezaguates@gmail.com",
                Password: "12345",
                Type: "ONG"
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

