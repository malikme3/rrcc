(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$http', 'ApiPath', '$q', 'ApiMVC'];
function UserService($http,ApiPath, $q, ApiMVC) {
  var service = this;
  service.userInfo = {"firstName":"", "lastName":"", "email":"", "phone":"", "fave":"","short_name":"","name":"","description":"","imgPath":""};

  service.getUserInfo = function () {
    return service.userInfo;
  };

  service.setUserInfo = function (userInfo) {
    service.userInfo = userInfo;
    console.log("setUserInf",service.userInfo)
    if (service.userInfo.fave===undefined){
      return 1;
    }else{
      var promise = service.getMenuItem(service.userInfo.fave);
      promise.then(function(response){
        service.dbReturn = response.data;
        console.log("setUserInfo.then",response.data)
        console.log("service.dbreturn",service.dbReturn)
        if (service.dbReturn=="Error"){
          console.log("500 dbReturn",service.dbReturn)
          return 1;
        }else{
          service.userInfo.name=service.dbReturn.name;
          service.userInfo.short_name=service.dbReturn.short_name;
          service.userInfo.description=service.dbReturn.description;
          service.userInfo.imgPath=ApiPath+'/images/'+service.userInfo.fave+'.jpg';
          console.log("not 500 dbReturn",service.dbReturn)
          console.log("userInfo",service.userInfo)
          return 2;
        }
      }).catch(function(error){
        console.log("catch error")
        return 1;
      });
    }
  };
  
  service.setPlayerInfo = function(playerInfo){
	  console.log("In service for registration");
	  service.playerInfo = playerInfo;
		var deferred = $q.defer();
		
		$http.post(ApiMVC + '/player/registration' , playerInfo, {headers: {'Content-Type': 'application/json'} }).then(function(response) {
			deferred.resolve(response.data);
		}, function(errResponse) {
			console.error('in User Service: Error while registrating player');
			deferred.reject(errResponse);
		});
		return deferred.promise;
	}

// Checking if user already exist
  service.checkExistingPayer = function(playerInfo){
	  console.log("In service for checking existing player");
	  service.playerInfo = playerInfo;
		var deferred = $q.defer();

		$http.post(ApiMVC + '/player/exist' , playerInfo, {headers: {'Content-Type': 'application/json'} }).then(function(response) {
			deferred.resolve(response.data);
		}, function(errResponse) {
			console.error('in User Service: Error while checking existing player');
			deferred.reject(errResponse);
		});
		return deferred.promise;
	}

  // For login
  service.goLogin = function(loginInfo){
	  console.log("In service: For Login");
	  service.playerInfo = loginInfo;
		var deferred = $q.defer();
		$http.get(ApiMVC + '/player/login' , loginInfo, {headers: {'Content-Type': 'application/json'} }).then(function(response) {
			deferred.resolve(response.data);
		}, function(errResponse) {
			console.error('in User Service: Error while registrating player');
			deferred.reject(errResponse);
		});
		return deferred.promise;
	}

    service.getMenuItem = function (category) {
        return $http.get(ApiPath + '/menu_items/'+category+'.json'); 
  };

}
})();
