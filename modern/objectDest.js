// object destructuring
// const myObject={
//     name:"rani",
//     age: 16,
//     school:"ghh",
//     email:"rani@gmail.com"

// };
// // to get values in normal js
// console.log(myObject.name);
// console.log(myObject.age);
// console.log(myObject.school);
// console.log(myObject.email);
// const myObject = {
//   name: "rani",
//   age: 16,
//   school: "ghh",
//   email: "rani@gmail.com",
// };

// let { name, age, school, email } = myObject; //this is same as myobject.name
// console.log(name, school);
 
const myProfile={
  name : "rani singh",
  dob : "17-05-2004",
  age: 19,
  College: "MMMUT"
};
let { name,College,age,dob}
=myProfile;
console.log(name,College,dob,age);