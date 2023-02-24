// Declare a varibale and assign string value to it and then split it into an array using split() method

var strng =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ";

// split letters
var splited1 = strng.split("",);

// split words
var splited2 = strng.split(" ");

// split letters with limit of 4 letters
var splited3 = strng.split("", 4);

// split words with 4 words only
var splited4 = strng.split(" ", 4);

console.log(splited1);
console.log(splited2);
console.log(splited3);
console.log(splited4);