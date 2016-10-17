(function () {
"use strict";

angular
  .module("rentalApp")
  .controller("rentalCtrl", function($scope,$http,$state,rentalsFactory,$mdSidenav,$mdDialog,$mdToast){

    var vm = this;
    vm.categories;
    vm.rental;
    vm.rentals;
    vm.closeSidebar =closeSidebar;
    vm.deleteRental = deleteRental;
    vm.editing;
    vm.editRental = editRental;
    vm.openSidebar = openSidebar;
    vm.saveRental = saveRental;
    vm.rentals = rentalsFactory.ref;
    vm.rentals.$loaded().then(function(classifieds){
      vm.categories = getCategories(vm.rentals);
    });

   $scope.$on('newRental', function(event, rental){
     rental.id = vm.rentals.length + 1;
     vm.rentals.push(rental);
     showToast('Rental saved!');
   });

   $scope.$on('editSaved', function(event,message){
     showToast(message);
   });

   var contact = {
     name: "rajkumar",
     phone: "9700417562",
     email: "dragonrider17562@gmail.com"
   }


    function openSidebar(){
     $state.go('rental.new');
    }

    function closeSidebar(){
      $mdSidenav('left').close();
    }

    function saveRental(rental){
      if(rental){
      rental.contact = contact;
      vm.rentals.push(rental);
      vm.rental = {};
      vm.closeSidebar();
      showToast("Rental Saved!!");
      }
    }

    function editRental(rental) {
      $state.go('rental.edit', {
        id: rental.id,
        rental:rental
      });
     }

     function saveEdit(){
       vm.editing = false;
       vm.rental = {};
       closeSidebar();
       showToast("Edit Saved!!");
     }

     function deleteRental(event, rental){
       var confirm = $mdDialog.confirm()
        .title('Are you sure you want to delete' + rental.title)
        .ok('Yes')
        .cancel('No')
        .targetEvent(event);
        $mdDialog.show(confirm).then(function(){
          var index = $scope.rentals.indexOf(rental);
          vm.rentals.splice(index, 1);
        }, function(){

        });


     }

     function showToast(message){
       $mdToast.show(
         $mdToast.simple()
           .content(message)
           .position('top, right')
           .hideDelay(3000)
       );
     }

     function getCategories(rentals){
       var categories = [];
       angular.forEach(rentals , function(item){
         angular.forEach(item.categories, function(category){
           categories.push(category);
         });
       });
       //lodash
       return _.uniq(categories);
     }


  });
})();
