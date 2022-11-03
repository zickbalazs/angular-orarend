app.controller("form", function($scope, $rootScope){
    $scope.NewClass = {};
    $scope.AddClass = function(){
        console.log($scope.NewClass)
    }

})