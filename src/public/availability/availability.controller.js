(function() {
	"use strict";

	angular.module('public').controller('availabilityController', availabilityController);

	availabilityController.$inject = [ 'MenuService' ];
	function availabilityController(MenuService) {
		var $ctrl = this;
		$ctrl.options = [ "Available", "Not-Available", "Tentive", "Out of town" ];
		$ctrl.playerAvailablity = "Available";
		$ctrl.playerName = [];
		$ctrl.key_search = "";
		$ctrl.availablePlayer = [];
		$ctrl.notAvailablePlayer = [];
		$ctrl.OutOfTownPlayer = [];
		$ctrl.tentivePlayer = [];
		$ctrl.submittButton = false;
		/*$ctrl.upDateSelection = function(name) {
			$ctrl.key_search = name;
		}*/
		/*
		 * $ctrl.getTeamPlayers = function() { $ctrl.playerList =
		 * MenuService.getTeamPlayers(); console.log("BEFORE: playerList =
		 * "+$ctrl.playerList) return; };
		 */

		$ctrl.playersList = [ {
			"player_id" : 1,
			"player_name" : "Zabair Hussain",
			"player_team" : "Lion",
			"player_club" : "Round Rock"
		}, {
			"player_id" : 2,
			"player_name" : "Basit Zabair",
			"player_team" : "Tiger Pro",
			"player_club" : "Round Rock"
		}, {
			"player_id" : 3,
			"player_name" : "Majid Zabair",
			"player_team" : "Tiger Pro",
			"player_club" : "Round Rock"
		}, {
			"player_id" : 4,
			"player_name" : "Zulifqr **",
			"player_team" : "Tiger Pro",
			"player_club" : "Round Rock"
		} ];
		$ctrl.getPlayerlist = function() {

		}

		MenuService.getTeamPlayers().then(function(response) {
			$ctrl.players = response;
		});

		$ctrl.playerClicked = function(player) {
			$ctrl.playerData = player;
			$ctrl.key_search = $ctrl.playerData.player_name;
			$ctrl.submittButton = true;
		}

		$ctrl.submitAvailability = function(playerName, availability) {
			var playerId = $ctrl.playerData.player_id;
			MenuService.playerForSelection(playerId, playerName, availability).then(function(response) {
				$ctrl.players = response;
			});
			MenuService.getTeamPlayers().then(function(response) {
				$ctrl.players = response;
			});
		}

	}

})();
