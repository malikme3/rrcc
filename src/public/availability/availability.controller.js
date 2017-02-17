(function () {
"use strict";

angular.module('public')
.controller('availabilityController', availabilityController);

availabilityController.$inject = ['results'];
function availabilityController(results) {
  var $ctrl = this;
  $ctrl.matchResults = results;

      
        $ctrl.options = ["Available", "Not-Available", "Tentive","Out of town"];
        $ctrl.playerName = "Zulifqar Ahmad";
        $ctrl.playerAvailablity = "Available";


//        $ctrl.addInformation = function() {
//            CricService.addInfo(controller.playerName, controller.playerAvailablity);
//            controller.playerList = CricService.getPlayersList();
//};

}
    


})();
