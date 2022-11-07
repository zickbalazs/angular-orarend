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
    $rootScope.SetMessage = function(message, type, icon){
        $rootScope.errormessage = message;
        $rootScope.errortype = type;
        $rootScope.icon = icon;
        $rootScope.ErrorMessage = true;
    };
    $rootScope.Remove = function(index){
        $rootScope.SetMessage('Sikeres törlés!', 'success', 'bi-check-circle');
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



