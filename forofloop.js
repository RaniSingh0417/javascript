// for of loop is a special kind of for loop which is used 
// specially in case of array or similar data type
// const arr=["val 1","val 2","val 3","val 4"];
// for(let i=0;i<4;i++){
//     console.log(arr[i]);
// }

// // a similar kind of short for of loop can be achieved to do the same task
// for(let a of arr){
//     console.log(a);
// }
// the variable a starts from first index of array.
// by updating its value to next element one by one.
// for of loop is similar as array mapping and array find.
const practicearr=[
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 5",
    "Element 6",
    "Element 7"
]
// for(let candidate of practicearr){
//     console.log(candidate,"of for of loop");
// }
// // array mapping
// practicearr.map((candidate)=>{
// console.log(candidate,"of mapping");
// });
// array find
const findelement = practicearr.find((candidate)=>{
   return candidate==="Element 4";
});
console.log(findelement);