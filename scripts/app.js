angular
   .module("rentalApp", ['ngMaterial', 'ui.router'])
   .config(function($mdThemingProvider,$stateProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');

        $stateProvider
        .state('rental', {
          url:'/rentals',
          templateUrl:'components/rentals/rentals.tpl.html',
          controller:'rentalCtrl as vm'
        })
        .state('rental.new', {
          url:'/new',
          templateUrl:'components/rentals/new/rentals.new.html',
          controller:'newRentalCtrl as vm'
        });
      });
