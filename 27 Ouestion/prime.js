var start;

for (start = 1; start <= 100; start++) {
	var check = 1
	for (var i = 2; i < start; i++) {
		if (start % i == 0) {
			check = 0
			// console.log(check);
			break;
		}
			// console.log(start);
		
	}
    if (check == 1) {
        console.log(start);
    }
	// console.log(start);

	// console.log(start);
}
