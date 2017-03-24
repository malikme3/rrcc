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
        $ctrl.isCaptain = true;
        
       /* For Team Selection*/
      var selectedPlayers = [];
       $ctrl.checkedPlayer = function checkedPlayer(fieldName) {
          var idx = selectedPlayers.indexOf(fieldName);
          $ctrl.players.forEach(function(component) {
            if (idx > -1) {
              if (component.player_name == fieldName) {
                var idxUnchecked = selectedPlayers.indexOf(fieldName);
                if (idxUnchecked != -1) {
                selectedPlayers.splice(idx, 1);
                component.editable = false;
                component.disabled = true;
                }
              }
            } else {
              if (component.player_name == fieldName) {
                var idxChecked = selectedPlayers.indexOf(fieldName);
                if (idxChecked == -1) {
                selectedPlayers.push(fieldName);
                component.editable = true;
                component.disabled = false;
                }
              }
            }
          });
		        };

		$ctrl.submitTeam = function submitTeam() {

		};

		MenuService.getTeamPlayers().then(function(response) {
			$ctrl.players = response;
		});

		$ctrl.playerClicked = function(player) {
			$ctrl.playerData = player;
			$ctrl.key_search = $ctrl.playerData.player_firstName+" "+ $ctrl.playerData.player_lastName;
			$ctrl.submittButton = true;
		}

		$ctrl.submitAvailability = function(availability) {
			var player = $ctrl.playerData;
			MenuService.playerForSelection(player,availability).then(function(response) {
				$ctrl.players = response;
			});
			MenuService.getTeamPlayers().then(function(response) {
				$ctrl.players = response;
			});
		}

	}

})();
