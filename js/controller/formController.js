app.controller("form", function($scope, $rootScope){
    $scope.NewClass = {};
    $scope.ChangeID = -1;
    $scope.AddClass = function(){
        console.log($scope.NewClass.teacher)
        if (!$scope.CorrectData()) $rootScope.SetMessage('Hibás adatok!', 'danger', 'bi-exclamation-circle');
        else{
            let scope = $scope.NewClass;
            $rootScope.classes.push({
                day:scope.day,
                place:scope.place,
                subject:scope.subject,
                teacher:scope.teacher,
                time:scope.time
            });
            $rootScope.SaveLocal();
            $rootScope.SetMessage('Sikeres mentés!', 'success', 'bi-check-circle');
        }
    }
    $scope.CorrectData = function(){
        let scope = $scope.NewClass;
        return scope.day != undefined && scope.place != undefined && scope.subject != undefined && scope.time != undefined && scope.teacher != undefined && scope.teacher != ''
    }
    $scope.Cancel = function(){
        $rootScope.CanEdit = false;
        $scope.NewClass = {};
    }
    $rootScope.Edit = function(index){
        $scope.ChangeID = $rootScope.classes.findIndex(e=>e==index);
        $scope.NewClass = {
            day:index.day,
            place:index.place,
            subject:index.subject,
            teacher:index.teacher,
            time:index.time
        };
        $rootScope.CanEdit=true;
    }
    $rootScope.EditClass = function(){
        if ($scope.CorrectData()){
            let scope = $scope.NewClass;
            $rootScope.classes[$scope.ChangeID] = {
                day:scope.day,
                place:scope.place,
                subject:scope.subject,
                teacher:scope.teacher,
                time:scope.time
            };
            $rootScope.CanEdit = false;   
            $scope.NewClass = {};     
            $rootScope.SaveLocal();
            $rootScope.SetMessage('Sikeres módosítás!', 'success', 'bi-check-circle');
        }
        else $rootScope.SetMessage('Hibás adatok!', 'danger', 'bi-exclamation-circle');
    }
})