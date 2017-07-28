myApp.controller("insertTalk", function ($scope, talkservice, talkmodel) {
    $scope.message = "insert page";
    $scope.clickit = function () {
        alert("click it");
        talkmodel.id = $scope.Talk.id;
        talkmodel.name = $scope.Talk.name;
        talkmodel.speaker = $scope.Talk.speaker;
        talkmodel.venue = $scope.Talk.venue;
        talkmodel.Duration = $scope.Talk.Duration;
        InsertTalk(talkmodel);
        function InsertTalk(obj) {
            talkservice.insertTalkService(obj);
        }
    }
});