(function () {
    "use strict";
    angular.module('public').controller('HomeController', HomeController);
    //HomeController.$inject = [''];

    function HomeController() {
        var $ctrl = this;
        
        $ctrl.tableData = [
            {
                "id": "1"
                , "picture": "hi"
                , "age": 20
                , "name": "Eaton Fields"
                , "team": "COMSTRUCT"
                , "score": "DAIDO"
  }
            , {
                "id": "2"
                , "picture": "EY"
                , "age": 20
                , "name": "Holden Wright"
                , "team": "COMBOT"
                , "score": "ISOLOGIX"
  }
            , {
                "id": "3"
                , "picture": "ER"
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