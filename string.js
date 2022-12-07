let a="The game of cricket holds a special identity in the field of sports. It is one of the most popular sports in the world.";
// finding index of a word in a string in its first occurence
let firstOccurence= a.indexOf("special");
console.log(firstOccurence);
console.log(a);
// findind index of a word in its last occurence
let lastOccurence= a.lastIndexOf("in");
console.log(lastOccurence);
// slicing  a string between two index
let slicedpart= a.slice(10,-30);
console.log(slicedpart);
let neg=a.slice(-12);
console.log(neg);
let negative= a.substring(12,-12);
console.log(negative);
// substring and slice have the same operation ,the only difference is slice accepts negative value too.
// substring sets the negative values to 0th index.
// slice accepts negative values and count from end.
let b= "And this is my favorite ";
// adding two string
let c=a+b;
console.log(c);
let e="            this is me    ";
// getting length of string
// console.log(e.length);
// removing white spaces
console.log(e.trim());
