/**
 * Created by Sujith on 1/17/2016.
 */
(function () {
    'use strict';

    angular
        .module('ReservationSystem')
        .controller('ViewOpenSeatingController',ViewOpenSeatingController);

    ViewOpenSeatingController.$inject = ['dataService'];

    function ViewOpenSeatingController(dataService){

        var ViewOpenSeatingVm = this;

        ViewOpenSeatingVm.tables = [];

        dataService
            .ViewOpenSeating()
            .then(function(data){
                ViewOpenSeatingVm.tables = data;
            }, function (error){
                console.log(error);
            });

        console.log('ViewOpenSeating');
    }
})();
