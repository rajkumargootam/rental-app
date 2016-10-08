(function () {
"use strict";

angular
  .module("rentalApp")
  .controller("rentalCtrl", function($scope,$http,rentalsFactory,$mdSidenav,$mdToast){

    rentalsFactory.getrentals().then(function(rentals){
     $scope.rentals = rentals.data;
   });

   var contact = {
     name: "rajkumar",
     phone: "9700417562",
     email: "dragonrider17562@gmail.com"
   }

    $scope.openSidebar = function(){
      $mdSidenav('left').open();
    }

    $scope.closeSidebar = function(){
      $mdSidenav('left').close();
    }

    $scope.saveRental = function(rental){
      if(rental){
      rental.contact = contact;
      $scope.rentals.push(rental);
      $scope.rental = {};
      $scope.closeSidebar();
      showToast("Rental Saved!!");
      }
    }

    $scope.editRental = function(rental) {
      $scope.editing = true;
      $scope.openSidebar();
      $scope.rental = rental;
     }

     $scope.saveEdit = function(){
       $scope.editing = false;
       $scope.rental = {};
       $scope.closeSidebar();
       showToast("Edit Saved!!");

     }

     function showToast(message){
       $mdToast.show(
         $mdToast.simple()
           .content(message)
           .position('top, right')
           .hideDelay(3000)
       );
     }


  });
})();
