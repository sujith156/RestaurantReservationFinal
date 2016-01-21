/**
 * Created by Sujith on 1/17/2016.
 */
(function () {
    'use strict';

    angular
        .module('ReservationSystem')
        .controller('ViewSeatingController',ViewSeatingController);

    ViewSeatingController.$inject = ['dataService'];

    function ViewSeatingController(dataService){

        var ViewSeatingVm = this;

        ViewSeatingVm.tables = [];

        dataService
            .ViewSeating()
            .then(function(data){
                ViewSeatingVm.tables = data;
            }, function (error){
                console.log(error);
            });

        console.log('ViewSeatingController');
    }
})();