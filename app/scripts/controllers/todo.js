'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('TodoCtrl', function ($scope) {
  	$scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '' ,
      company: 'Google' ,
      address: '1600 Amphitheatre Pkwy' ,
      city: 'Mountain View' ,
      state: 'CA' ,
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode : ''
  	};
  	
    $scope.items = '';
 
    var initCallback = function(){
        getItems();
    };
 
    var dataStore = new IDBStore('todos', initCallback);
 
    var getItemsSuccess = function(data){
        $scope.items = data;
        // http://jimhoskins.com/2012/12/17/angularjs-and-apply.html 
        $scope.$apply(); 
    };
 
    var errorCallback = function(){
        console.log('error'); 
    };
 
    var getItems = function(){
        dataStore.getAll(getItemsSuccess,errorCallback);
        console.log('getItems'); 
    };
 
    $scope.deleteItem = function(item){
        dataStore.remove(item,getItems,errorCallback);
    }
 
    $scope.addItem = function(){
        dataStore.put({'timeStamp': new Date().getTime(), 'text' : $scope.itemname},getItems,errorCallback); 
        $scope.itemname = ''; 
    };
  });
