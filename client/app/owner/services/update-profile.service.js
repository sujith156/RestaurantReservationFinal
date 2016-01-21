
/**
 * Created by Sujith on 1/18/2016.
 */
angular
    .module('ReservationSystem')
    .factory('UpdateProfileService',function($http){
    return {
        profile: {
            name: 'Sujith Thota',
            email: 'sujith@gmail.com',
            number: '5084939289',
            enable: 'Enabled',
            address:'Akron',
            timings: 'M-F 10 PM - 10 PM'},
        postForm: function(form){
            return $http(
                {
                    method: 'POST',
                    url: 'http://localhost:55868/ReservationService.svc/api/UpdateProfile',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param({
                        name: form.name,
                        email:form.email,
                        number: form.number,
                        enable: form.enable,
                        address:form.address,
                        timings:form.timings
                    })
                });
        }
    };
});