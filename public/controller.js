angular.module('app', [])
  .controller('Controller', function($scope, $http,) {
    var ctrl = this;
    ctrl.response = "";
    var lastSearch = "";
    ctrl.urlpdf = "";

    ctrl.loadImg = function() {
        var data = {user:"$scope.name"};
        $http({
            method: 'POST',
            params: data,
            url: 'http://localhost:3000/loadImg'
        }).then(function successCallback(response) {
            //console.log(response);
        }, function errorCallback(response) {
            //console.log(response);
        });
     };


  });





