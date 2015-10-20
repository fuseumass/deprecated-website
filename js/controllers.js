'use strict';

var controllers = angular.module('controllers', ['services']);

controllers.controller('WhatController', ['$scope',
    function ($scope) {
        $scope.header = 'What is HackUMass?';
        $scope.description = 'HackUMass is the largest hackathon in the Pioneer Valley, attracting over 500 hackers from all over the country to one arena. In 36 hours, participants will bring innovative ideas to life through both software and hardware projects.';
        $scope.date = 'October 23-25, 2015';
    }
]);

controllers.controller('FAQController', ['$scope', '$sce', 'FAQService',
    function ($scope, $sce, FAQService) {
        $scope.header = 'FAQ';
        FAQService.getFAQ().then(function (data) {
            _.map(data, function (row) {
                row.cells.question = $sce.trustAsHtml(row.cells.question);
                row.cells.answer = $sce.trustAsHtml(row.cells.answer);
            });
            $scope.FAQ = _.chunk(data, 3);
        });
    }
]);

controllers.controller('PrizesController', ['$scope', '$sce', 'PrizesService',
    function ($scope, $sce, PrizesService) {
        $scope.header = 'Prizes';
        PrizesService.getPrizes().then(function (data) {
            _.map(data, function (row) {
                row.cells.name = $sce.trustAsHtml(row.cells.name);
                row.cells.description = $sce.trustAsHtml(row.cells.description);
            });
            $scope.prizes = data;
        });
    }
]);

controllers.controller('ScheduleController', ['$scope', 'ScheduleService',
    function ($scope, ScheduleService) {
        $scope.header = 'Schedule';
        ScheduleService.getFridaySchedule().then(function (data) {
            $scope.fridaySchedule = {
                day: 'Friday',
                events: data
            };
        });
        ScheduleService.getSaturdaySchedule().then(function (data) {
            $scope.saturdaySchedule = {
                day: 'Saturday',
                events: data
            };
        });
        ScheduleService.getSundaySchedule().then(function (data) {
            $scope.sundaySchedule = {
                day: 'Sunday',
                events: data
            };
        });
    }
]);

controllers.controller('PartnersController', ['$scope', 'PartnersService',
    function ($scope, PartnersService) {
        $scope.header = 'Partners';
        PartnersService.getTierOnePartners().then(function (data) {
            $scope.tierOnePartners = _.chunk(data, 4);
        });
        PartnersService.getTierTwoPartners().then(function (data) {
            $scope.tierTwoPartners = _.chunk(data, 6);
        });
    }
]);

controllers.controller('SponsorsController', ['$scope', 'SponsorsService',
    function ($scope, SponsorsService) {
        $scope.header = 'Sponsors';
        SponsorsService.getMegaSponsors().then(function (data) {
            $scope.megaSponsors = _.chunk(data, 4);
        });
        SponsorsService.getGigaSponsors().then(function (data) {
            $scope.gigaSponsors = _.chunk(data, 3);
        });
        SponsorsService.getTeraSponsors().then(function (data) {
            $scope.teraSponsors = _.chunk(data, 2);
        });
        SponsorsService.getZettaSponsors().then(function (data) {
            $scope.zettaSponsors = _.chunk(data, 1);
        });
    }
]);

controllers.controller('FooterController', ['$scope', 'LinksService',
    function ($scope, LinksService) {
        LinksService.getLinks().then(function (data) {
            $scope.links = data;
        });
    }
]);
