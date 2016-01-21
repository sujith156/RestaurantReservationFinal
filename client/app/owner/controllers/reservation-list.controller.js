/**
 * Created by Sujith on 1/13/2016.
 */
(function () {
    'use strict';

    angular
        .module('ReservationSystem')
            .controller('reservationsListController',reservationsListController);

    reservationsListController.$inject = ['dataService'];

    function reservationsListController(dataService){
        var reservationListVm = this;

        reservationListVm.reservations = [];

        dataService
            .getReservations()
            .then(function(data){
                reservationListVm.reservations = data;
            }, function (error){
                console.log(error);
            });

        console.log('reservationsListController');
    }
})();