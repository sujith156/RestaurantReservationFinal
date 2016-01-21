
/**
 * Created by Sujith on 1/13/2016.
 */
(function(){
    'use strict';
    angular
        .module('ReservationSystem')
        .service('dataService_guest',dataService);

    dataService.$inject = ['$http','$q'];

    function dataService ($http,$q){
        var self = this;
        self.getReservationById = getReservationById;
        self.cancelReservationById = cancelReservationById;

        function getReservationById(id){
            var defer = $q.defer();

            $http
                .get('http://localhost:55868/ReservationService.svc/api/ViewReservation/'+id)
                .then(function(response){
                    defer.resolve(response.data);
                },function(error){
                    defer.reject(error.status);
                });
            return defer.promise;
        }

        function cancelReservationById(id){
            var defer = $q.defer();
            $http({
                method:'POST',
                url:'http://localhost:55868/ReservationService.svc/api/CancelReservation/'+id})
                .then(function(response){
                    defer.resolve(response.data);
                },function (error){
                        defer.reject(error.status);
                    });
            return defer.promise;
        }


    }

})();