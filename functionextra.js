// function can return any data type or entity

// create a function which returns top n even numbers where n is input
// given during function call
// const fun = (a) => {

//     let arr =[];

// for(let i=0;i<2*a; i= i+2){
//     arr.push(i);
// }
//     return arr;
// }
// const f=fun(7)
// console.log(f);

// const  createAp = (a,d,n) => {

//     let arr =[];
//     let counter=0;
// for(let i=a;counter<n; i=i+d){
//     arr.push(i);
//     counter+=1;
// }
//     return arr;
// }
// const f=createAp(1,3,5);
// console.log(f);
// const  createGp = (a,d,n) => {

//     let arr =[];
//     let counter=0;
// for(let i=a;counter<n; i=i*d){
//     arr.push(i);
//     counter+=1;
// }
//     return arr;
// };
// const f=createGp(1,3,5);
// console.log(f);

const createObject = (name, email, address, age, number) => {
  const newObject = {
    username: name,
    useremail: email,
    useraddress: address,
    userage: age,
    userphonenumber: number,
  };
  return newObject;
};
console.log(createObject("rani", "agahjj@gmail", "sarojini", 14, 77777));
