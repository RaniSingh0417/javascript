const myarray1 = ["val1", "val2", "val3", "val4"];
const myarray2 = ["val11", "val22", "val33", "val44"];
const combinedarray = [...myarray1, ...myarray2];
console.log(combinedarray);
// spread operator is mainly used in array to quickly
// copy in array elements

const secA=["aaditya","suraj","srishti","avantika","reetika"];
const secB=["anjali","anisha","rani","prerna"];
const secC=["anjali","anisha","rani","prerna"];
const combinedstrength=[...secA,...secB,...secC];
console.log(combinedstrength);