
/**
 * Created by Sujith on 1/17/2016.
 */
(function () {
    'use strict';
    angular
        .module('ReservationSystem')
        .controller('ViewProfileController',ViewProfileController);
    ViewProfileController.$inject = ['dataService'];
    function ViewProfileController(dataService){
        var ViewProfileVm = this;
        ViewProfileVm.profiles = [];
        dataService
            .ViewProfile()
            .then(function(data){
                ViewProfileVm.profiles = data;
                console.log(ViewProfileVm.profiles);
            }, function (error){
                console.log(error);
            });
        console.log('ViewProfileController');
    }
})();