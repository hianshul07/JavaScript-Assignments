// Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

// true case
var thisIsAnotherString =
  "JavaScript was created in 1995, this is typed as javascript, not java-script or java script.";
console.log(thisIsAnotherString.includes(" script"));

// false case
var thisIsaString =
  "this is a test string, all the letter of this string will be converted to uppercase.";
console.log(thisIsaString.includes("script"));
