let app = angular.module('app', ['ngAnimate', 'ngRoute']);

app.run(function($rootScope){
    $rootScope.title = 'Órarend Manager';
    $rootScope.author = 'Zick Balázs';
    $rootScope.company = 'Türr Tech';
    $rootScope.classes = [];
    $rootScope.errormessage = "";
    $rootScope.icon = "";
    $rootScope.ErrorMessage = false;
    $rootScope.CanEdit = false;
    $rootScope.errortype = "";
    $rootScope.Remove = function(index){
        $rootScope.errormessage = "Óra törölve";
        $rootScope.errortype = "primary";
        $rootScope.icon = "bi-info-circle";
        $rootScope.ErrorMessage = true;
        $rootScope.CanEdit = false;
        $rootScope.classes.splice($rootScope.classes.findIndex(e=>e==index), 1);
        $rootScope.SaveLocal();
    };
    $rootScope.Print = function(){
        window.print();
    }
    $rootScope.SaveLocal = function(){
        window.localStorage.setItem('angular-orarend', angular.toJson($rootScope.classes));
    }
    if (window.localStorage.getItem('angular-orarend')!=null) $rootScope.classes = angular.fromJson(window.localStorage.getItem('angular-orarend'));
});



