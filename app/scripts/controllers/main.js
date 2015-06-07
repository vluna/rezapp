'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.events; // Store the response from the php script

  	// Varibales that will hold the Events according to the location
  	$scope.barbara = [];
  	$scope.shadbolt = [];
  	$scope.pauline = [];
  	$scope.louisRiel = [];
  	$scope.mccow = [];
  	$scope.shell = [];
  	$scope.townHouses = [];
  	$scope.hamilton = [];
  	$scope.residenceWide = [];

  	// Get the information for the php script
  	$http.get("http://www.victorluna.ca/connection.php")
    .success(function (response) {
    	// If succeed, store the response in a variable
    	$scope.events = response.records;

    	// Variable that control the array objects
    	var j = -1;
    	var a = -1;
    	var m = -1;
    	var r = -1;
    	var p = -1;
    	var l = -1;
    	var s = -1;
    	var t = -1;
    	var h = -1;

    	// Iterate through the JSON file
    	for(var i = 0; i < $scope.events.length; i++) {
    		// Assign the location to its respective variable
    		// Residence Wide
    		if($scope.events[i].Location == 'Residence Wide') {
    			$scope.residenceWide[m+1] = $scope.events[i];
    			r = r + 1;
    		}

    		// Barbara Rae
    		if($scope.events[i].Location == 'BRH') {
    			$scope.barbara[j+1] = $scope.events[i];
    			j = j + 1;
    		}

    		// Shadbolt
    		if($scope.events[i].Location == 'Shadbolt') {
    			$scope.shadbolt[a+1] = $scope.events[i];
    			a = a + 1;
    		}

    		// Pauline Jewette
    		if($scope.events[i].Location == 'PJ') {
    			$scope.pauline[p+1] = $scope.events[i];
    			p = p + 1;
    		}

    		// Mccow
    		if($scope.events[i].Location == 'MCH') {
    			$scope.mccow[m+1] = $scope.events[i];
    			m = m + 1;
    		}

    		// Louis Riel
    		if($scope.events[i].Location == 'LRH') {
    			$scope.louisRiel[l+1] = $scope.events[i];
    			l = l + 1;
    		}

    		// Shell
    		if($scope.events[i].Location == 'SHR') {
    			$scope.shell[s+1] = $scope.events[i];
    			s = s + 1;
    		} 

    		// Twon Houses
    		if($scope.events[i].Location == 'TH') {
    			$scope.townHouses[t+1] = $scope.events[i];
    			t = t + 1;
    		}

    		// Hamilton
    		if($scope.events[i].Location == 'Hamilton') {
    			$scope.hamilton[h+1] = $scope.events[i];
    			h = h + 1;
    		}
    	}

    	// If there are no evens display message
    	// Residence Wide
    	if(r == -1) {
    		$scope.residenceWide=[{ Name: ":(",
    								Description: "Aww, there are no events" }];
    	}

    	// Barbara Rae
    	if(j == -1) {
    		$scope.barbara=[{ Name: ":(",
    						  Description: "Aww, there are no events" }];
    	}

    	// Shadbolt
    	if(a == -1) {
    		$scope.shadbolt=[{ Name: ":(",
    						   Description: "Aww, there are no events" }];
    	}

    	// Mccow
    	if(m == -1) {
    		$scope.mccow=[{ Name: ":(",
    						Description: "Aww, there are no events" }];
    	}

    	// Pauline Jewette
    	if(p == -1) {
    		$scope.pauline=[{ Name: ":(",
    						  Description: "Aww, there are no events" }];
    	}

    	// Louis Riel
    	if(l == -1) {
    		$scope.louisRiel=[{ Name: ":(",
    							Description: "Aww, there are no events" }];
    	}

    	// Shell
    	if(s == -1) {
    		$scope.shell=[{ Name: ":(",
    						Description: "Aww, there are no events" }];
    	}

    	// Town Houses
    	if(t == -1) {
    		$scope.townHouses=[{ Name: ":(",
    							 Description: "Aww, there are no events" }];
    	}

    	// Hamilton
    	if(h == -1) {
    		$scope.hamilton=[{ Name: ":(",
    						   Description: "Aww, there are no events" }];
    	}
    });
  });
