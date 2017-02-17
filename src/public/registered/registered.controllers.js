(function(){
    'use strict';
    angular.module('common')
    .controller('SignUpController',SignUpController)
    .controller('MyInfoController',MyInfoController);

    SignUpController.$inject = ['UserService'];
    function SignUpController(UserService){
        var signUpCtrl = this;
        signUpCtrl.submitted = false;
        signUpCtrl.existing= function(){
            return (UserService.getUserInfo().firstName ==="");
        }
        signUpCtrl.go = function(){
            var item;
            for (item in signUpCtrl){
                console.log(item)
               if (item==undefined){
                   item="";
               }
            }
            var userInfo = {"firstName":signUpCtrl.name, "lastName":signUpCtrl.surname, "email":signUpCtrl.email, "phone":signUpCtrl.phone, "fave":signUpCtrl.fave.toUpperCase(),"short_name":"","name":"","description":"","imgPath":""};
            console.log("userInfo",userInfo)
            signUpCtrl.response = UserService.setUserInfo(userInfo);
            console.log("signUpCtrl.response",signUpCtrl.response)
            signUpCtrl.submitted = true;
        }

  signUpCtrl.input = [{
  "field-title": "First Nam",
  "field-value": "first_name"
}, {
  "field-title": "Last Name",
  "field-value": "last_name"
}, {
  "field-title": "E-Mail",
  "field-value": "email"
}, {
  "field-title": "Phone #",
  "field-value": "phone"
}, {
  "field-title": "Address",
  "field-value": "address"
}, {
  "field-title": "City",
  "field-value": "city"
}, {
  "field-title": "team",
  "field-value": "team"
}, {
  "field-title": "club",
  "field-value": "club"
}];
    }


    MyInfoController.$inject = ['UserService','favoriteItem'];
    function MyInfoController(UserService,favoriteItem){
        var myInfCtrl = this;
        console.log(myInfCtrl)
        myInfCtrl.userInfo = UserService.getUserInfo();
        myInfCtrl.userInfo.short_name = favoriteItem.short_name;
        myInfCtrl.userInfo.description = favoriteItem.description;
        myInfCtrl.userInfo.name = favoriteItem.name;

        myInfCtrl.existing= function(){
            return (myInfCtrl.userInfo.firstName ==="");
        }
    }
})();
