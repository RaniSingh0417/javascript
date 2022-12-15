// we can use single or double quotes
let x="my name is rani";
let y='my surname is singh';
console.log(x);
console.log(y);
//we can use qoutes inside the string as long as they don't match the quotes inside the string
let z="my name is 'rani'";
let a='my surname is "singh"';
console.log(z);
console.log(a);
// to find length of string we use length property
console.log(z.length);
console.log(x.length);
console.log(y.length);
console.log(a.length);
// escape character
// if we want to use double quotes inside the double quotes in string we have to use backslash escape  Character
//     \'  ->>>>   (')
//      \"  ->>>>   (")
//      \\  ->>>>   (\)
// let text="i am from "Uttar Pradesh""; //it will throw error
let text="i am from \"Uttar Pradesh\"";
console.log(text);