/**
 * Created by Sujith on 1/18/2016.
 */
var ReservationSystem = angular
    .module('ReservationSystem',['ngRoute'])
    .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'app/guest/templates/home.tmpl.html'
            })
            .when('/login',{
                templateUrl:'app/owner/templates/login.tmpl.html',
                controller:'LoginController'
            })
            .when('/guest_home',{
                templateUrl:'app/guest/templates/home.tmpl.html'
            })
            .when('/reservations',{
                templateUrl:'app/guest/templates/reservations.tmpl.html'
            })
            .when('/menu',{
                templateUrl:'app/guest/templates/menu.tmpl.html'
            })
            .when('/reservations/create',{
                templateUrl:'app/guest/templates/create-reservation.tmpl.html',
                controller:'createReservationController'
            })
            .when('/reservations/view',{
                templateUrl:'app/guest/templates/view-reservation.tmpl.html'
            })
            .when('/reservations/view/:id',{
                templateUrl:'app/guest/templates/reservation-detail.tmpl.html',
                controller:'reservationDetailController',
                controllerAs:'reservationDetailVm'
            })
            .when('/reservations/cancel',{
                templateUrl:'app/guest/templates/cancel-reservation.tmpl.html'
            })
            .when('/reservations/cancel/:id',{
                templateUrl:'app/guest/templates/cancel-reservation-id.tmpl.html',
                controller:'cancelReservationController',
                controllerAs:'cancelReservationVm'
            })
            .when('/owner_home',{
                resolve:{
                    'check': function ($location,$rootScope) {
                        if(!$rootScope.loggedIn){
                            $location.path('/login')
                        }
                    }
                },
                templateUrl:'app/owner/templates/home_owner.tmpl.html'
            })
            .when('/reservations_owner',{
                resolve:{
                    'check': function ($location,$rootScope) {
                        if(!$rootScope.loggedIn){
                            $location.path('/login')
                        }
                    }
                },
                templateUrl:'app/owner/templates/reservation-list.tmpl.html',
                controller:'reservationsListController',
                controllerAs:'reservationListVm'
            })
            .when('/reservations_owner/view/:id',{
                resolve:{
                    'check': function ($location,$rootScope) {
                        if(!$rootScope.loggedIn){
                            $location.path('/login')
                        }
                    }
                },
                templateUrl:'app/owner/templates/reservation-detail.tmpl.html',
                controller:'reservationDetailController',
                controllerAs:'reservationDetailVm'
            })
            .when('/seating',{

                templateUrl:'app/owner/templates/seating-list.tmpl.html',
                controller:'ViewSeatingController',
                controllerAs:'ViewSeatingVm'
            })
            .when('/seatingMap',{
                templateUrl:'app/owner/templates/seating-map.tmpl.html',
                controller:'ViewSeatingController',
                controllerAs:'ViewSeatingVm'
            })
            .when('/seatingMap_open',{
                templateUrl:'app/owner/templates/seating-map-open.tmpl.html',
                controller:'ViewOpenSeatingController',
                controllerAs:'ViewOpenSeatingVm'

            })
            .when('/seatingMap/view/:id',{
                templateUrl:'app/owner/templates/seating-reservation-detail.tmpl.html',
                controller:'reservationDetailController',
                controllerAs:'reservationDetailVm'
            })
            .when('/profile',{
                templateUrl:'app/owner/templates/profile_owner_view.tmpl.html',
                controller: 'ViewProfileController',
                controllerAs:'ViewProfileVm'
            })
            .when('/profile/update',{
                templateUrl:'app/owner/templates/profile_owner.tmpl.html',
                controller: 'updateProfileController',

            })
            .when('/contacts',{
                resolve:{
                    'check': function ($location,$rootScope) {
                        if(!$rootScope.loggedIn){
                            $location.path('/login')
                        }
                    }
                },
                templateUrl:'app/owner/templates/contacts_owner.tmpl.html'
            })
            .otherwise({
                redirectTo:'/guest_home'
            })
    }

