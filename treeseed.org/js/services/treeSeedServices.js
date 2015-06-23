'use strict';
var treeSeedAppServices = angular.module('treeSeed.services', []);

treeSeedAppServices.value('version', '0.1');

treeSeedAppServices.service('$sharedData', function(){
    var loggedUser = "";
    var type = "";
    var loged = false;
    var ongName = "Territorio de Zaguates"
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
        },
        getOngName : function(){
            return ongName;
        },
        setOngName  : function(value){
            ongName =  value ;
        },
        getUserType : function(){
            return type;
        },
        setUserType  : function(value){
            type =  value ;
        }
    }
});

treeSeedAppServices.service('$userData', function(){
    var users = [
            {
                Name: "Ricardo Bonilla",
                Email: "eldoc@gmail.com"
                Password: "123",
                Type: "donor"
               
            },
            {
                Email: "Aramis@hola",
                Password: "test456",
                Type: "donor"
            },
            {
                Email: "camilo@hola",
                Password: "test123",
                Type: "donor"
            },
            {
                Email: "Fabian@hola",
                Password: "test789",
                Type: "donor"
            }
            ,
            {
                Email: "a@hola",
                Password: "1",
                Type: "donor"
            },
             {
                Email: "territoriodezaguates@gmail.com",
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

