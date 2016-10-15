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
        });
      });
