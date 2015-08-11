'use strict';

var services = angular.module('services', []);

// Service for asynchronously retrieving data from a Google Sheets spreadsheet.
services.service('SpreadsheetService', ['$q', function ($q) {
    this.getSpreadsheet = function (url) {
        var deferred = $q.defer();

        sheetrock({
            url: url,
            callback: function (error, options, response) {
                if (!error) {
                    // Remove the first row containing field labels.
                    response.rows.shift();
                    deferred.resolve(response.rows);
                }
            }
        });

        return deferred.promise;
    };
}]);

services.service('FAQService', ['SpreadsheetService', function (SpreadsheetService) {

    this.getFAQ = function () {
        var url = 'https://docs.google.com/spreadsheets/d/1KoSjvGW1rZywPvA8VHOfQT6XNE2lqXOBFyR9ws21Z2Y/edit#gid=0';
        return SpreadsheetService.getSpreadsheet(url);
    };

}]);

services.service('ScheduleService', ['SpreadsheetService', function (SpreadsheetService) {

    this.getFridaySchedule = function () {
        var url = 'https://docs.google.com/spreadsheets/d/14wYtYTl0TiYmv9zbwZqJQi13IcveShGMd0jDj2t8xTM/edit#gid=0';
        return SpreadsheetService.getSpreadsheet(url);
    };

    this.getSaturdaySchedule = function () {
        var url = 'https://docs.google.com/spreadsheets/d/14wYtYTl0TiYmv9zbwZqJQi13IcveShGMd0jDj2t8xTM/edit?pli=1#gid=43395584';
        return SpreadsheetService.getSpreadsheet(url);
    };

    this.getSundaySchedule = function () {
        var url = 'https://docs.google.com/spreadsheets/d/14wYtYTl0TiYmv9zbwZqJQi13IcveShGMd0jDj2t8xTM/edit#gid=804839965';
        return SpreadsheetService.getSpreadsheet(url);
    };

}]);

services.service('PartnersService', ['SpreadsheetService', function (SpreadsheetService) {

    this.getPartners = function () {
        var url = 'https://docs.google.com/spreadsheets/d/1Srh7O2CN81aawi_rKzbAFLYQ_CiptrVyL4Oku1HUZaQ/edit#gid=1442280856';
        return SpreadsheetService.getSpreadsheet(url);
    };

}]);

services.service('SponsorsService', ['SpreadsheetService', function (SpreadsheetService) {

    this.getMegaSponsors = function () {
        var url = 'https://docs.google.com/spreadsheets/d/1yBtxDvGdVCK4Wp2TMZwPOvOhdfS5n1q4M5qEmXCZhmU/edit#gid=0';
        return SpreadsheetService.getSpreadsheet(url);
    };

}]);

services.service('LinksService', ['SpreadsheetService', function (SpreadsheetService) {

    this.getLinks = function () {
        var url = 'https://docs.google.com/spreadsheets/d/1x4wiiaxKg-ikbd91sX68eD-8x5mn6BQgwcVvDB4jnKQ/edit#gid=1442280856';
        return SpreadsheetService.getSpreadsheet(url);
    };

}]);
