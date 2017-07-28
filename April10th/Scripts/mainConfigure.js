myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {;
   $locationProvider.hashPrefix('');
    $routeProvider
    .when('/Index', {
        templateUrl: 'Index.html',
        controller: 'bind'
    })
    .when('/Insert', {
        templateUrl: 'Insert.html',
        controller: 'insertTalk'
    })
    .when('/EM', {
        templateUrl: 'TalkDetail.html',
        controller: 'talkdetail'
    })
    .otherwise({ redirectTo: '/' });
}]);