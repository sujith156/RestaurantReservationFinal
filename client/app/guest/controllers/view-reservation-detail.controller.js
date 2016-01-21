
/**
 * Created by Sujith on 1/13/2016.
 */
(function(){
    angular
        .module('ReservationSystem')
        .controller('reservationDetailController',reservationDetailController);

    reservationDetailController.$inject = ['dataService_guest','$routeParams'];

    function reservationDetailController(dataService_guest,$routeParams){
        var reservationDetailVm = this;

        reservationDetailVm.detail = null;

        dataService_guest
            .getReservationById($routeParams.id)
            .then(function (data) {
                if(data!=null) {
                    reservationDetailVm.detail = data;
                }
                else
                console.log("No Data");
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