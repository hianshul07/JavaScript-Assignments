const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAges = ages.sort()
const median = Math.floor(sortedAges.length / 2)
console.log((sortedAges[median-1] + sortedAges[median]) / 2);





console.log(`Maximum age is: ${Math.max(...ages)}`);
console.log(`Minimum age is: ${Math.min(...ages)}`);
console.log(sortedAges);
console.log(`Median is: ${median}`);