(function() {
	'use strict';
	angular.module('common').controller('SignUpController', SignUpController).controller('MyInfoController', MyInfoController).controller(
			'LogInController', LogInController);

	SignUpController.$inject = [ 'UserService' ];
	function SignUpController(UserService) {
		var signUpCtrl = this;

		signUpCtrl.submitted = false;
		signUpCtrl.isPlayerExist = false;
		signUpCtrl.fn_check = false;
		signUpCtrl.ln_check = false;

		signUpCtrl.existing = function() {
			return (UserService.getUserInfo().firstName === "");
		}

		// Submitting details for player registration (only one time)
		signUpCtrl.goSubmit = function goSubmit(playerInfo) {
			console.log("Calling back end to PLAYER UPDATE OF regis")
			console.log("Submitting Player details for regiration");
			UserService.setPlayerInfo(playerInfo).then(function(response) {
				signUpCtrl.players = response;
			});
		}

		// Checking if user already exist
		signUpCtrl._fn_check = function fhncheck(player) {

			if (player != undefined) {
				console.log("First Name has been Added " + player.player_firstName)
				signUpCtrl.fn_check = true;
				if (signUpCtrl.ln_check && player.player_firstName.length > 3) {
					signUpCtrl.checkPlayerInfo(player);
				}
			}
		}
		signUpCtrl._ln_check = function lncheck(player) {

			if (player != undefined) {
				console.log("Last Name has been Added " + player.player_lastName)
				signUpCtrl.ln_check = true;
				if (signUpCtrl.fn_check && player.player_lastName.length > 3) {
					signUpCtrl.checkPlayerInfo(player);
				}
			}
		}

		// Populating existing player
		signUpCtrl.checkPlayerInfo = function(player) {
			console.log("Calling back end to get Information, if Player already exisit")
			UserService.checkExistingPayer(player).then(function(response) {

				if (response.length == 1) {
					signUpCtrl.isPlayerExist = true;
					signUpCtrl.player = response[0];
				} else if (response.length >= 2) {
					signUpCtrl.isPlayerExist = true;
					console.log("More than player exist with indentical First and Last Name")
				} else {
					signUpCtrl.isPlayerExist = false;
					console.log("Player donot Exist, Please register your self")
				}
			});
		}
	};

	/* *************Start of MyInfoController ************* */
	MyInfoController.$inject = [ 'UserService', 'favoriteItem' ];
	function MyInfoController(UserService, favoriteItem) {
		var myInfCtrl = this;
		console.log(myInfCtrl)
		myInfCtrl.userInfo = UserService.getUserInfo();
		myInfCtrl.userInfo.short_name = favoriteItem.short_name;
		myInfCtrl.userInfo.description = favoriteItem.description;
		myInfCtrl.userInfo.name = favoriteItem.name;

		myInfCtrl.existing = function() {
			return (myInfCtrl.userInfo.firstName === "");
		}
	}

	/* *************Start of LogInController ************* */
	LogInController.$inject = [ 'UserService' ];
	function LogInController(UserService) {
		var logInCtrl = this;
		logInCtrl.loginId = "true";
		logInCtrl.loginPassword = "true";

		var loginInfo = {
			"username" : logInCtrl.username,
			"password" : logInCtrl.password
		};

		logInCtrl.loginSubmit = function loginSubmit() {
			console.log("Submitting login details for sign in");
			UserService.goLogin(loginInfo).then(function(response) {
				logInCtrl.players = response;
			});
		}

	}
})();
