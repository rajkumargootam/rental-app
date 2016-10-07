(function () {
"use strict";

angular
  .module("rentalApp")
  .controller("rentalCtrl", function($scope,$http){

    $http.get('data/rentals.json').then(function(rentals){
     $scope.rentals = rentals.data;
    })
    
  });
})();
