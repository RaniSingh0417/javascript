// when we need a algo many times we use functions
// it will be defined only once
// whenever we see a set of codes getting repeated
// or needed continuously then we define a function ,which contain
// that repeated codes inside it.
// now whenever we want tha code
// we call that function and get those codes
// without functions

// car1
// console.log("engine work of car1");
// console.log("mechanical work of car1");
// console.log("interior work of car1");
// console.log("security work of car1");
// console.log(" car1 is manufactured");
// // car2
// console.log("engine work of car2");
// console.log("mechanical work of car2");
// console.log("interior work of car2");
// console.log("security work of car2");
// console.log(" car2 is manufactured");
//with functions(fat arrow)
const enginefunction = () => {
  console.log("engine work is done");
};
const mechfunction = () => {
  console.log("mech work is done");
};
const intdesignfunction = () => {
  console.log("interior design work is done");
};
const securityfunction = () => {
  console.log("security work is done");
};
// car1
enginefunction();
mechfunction();
intdesignfunction();
securityfunction();
console.log("car 1 is manufactured");
// car2
enginefunction();
mechfunction();
intdesignfunction();
securityfunction();
console.log("car 2 is manufactured");
