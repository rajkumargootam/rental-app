(function () {
"use strict";

angular
  .module("rentalApp")
  .controller("rentalCtrl", function($scope,$http,rentalsFactory,$mdSidenav){

    rentalsFactory.getrentals().then(function(rentals){
     $scope.rentals = rentals.data;
    })

    $scope.openSidebar = function(){
      $mdSidenav('left').open();
    }

    $scope.closeSidebar = function(){
      $mdSidenav('left').close();
    }

    $scope.saveRental = function(rental){
      if(rental){
      $scope.rentals.push(rental);
      $scope.rental = {};
      }
    }

  });
})();
