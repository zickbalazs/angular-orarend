app.controller("form", function($scope, $rootScope){
    $scope.NewClass = {};
    $scope.ChangeID = -1;
    $scope.AddClass = function(){
        console.log($scope.NewClass.teacher)
        if (!$scope.CorrectData()){
            $rootScope.errormessage = "Hibás adatok!"
            $rootScope.errortype = "danger";
            $rootScope.icon = "bi-exclamation-circle";
            $rootScope.ErrorMessage = true;
        }
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
            $rootScope.errormessage = "Sikeres mentés"
            $rootScope.errortype = "success";
            $rootScope.icon = "bi-check-circle";
            $rootScope.ErrorMessage = true;
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
            $rootScope.icon = "bi-check-circle";
            $rootScope.errormessage="Sikeres módosítás!";
            $rootScope.errortype="success";
            $rootScope.ErrorMessage=true;
        }
        else{
            $rootScope.errormessage = "Hibás adatok!"
            $rootScope.errortype = "danger";
            $rootScope.icon = "bi-exclamation-circle";
            $rootScope.ErrorMessage = true;
        }
    }
})