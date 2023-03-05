function getTable() {
    let promp = prompt("Enter the number:");
    for (var i = 1; i <= 10; i++) {
      var result = promp * i;
      document.getElementById(i).innerHTML = `${promp} * ${i} = ${result}`;
    }
  }