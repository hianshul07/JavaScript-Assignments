function check() {
    var grade = prompt("Enter your marks:");
    if (grade <= 100 && grade >= 80) {
      document.getElementById("result").innerHTML = "Your grade is A";
    } else if (grade <= 79 && grade >= 70) {
      document.getElementById("result").innerHTML = "Your grade is B";
    } else if (grade <= 69 && grade >= 60) {
      document.getElementById("result").innerHTML = "Your grade is C";
    } else if (grade <= 59 && grade >= 50) {
      document.getElementById("result").innerHTML = "Your grade is D";
    } else if (grade <= 49) {
      document.getElementById("result").innerHTML = "Your grade is F";
    }

    // 80 - 100, A - 70 - 89, B - 60 - 69, C - 50 - 59, D - 0 - 49, F;
  }