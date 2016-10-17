(function () {
  "use strict";

  angular
    .module("rentalApp")
    .factory("rentalsFactory", function($http, $firebaseArray){

      var ref = new Firebase('https://rentals-app.firebaseio.com/');
        return{
          ref: $firebaseArray(ref)
        }
    });
})();
