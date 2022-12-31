// in javascript ,sometime we need codes/functions/variables
// in our file ,which is present in anyother file
// then we can import that code from that file,making sure that
// file is ready to export

// importing statement  where file is to be exported(sender)

const { add, sub, mul } = require("./file");
const sum = add(3, 7);
console.log(sum);
const diff = sub(7, 3);
console.log(diff);
const multiply = mul(6, 7);
console.log(multiply);
