
/**
 * Created by Sujith on 1/13/2016.
 */
(function(){
    angular
        .module('ReservationSystem')
        .controller('cancelReservationController',cancelReservationController);

    cancelReservationController.$inject = ['dataService_guest','$routeParams'];

    function cancelReservationController(dataService_guest,$routeParams){
        var cancelReservationVm = this;

        cancelReservationVm.id = null;

        dataService_guest
            .cancelReservationById($routeParams.id)
            .then(function (data) {
                console.log(data.status);
            },function(error){
                console.log(error.message);
            });
    }
})();