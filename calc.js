var app = angular.module('myCalculator', []);

app.controller('mainController', 
function($scope){
	$scope.title = "Online Calculator";
	$scope.brand= "CASIQUO";
	$scope.display= "";
	$scope.power="OFF";
	
$scope.toScreen= function(x){
	var p= $scope.power;
	if (p ==="ON"){
		if ($scope.display === '0'){
		$scope.clearIt();
		}
		$scope.display +=x;
		
	}
	if (x==="c"){
	$scope.clearIt();
	}
	
}

$scope.myPower= function(){
	if ($scope.power==="OFF"){
		$scope.power="ON";
		$scope.display='0';
		
		}
	else {
		$scope.power="OFF";
		$scope.display="";
		
			
	}
}



$scope.equal = function(){
	 if ($scope.display !=''){
	x=$scope.display;
	x=eval(x);//eval is used to evaluate a string. this sets it as x
	$scope.display=x;
	}
	
}	

$scope.powerOfTwo=function() {

	$scope.display=eval($scope.display*$scope.display);

}

$scope.sqrtOf = function() {

	x=$scope.display;
	x = Math.sqrt(x);
	$scope.display=x;
}

$scope.inverseOf = function(){

	x=$scope.display;
	x = 1/x;
	$scope.display=x;

}

 $scope.plusminus = function(){
 
	x=$scope.display;
	x=(x)*-1;
	$scope.display=x;
	

}

 $scope.clearOne = function(){
	
	var screenNum = $scope.display;
	var len= screenNum.length-1;
	var backOne = screenNum.substring(0,len);
	$scope.display = backOne;
}
$scope.clearIt = function(){
	$scope.display= "";

}


});
