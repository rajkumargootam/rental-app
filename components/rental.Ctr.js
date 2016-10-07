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
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     "contact":{
     "name":"Brock",
     "phone":"(555) 555-5566",
     "email":"brock@gmail.com"
    }
   },
   {
     "id": 2,
     "date":"2016-10-08",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"Second Item",
     "price":"50",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     "contact":{
     "name":"john Doe",
     "phone":"(555) 555-5555",
     "email":"johndoe@gmail.com"
    }
   },
   {
     "id": 3,
     "date":"2016-10-07",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"Third Item",
     "price":"30",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     "contact":{
     "name":"Browm",
     "phone":"(555) 555-5656",
     "email":"brown@gmail.com"
    }
   },
   {
     "id": 4,
     "date":"2016-10-06",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"Fourth Item",
     "price":"100",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     "contact":{
     "name":"michel",
     "phone":"(555) 666-6556",
     "email":"michel@gmail.com"
    }
   },
   {
     "id": 5,
     "date":"2016-10-04",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"Fifth Item",
     "price":"1000",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     "contact":{
     "name":"simeon",
     "phone":"(555) 555-6666",
     "email":"simeon@gmail.com"
    }
   },
   {
     "id": 6,
     "date":"2016-10-05",
     "image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
     "title":"Sixth Item",
     "price":"30",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     "contact":{
     "name":"Tim",
     "phone":"(555) 666-6666",
     "email":"tim@gmail.com"
    }
   }
  ]

  });
})();
