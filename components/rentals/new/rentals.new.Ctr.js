(function (){

  "use strict";
  angular
    .module('rentalApp')
    .controller('newRentalCtrl', function($mdSidenav, $mdDialog, $timeout, rentalsFactory){
      var vm = this;
       $timeout(function () {
        $mdSidenav('left').open();
       });
     })

   })();
