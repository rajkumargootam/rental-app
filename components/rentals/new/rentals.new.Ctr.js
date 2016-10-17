(function (){

  "use strict";
  angular
    .module('rentalApp')
    .controller('newRentalCtrl', function($scope,$state,$mdSidenav, $mdDialog, $timeout, rentalsFactory){
      var vm = this;
      vm.closeSidebar = closeSidebar;

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
     });

   })();
