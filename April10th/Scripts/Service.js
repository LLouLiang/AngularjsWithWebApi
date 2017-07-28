myApp.service("talkmodel",Talk);
myApp.service("talkservice", function ($http, $q) {
    var deferred = $q.defer();
    this.TalksService = function () {
        return $http.get("http://localhost:47534/api/Talk").then(function (response) {
            // promise is fulfilled
            deferred.resolve(response.data);
            // promise is returned
           return deferred.promise;
        }, function (response) {
            // the following line rejects the promise 
            deferred.reject(response);
            // promise is returned
           return deferred.promise;
        });
    }
    this.insertTalkService = function (object) {
        $http.post("http://localhost:47534/api/Talk", object);
    }
    this.deleteService = function (obj) {
        $http.delete("http://localhost:47534/api/Talk/" + obj);
    }
    this.updateService = function (obj) {
        $http.put("http://localhost:47534/api/Talk/" + obj.id,obj);
    }
});


