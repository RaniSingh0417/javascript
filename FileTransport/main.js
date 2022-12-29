// in javascript ,sometime we need codes/functions/variables
// in our file ,which is present in anyother file
// then we can import that code from that file,making sure that
// file is ready to export
// importing statement  where file is to be exported(sender)
const { add } = require("./file");
console.log(add(3, 4));
