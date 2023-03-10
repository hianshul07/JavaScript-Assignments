var button = document.getElementById("getResult");
var weight = document.getElementById("weight");
var height = document.getElementById("height");
var statement = document.getElementById("statement");

button.addEventListener("click", function () {
	var heightCalc = height.value;
	var weightCalc = weight.value;
	var height2 = heightCalc * heightCalc;
	var bmi = (weightCalc / height2).toFixed(2);
	document.getElementById("result").innerHTML = `Your BMI is: ${bmi}`;

	if (bmi <= 18.5) {
		statement.innerHTML = "You're Underweight";
	} else if (bmi <= 24.9 && bmi > 18.5) {
		statement.innerHTML = "Your BMI is normal";
	} else if (bmi <= 29.9 && bmi >= 25) {
		statement.innerHTML = "You're Overweight";
	} else if (bmi > 25) {
		statement.innerHTML = "You're Obese";
	}
});
