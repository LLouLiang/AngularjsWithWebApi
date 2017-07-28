myApp.controller("talkdetail", function ($scope, $q, talkservice) {
    $scope.message = "index page";
    $scope.days = [];
    $scope.talks = [];
    GetAllTalks();
    console.log($scope.talks);
    
    $scope.gridoption = {
        data: 'talks',
        multiSelect: false,
        enableCellEditOnFocus: true,
        enableSorting: false,
        showFilter: true,
        columnDefs: [{ field: 'id', displayName: 'ID', enableCellEdit: false },
        { field: 'name', displayName: 'Name', enableCellEdit: false},
        { field: 'speaker', displayName: 'Speaker', enableCellEdit: false, filterOptions: { filtertext: '', useExternalFilter: false } },
        { field: 'venue', displayName: 'Venue', enableCellEdit: false },
        { field: 'Duration', displayName: 'Duration', enableCellEdit: true, enableCellSelection: true },
        { displayName: 'Days', enableCellEdit: false, field:'day'},
        { displayName: 'Action', enableCellEdit: false, cellTemplate: '<div><input type="button", ng-click="deleteTalk(row.entity)" value="delete" /></div>' }],
        //filterOptions: { filtertext: '<displayName>:<literal1><literal2>', useExternalFilter: false },
        //showFilter: true
    };
    $scope.total = function () {
        var t = 0;
        if ($scope.talks.length === 0) {
            return 0;
        } else {
            for (var i = 0; i < $scope.talks.length; i++) {
                t = t + parseInt($scope.talks[i].Duration);
            }
            return t;
        }
    };
    $scope.$on("ngGridEventEndCellEdit", function (data) {
        var r = data.targetScope.row.entity;
        talkservice.updateService(r);
        total();
    });
    
    function GetAllTalks() {
        var promise = talkservice.TalksService();
        promise.then(function (data) {
            $scope.talks = data;
            total();
        },
         function (error) { error.statusText });
    }
    
    $scope.deleteTalk = function (talkobj) {
        var id = talkobj.id;
        talkservice.deleteService(id);
        total();
    }
    $scope.putIt = function (talkobj) {
        talkservice.updateService(talkobj);
        total();
    }
    $scope.$watch("talks", function (newValue) {
        angular.forEach(newValue, function (value, key) {
            if (newValue[key].Duration == '1') {
                value.day = 'day';
            } else {
                value.day = 'days';
            }
        });
        for (var i = 0; i < $scope.talks.length; i++) {
            if ($scope.talks[i].Duration === "1") {
                $scope.days[i] = "day";
            } else {
                $scope.days[i] = "days";
            }
        }
    }, true);
});