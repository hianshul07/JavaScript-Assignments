// var number1 = parseInt(document.getElementById("first")).value
// var number2 = parseInt(document.getElementById("second")).value

// function check() {
// 	var hhe = number1 + number2;

// 	document.getElementById("hehe").innerHTML = `${hhe}`;
// }

// var num1 = parseInt(document.getElementById("first").value);
// var num2 = parseInt(document.getElementById("second").value);

// var addition = num1 + num2;
// var subtraction = num1 - num2;
// var multiplication = num1 * num2;
// var division = num1 / num2;

// document.getElementById("add").innerHTML = `${addition}`;
// document.getElementById("sub").innerHTML = `${subtraction}`;
// document.getElementById("multi").innerHTML = `${multiplication}`;
// document.getElementById("div").innerHTML = `${division}`;

// var num1 = parseInt(document.getElementById("first").value);
// var num2 = parseInt(document.getElementById("second").value);

function addition() {
	let num1 = parseInt(document.getElementById("first").value);
	let num2 = parseInt(document.getElementById("second").value);

	var addition = num1 + num2;

	document.getElementById("result").innerHTML = `Result is: ${addition}`;
}

function subtraction() {
	let num1 = parseInt(document.getElementById("first").value);
	let num2 = parseInt(document.getElementById("second").value);

	let subtraction = num1 - num2;

	document.getElementById("result").innerHTML = `Result is: ${subtraction}`;
}

function multiplication() {
	let num1 = parseInt(document.getElementById("first").value);
	let num2 = parseInt(document.getElementById("second").value);

	var multiplication = num1 * num2;

	document.getElementById("result").innerHTML = `Result is: ${multiplication}`;
}

function division() {
	let num1 = parseInt(document.getElementById("first").value);
	let num2 = parseInt(document.getElementById("second").value);

	var division = num1 / num2;

	document.getElementById("result").innerHTML = `Result is: ${division}`;
}

function clear() {
	parseInt(document.getElementById("input").value) = "";
}
