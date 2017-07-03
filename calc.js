
var screen = document.getElementById('display');


var checkPower=document.getElementById("power");

function myPower() {
	if (checkPower.innerHTML == "ON"){
	document.getElementById("power").innerHTML = "OFF";
	document.getElementById("power").style.background='red';
	document.getElementById("input").reset();	
	}
	else {
		document.getElementById("power").innerHTML = "ON";
		document.getElementById("power").style.background='#3e8e41';
		toScreen('0');
	}
		
}
 function clearSc(){
		screen.value='';
		//toScreen('x');
 }
 
 
//outputs what is typed to the screen
function toScreen(x) {
//concatenates
	var lock = document.getElementById("power").innerHTML ;
	if  (lock === "ON"){
	if (screen.value === '0'){
	clearSc();
	}
	screen.value+=x;
	
	if(x==='c'){
	screen.value='';
	}

	}
}

function equal(){
	 if (screen.value !=''){
	x=screen.value;
	x=eval(x);//eval is used to evaluate a string. this sets it as x
	screen.value=x;
	}
	
}

function powerOfTwo(){
//this just multiples whatever is on the screen by itself
	x= screen.value;
	x=eval(x*x);
	screen.value=x;

}
function clearOne(){
	
	var screenNum = screen.value;
	var len= screenNum.length-1;
	var backOne = screenNum.substring(0,len);
	screen.value = backOne;
}

function sqrtOf() {

	x=screen.value;
	x = Math.sqrt(x);
	screen.value=x;
}

function inverseOf(){

	x=screen.value;
	x = 1/x;
	screen.value=x;

}
function plusminus(){
	x=screen.value;
	x=(x)*-1;
	screen.value=x;
	

}