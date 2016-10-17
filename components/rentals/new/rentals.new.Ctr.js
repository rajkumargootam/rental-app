(function (){

  "use strict";
  angular
    .module('rentalApp')
    .controller('newRentalCtrl', function($scope,$state,$mdSidenav, $mdDialog, $timeout, rentalsFactory){
      var vm = this;
      vm.closeSidebar = closeSidebar;
      vm.saveRental = saveRental;

       $timeout(function () {
        $mdSidenav('left').open();
       });

       $scope.$watch('vm.sidenavOpen', function(sidenav){
         if(sidenav === false) {
           $mdSidenav('left').close().then(function(){
             $state.go('rental');
           });
         }
       });

       function closeSidebar() {
         vm.sidenavOpen = false;
       }
       function saveRental(rental){
         if(rental){

           rental.contact = {
             name: "rajkumar",
             phone: "9700417562",
             email: "dragonrider17562@gmail.com"
           }


           $scope.$emit('newRental',rental);
           vm.sidenavOpen = false;
         }
       }
     });

   })();
