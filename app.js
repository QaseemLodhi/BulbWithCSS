/**
 * Created by Taimoor on 9/8/2015.
 */


var app = angular.module("bulb",[]);
app.controller("myctrl",function(){

    var $scope = this;
    $scope.status = 'off';
    $scope.flag=false;
    $scope.On = function(){

        $scope.flag=!$scope.flag;

        if($scope.flag){
            $scope.status = "On";
        }
        else if(!$scope.flag){
            $scope.status = "Off";
        }


    }

});


/*
 $(document).ready(function() {
 $('.bulb-light').click(function() {
 $('body').toggleClass('night');
 });
 });*/
