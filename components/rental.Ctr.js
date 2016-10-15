(function () {
"use strict";

angular
  .module("rentalApp")
  .controller("rentalCtrl", function($scope,$http,rentalsFactory,$mdSidenav,$mdDialog,$mdToast){

    var vm = this;
    vm.openSidebar = openSidebar;
    vm.closeSidebar =closeSidebar;
    vm.saveRental = saveRental;
    vm.editRental = editRental;
    vm.saveRental = saveRental;
    vm.deleteRental = deleteRental;

    vm.rentals;
    vm.categories;
    vm.editing;
    vm.rental;
    //break

    rentalsFactory.getrentals().then(function(rentals){
     vm.rentals = rentals.data;
     vm.categories = getCategories(vm.rentals);

   });

   var contact = {
     name: "rajkumar",
     phone: "9700417562",
     email: "dragonrider17562@gmail.com"
   }


    function openSidebar(){
      $mdSidenav('left').open();
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
      vm.editing = true;
      openSidebar();
      vm.rental = rental;
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
