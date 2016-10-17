(function () {
  "use strict";

  angular
    .module("rentalApp")
    .factory("rentalsFactory", function($http){
       function getrentals(){
         return $http.get('data/rentals.json');
       }

        return{
          getrentals:getrentals
        }
    });
})();
