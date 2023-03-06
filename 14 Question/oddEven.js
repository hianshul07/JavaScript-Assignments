function oddEven() {
  let promp = prompt();
  if (promp % 2 === 0) {
    document.getElementById("result").innerHTML = "The number is even";
  } else if (promp % 2 === 1) {
    document.getElementById("result").innerHTML = "the number is odd";
  } else {
    document.getElementById("result").innerHTML = "the number is invalid";
  }
}
