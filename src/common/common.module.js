(function () {
    "use strict";
    angular.module('common', [])
        //.constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')
        .constant('ApiPath', 'https://shielded-meadow-69395.herokuapp.com').config(config)
        .constant('ApiMVC', 'http://localhost:8001/ZulfiCricket').config(config);
    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
})();