// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const strng = "I am attending a javascript full-stack bootcamp by pw-skills";
const strng_array = strng.split(" ");

console.log(strng_array);

console.log(
  `the occurrence of the phrase 'pw-skills' in the string is ${strng_array.lastIndexOf(
    "pw-skills"
  )}`
);
