/**
 * Created by Sujith on 1/13/2016.
 */
(function(){

    angular
        .module('ReservationSystem')
        .controller('reservationDetailController',reservationDetailController);

    reservationDetailController.$inject = ['dataService','$routeParams'];

    function reservationDetailController(dataService,$routeParams){
        var reservationDetailVm = this;
        reservationDetailVm.detail = null;
        dataService
            .getReservationById($routeParams.id)
            .then(function (data) {
                reservationDetailVm.detail=data;
            },function(error){
                console.log(error.message);
            });

        function enableElements(){
            document.getElementsById('date').disabled = false;
            document.getElementsById('time').disabled = false;
            document.getElementsById('PartySize').disabled = false;
            document.getElementsById('SpecialNotes').disabled = false;
            document.getElementsById('name').disabled = false;
            document.getElementsById('phoneno').disabled = false;
            document.getElementsById('email').disabled = false;
        }
    }
})();