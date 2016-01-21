/**
 * Created by Sujith on 1/13/2016.
 */
(function(){
    'use strict';

    angular
        .module('ReservationSystem')
        .service('dataService',dataService);

    dataService.$inject = ['$http','$q'];


    function dataService ($http,$q)
    {
        var self = this;
        self.getReservationById = getReservationById;
        self.getReservations = getReservations;
        self.createReservation = createReservation;
        self.ViewSeating = ViewSeating;
        self.ViewProfile = ViewProfile;
        self.ViewOpenSeating = ViewOpenSeating;

        function getReservations () {
            var defer = $q.defer();

            $http
                .get('http://localhost:55868/ReservationService.svc/api/ViewReservations')
                .then(function (response) {
                    defer.resolve(response.data);
                }, function (error) {
                    defer.reject(error.status);
                });

            return defer.promise;
        }

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



        function createReservation(reservation){

            var defer = $q.defer();

            $http({
                    method:'POST',
                    url:'http://localhost:55868/ReservationService.svc/api/CreateReservation',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Methods':'DELETE, HEAD, GET, OPTIONS, POST, PUT',
                        'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
                        'Access-Control-Max-Age':'1728000'
                    },
                    data: {
                        date:reservation.date,
                        email:reservation.email,
                        name:reservation.name,
                        partysize:reservation.partysize,
                        phonenumber:reservation.phonenumber,
                        specialnotes:reservation.specialnotes,
                        time:reservation.time
                    }
                }
            ).then(function (response){
                defer.resolve(response.data);
            },function(error){
                defer.reject(error.status);
            });
            return defer.promise;
        }




        function ViewSeating(){
            var defer = $q.defer();

            $http.
            get('http://localhost:55868/ReservationService.svc/api/ViewSeating')
                .then(function(response){
                    defer.resolve(response.data);
                },function(error){
                    defer.reject(error.status);
                });
            return defer.promise;
        }

        function ViewOpenSeating(){
            var defer = $q.defer();

            $http.
                get('http://localhost:55868/ReservationService.svc/api/ViewOpenSeating')
                .then(function(response){
                    defer.resolve(response.data);
                },function(error){
                    defer.reject(error.status);
                });
            return defer.promise;
        }

        function ViewProfile(){
            var defer = $q.defer();

            $http.
                get('http://localhost:55868/ReservationService.svc/api/ViewProfile')
                .then(function(response){
                    defer.resolve(response.data);
                },function(error){
                    defer.reject(error.status);
                });
            return defer.promise;
        }



    }

})();