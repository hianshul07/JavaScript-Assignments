function check() {
  const month = prompt("Enter a month:");
  if (month === "September" || month === "October" || month === "November") {
    document.getElementById("season").innerHTML = "The season is Autumn";
  } else if (
    month === "December" ||
    month === "January" ||
    month === "February"
  ) {
    document.getElementById("season").innerHTML = "The season is Winter";
  } else if (month === "March" || month === "April" || month === "May") {
    document.getElementById("season").innerHTML = "The season is Spring";
  } else if (month === "June" || month === "July" || month === "August") {
    document.getElementById("season").innerHTML = "The season is Summer";
  }

  // ,  or , the season is Autumn.
  // - ,  or , the season is Winter.
  // - ,  or , the season is Spring
  // - ,  or , the season is Summer
}

// function choosen() {
// 	const sel = document.getElementById("month-select");
// 	var text = sel.options[sel.selectedIndex].text
// 	alert(sel.options[sel.selectedIndex].text);
// }
