(function () {
    "use strict";
    angular.module('common', [])
        //.constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')
        .constant('ApiPath', 'https://shielded-meadow-69395.herokuapp.com').config(config)
        .constant('ApiLocal', 'https://localhost:8443/ZulfiCricket').config(config)
        .constant('ApiMVC', 'https://08ce2412.ngrok.io/ZulfiCricket').config(config);
    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
})();
