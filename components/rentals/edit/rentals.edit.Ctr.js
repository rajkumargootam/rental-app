(function (){

  "use strict";
  angular
    .module('rentalApp')
    .controller('editRentalCtrl', function($scope,$state,$mdSidenav, $mdDialog, $timeout, rentalsFactory){
      var vm = this;
      vm.rentals = rentalsFactory.ref;
      vm.closeSidebar = closeSidebar;
      vm.saveEdit = saveEdit;
      vm.rental = vm.rentals.$getRecord($state.params.id);

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
       function saveEdit(rental){
         vm.rentals.$save(vm.rental).then(function(){
         $scope.$emit('editSaved', 'Edit saved!')
         vm.sidenavOpen = false;
       });
       }
     });

   })();
