myApp.controller("bind", function ($scope,$q, talkservice) {
    $scope.talks = [];
    $scope.message = "index page";
    GetAllTalks();
    $scope.mygrid = { data: 'talks' };
    function GetAllTalks() {
        var promiseGet = talkservice.TalksService();
        promiseGet.then(function (data) { $scope.talks = data },
                                    function (error) { error.statusText }
                                    );
    }
});