/**
 * Created by Sujith on 1/18/2016.
 */

angular
    .module('ReservationSystem')
    .controller('createReservationController',function($scope, CreateReservationService){
    $scope.formParams = CreateReservationService.reservation;
    $scope.saveForm = function(form){
            CreateReservationService.postForm($scope.reservation)
                .success(function(data){
                    console.log(data);
                    console.log($scope.reservation);
                    $scope.resetForm();
                })
                .error(function(data){
                    console.log(data);
            });
    };
    $scope.resetForm = function(){ $scope.reservation = {};};
});