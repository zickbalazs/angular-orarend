let app = angular.module('app', ['ngAnimate', 'ngRoute']);

app.run(function($rootScope){
    $rootScope.title = 'Órarend Manager';
    $rootScope.author = 'Zick Balázs';
    $rootScope.company = 'Türr Tech';
    $rootScope.classes = [];
    if (window.sessionStorage.getItem('angular-orarend')!=null) $rootScope.classes = angular.fromJson(window.localStorage.getItem('angular-orarend'));
});



