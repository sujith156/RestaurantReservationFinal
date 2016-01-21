/**
 * Created by Sujith on 1/19/2016.
 */

(function () {
    'use strict';

    angular
        .module('ReservationSystem')
        .controller('LoginController',LoginController);

    LoginController.$inject = ['$scope','$location','$rootScope'];

    function LoginController($scope,$location,$rootScope){

        $scope.submit = function () {
            if($scope.username=='admin' && $scope.password=='admin')
            {
                $rootScope.loggedIn = true;
                $location.path('/owner_home');
            }
            else
            {
                alert('Invalid Credentials');
            }
        }
    }
})();