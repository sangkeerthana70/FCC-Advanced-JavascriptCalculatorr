var hDisp;
var hDisp2;
var userInput =[];


window.onload = function() {
	hDisp = document.getElementById("disp");
	hDisp2 = document.getElementById("disp2");
}

function display(elem) {
/* Invoked when any of the number button(0 to 9 and .) is clicked
   Move the innerHTML of the clicked button to display area
*/   
	hDisp.innerHTML += elem.innerHTML;

/* hDisp2 shows all numbers and operators entered so far. Since
    all numbers and operators are already captured in array userInput,
	simply move contents of array to hDisp2 */
	
	hDisp2.innerHTML = userInput.join(" ");
}

function captureOp(elem) {

	var capOper;
	var oper = elem.id;

	if (oper == "add"){
		capOper = "+";
	} 
	else if (oper == "sub") {
		capOper = "-";
	} 
	else if (oper == "multiply") {
		capOper = "*";
	} 
	else {
		capOper = "/";
	}	
		
	pushElem(hDisp.innerHTML);
	pushElem(capOper);
	hDisp.innerHTML = "";// after + is clicked empty the display area.
	hDisp2.innerHTML = userInput.join(" ");//eg:5 + 8
	console.log(userInput);
	
}

function clearC() {
/* this clears both the display areas and the arrays holding the previously entered numbers and operators.
*/
	hDisp.innerHTML = "";
	userInput = [];
	hDisp2.innerHTML = "";
}

function clearCE() {
/* clears only the current number in the display area.*/
	hDisp.innerHTML = "";
	
}

function reverseSign(elem) {
/* to reverse the number that is displayed.*/
	var reverse = (hDisp.innerHTML) * -1;
	//console.log(hDisp);
	//console.log(reverse);
	hDisp.innerHTML = reverse;
	hDisp2.innerHTML = userInput.join(" ");
}


function doEval() {
/*onclick of = button evaluate  whatever the user inputs in the display.*/
	pushElem(hDisp.innerHTML);
	console.log(userInput);
	var result = calculate(userInput);
	hDisp.innerHTML = result;
	hDisp2.innerHTML = userInput.join(" ") + " = " + result;
	userInput = [];
}

function calculate(arr) {
	var evalStr = arr.join(" ");
	var result = eval(evalStr);
	return result;
}	

function pushElem(str) {

// if empty string is passed, don't do anything
	if (str == "") {
		return;
	}	

// if an operator is passed and the array is empty, don't do anything
	var oper = ["+","-","*","/"];
	if ((oper.indexOf(str) != -1) & (userInput.length ==0)) {
		return;
	}	
	
// if the current element(str) is an operator and if the last element in the array is an operator, replace the last element with current operator	
	var lastElem = userInput[userInput.length - 1];
	if ((oper.indexOf(str) != -1) & (oper.indexOf(lastElem) !=-1)) {
		userInput.pop();// pop removes last element
	}
	userInput.push(str);
}
