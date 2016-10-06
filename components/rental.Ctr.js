(function () {
"use strict";

angular
  .module("rentalApp")
  .controller("rentalCtrl", function($scope){
   $scope.name = {
     first:"raj",
     last:"kumar"
   };
  });
})();
