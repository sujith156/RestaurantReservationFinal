(function () {

    describe('ReservationsCtrl', function () {

        var service, ReservationsVm,
        ReservationsMock = [
            {
                id: 1,
                name: 'Dummy Name 1 ',
                username: 'dummy1'
            },
            {
                id: 2,
                name: 'Dummy Name 2 ',
                username: 'dummy2'
            }
        ];

        beforeEach(module('ReservationSystem'));

        beforeEach(inject(function ($controller, dataService, $q, $rootScope) {

            service = dataService;

            var defer = $q.defer();

            defer.resolve(ReservationsMock);

            spyOn(service, 'getReservations').and.returnValue(defer.promise);

            ReservationsVm = $controller('ReservationsCtrl', {'dataService': service});

            $rootScope.$apply();
        }));


        it('should be defined', function(){
            expect(ReservationsVm).toBeDefined();
        });

        it('should get people', function() {

            expect(ReservationsVm.reservation.length).toEqual(2);
        });

    });


})();