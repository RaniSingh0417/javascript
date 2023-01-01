// in build functions are such functtions which are already defined

// 1.date object which returns current date and time which is as follows
const currentdate = new Date();
console.log(currentdate); //this returns date in UTC format
// Date object returns date in UTc format which is accepted globally
// to get date in our local timezone then we use toString()

// const currtimezoneTime = new Date().toString();
// console.log(currtimezoneTime);

const currtimezoneDate = new Date().toDateString();
console.log(currtimezoneDate);
const currtimezoneTime = new Date().toTimeString();
console.log(currtimezoneTime);
