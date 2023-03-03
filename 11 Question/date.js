const time = new Date();

// year today
console.log(`Current Year = ${time.getFullYear()}`);

// current month as Number
console.log(`Current Month = ${time.getMonth() + 1}`);

// current Date
console.log(`Current Date = ${time.getDate()}`);

// Day
console.log(`Current Day = ${time.getDay()}`);

// hours
console.log(`Hours = ${time.getHours()}`);

// minutes
console.log(`Minutes = ${time.getMinutes()}`);

// seconds since 1970
var then = new Date('1970-01-01')
var since = time - then
console.log(since / 1000);
