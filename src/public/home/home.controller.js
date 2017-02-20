(function () {
    "use strict";
    angular.module('public').controller('HomeController', HomeController);
    //HomeController.$inject = [''];

    function HomeController() {
        var $ctrl = this;
        
        $ctrl.tableData = [
            {
                "id": "58ab0b1fa456c568903fb707"
                , "picture": "http://placehold.it/32x32"
                , "age": 20
                , "name": "Eaton Fields"
                , "team": "COMSTRUCT"
                , "score": "DAIDO"
  }
            , {
                "id": "58ab0b1f04c4d254c9864e4b"
                , "picture": "http://placehold.it/32x32"
                , "age": 20
                , "name": "Holden Wright"
                , "team": "COMBOT"
                , "score": "ISOLOGIX"
  }
            , {
                "id": "58ab0b1f61433ed9629721c8"
                , "picture": "http://placehold.it/32x32"
                , "age": 20
                , "name": "Bass Russo"
                , "team": "EWAVES"
                , "score": "APEXIA"
  }
]
        $ctrl.tableHeader = [
            {
                "id": "id"
                , "name": "Name"
                , "team": "Team"
                , "score": "Score"
                , "Matches": "Matches"
                , "Score": "Score"
                    //                , "Avergae": "Average"
                    //                , "highestScore": "Highest Score"
                    //                , "Notout": "Not out"
  }
]
    };

})();