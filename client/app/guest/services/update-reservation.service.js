/**
 * Created by Sujith on 1/18/2016.
 */
angular
    .module('ReservationSystem')
    .factory('UpdateReservationService',function($http)
{
    return {
        reservation: {
            date: '',
            time: '',
            partysize: '',
            specialnotes: '',
            name: '',
            phonenumber: '',
            email:''
        },

        postForm: function(form){
            return $http(
                {
                    method: 'POST',
                    url: 'http://localhost:55868/ReservationService.svc/api/CreateReservation',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param({
                        date: form.date,
                        email:form.email,
                        name: form.name,
                        partysize: form.partysize,
                        phonenumber:form.phonenumber,
                        specialnotes: form.specialnotes,
                        time: form.time
                    })
                });
        }
    };

});/**
 * Created by Sujith on 1/19/2016.
 */
