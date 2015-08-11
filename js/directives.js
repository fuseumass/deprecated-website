'use strict';

var directives = angular.module('directives', []);

directives.directive('countdown', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {

            function normalizeTime(time) {
                return time < 10 ? '0' + time : time;
            }

            function countdown() {
                // The current date/time.
                var now = new moment();
                // The event date/time.
                var eventDate = new moment('2015-10-23 22:00:00');

                if (now.isAfter(eventDate)) {
                    element.html('<h3>0 Months, Days, 00:00:00</h3>');
                }
                else {
                    var monthsRemaining = eventDate.diff(now, 'months');
                    eventDate.subtract(monthsRemaining, 'months');
                    var daysRemaining = eventDate.diff(now, 'days');
                    eventDate.subtract(daysRemaining, 'days');
                    var hoursRemaining = normalizeTime(eventDate.diff(now, 'hours'));
                    eventDate.subtract(hoursRemaining, 'hours');
                    var minutesRemaining = normalizeTime(eventDate.diff(now, 'minutes'));
                    eventDate.subtract(minutesRemaining, 'minutes');
                    var secondsRemaining = normalizeTime(eventDate.diff(now, 'seconds'));

                    element.html('<h3>' + monthsRemaining + ' Months, ' + daysRemaining + ' Days, ' + hoursRemaining + ':' + minutesRemaining + ':' + secondsRemaining + '</h3>');
                }
            }

            countdown();
            setInterval(countdown, 500);
        }
    };
});

directives.directive('mailingList', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.ajaxChimp({
                url: 'http://hackUMass.us3.list-manage1.com/subscribe/post?u=916da75d92b720d21cf48bafe&id=3167bdd032'
            });
        }
    };
});
