/**
 * Created by Sujith on 1/18/2016.
 */
angular
    .module('ReservationSystem')
    .controller('updateProfileController',function($scope, UpdateProfileService){
    $scope.formParams = UpdateProfileService.profile;
    $scope.saveForm = function(form){
        UpdateProfileService.postForm($scope.profile)
            .success(function(data){
                console.log($scope.profile);
                window.location.href = "#/profile";
            })
            .error(function(data){
                console.log(data);
            });
    };


    $scope.resetForm = function(){ $scope.profile = {};};
});/**
 * Created by Sujith on 1/20/2016.
 */
