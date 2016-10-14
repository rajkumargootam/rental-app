(function () {
"use strict";

angular
  .module("rentalApp")
  .controller("rentalCtrl", function($scope,$http,rentalsFactory,$mdSidenav,$mdDialog,$mdToast){

    rentalsFactory.getrentals().then(function(rentals){
     $scope.rentals = rentals.data;
     $scope.categories = getCategories($scope.rentals);

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

     $scope.deleteRental = function(event, rental){
       var confirm = $mdDialog.confirm()
        .title('Are you sure you want to delete' + rental.title)
        .ok('Yes')
        .cancel('No')
        .targetEvent(event);
        $mdDialog.show(confirm).then(function(){
          var index = $scope.rentals.indexOf(rental);
          $scope.rentals.splice(index, 1);
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
