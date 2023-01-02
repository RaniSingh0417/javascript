const tutorialcopy10rs = {
  name: "Rani Singh",
  branch: "ECE",
  rollno: "2021041157",
  session: "2021-2025",
  college: "MMMUT,GKp",
};
// // whenever want to store data which is in the form of key value pairs,then
// // object is used
// console.log(tutorialcopy10rs);
// // keys should never have spaces btw them and should not start with
// // any number or any special characters
// // if it has spaces,then key should be enclosed within parenthesis
// // accessing value of object in two ways
// // first way
// console.log(tutorialcopy10rs["name"]);
// console.log(tutorialcopy10rs["college"]);
// // second way
// console.log(tutorialcopy10rs.name);
// const wondersofworld={
//     first: "Taj Mahal",
//     second:"great wall of china",
//     third:"victoria falls",
//     fourth:"grand canyon",
//     fifth:"eiffel tower"

// }
// console.log(wondersofworld["first"]);
// console.log(wondersofworld["second"]);
// console.log(wondersofworld.third);
// console.log(wondersofworld.fourth);
// to get all the keys of an object
//example 3
const details = {
  name: "rani singh",
  dob: "17/12/2003",
  phonenumber: "666666666",
};
console.log(details["dob"]);
console.log(details.name);
// object is a set of key value pairs
// to get all keys of an object
const objectkeys = Object.keys(details);
console.log(objectkeys);
tutorialcopy10rs.rollno = "ec2021041157";
console.log(tutorialcopy10rs);

// mongo db always store data in form of object
