(function(){

    describe('dataService: ', function(){

        var httpBackend,
            dataService;

        beforeEach(module('ReservationSystem'));

        beforeEach(inject(function($injector, $httpBackend){
            dataService = $injector.get('dataService');
            httpBackend = $httpBackend;
        }));

        describe(' get all reservations', function(){
            it('Success', function(){

                httpBackend.expectGET('http://localhost:55868/ReservationService.svc/api/ViewReservations').respond(200, [{},{},{}]);

                dataService.getReservations().then(function(results){
                    expect(results.length).toEqual(3);
                });
                httpBackend.flush();
            });

            it('Error', function(){

                httpBackend.expectGET('http://localhost:55868/ReservationService.svc/api/ViewReservations').respond(500, {});
                dataService.getReservations().catch(function(results){
                    expect(results).toEqual({});
                });
                httpBackend.flush();
            });
        });
    });

})();