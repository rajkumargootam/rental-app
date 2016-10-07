(function () {
"use strict";

angular
  .module("rentalApp")
  .controller("rentalCtrl", function($scope){
   $scope.rentals = [
   {
     "id": 1,
     "date":"2016-10-07",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"First Item",
     "price":"600",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   },
   {
     "id": 2,
     "date":"2016-10-08",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"Second Item",
     "price":"50",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   },
   {
     "id": 3,
     "date":"2016-10-07",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"Third Item",
     "price":"30",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   },
   {
     "id": 4,
     "date":"2016-10-06",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"Fourth Item",
     "price":"100",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   },
   {
     "id": 5,
     "date":"2016-10-04",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"Fifth Item",
     "price":"1000",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   },
   {
     "id": 6,
     "date":"2016-10-05",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"Sixth Item",
     "price":"30",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   }
  ]

  });
})();
