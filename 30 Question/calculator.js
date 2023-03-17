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

var button = document.getElementById("clear")

button.addEventListener("click", function() {
	document.getElementById("first").value = ""
	document.getElementById("second").value = ""
})
