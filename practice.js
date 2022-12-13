// block scope
// the variable which are declared inside the {}block are known as block scoped variables.
{let num=10;
    // calling the function inside block
console.log(num)
}
// //calling the function outside block throws a error
 console.log(num)
// global scope
// a global scope variable is a variable declared in the main body of the source code,outside all functions. 
let num=10;
console.log(num);
function fun(){
    console.log(num);
}
fun();//calling the function
// function scope
// a function scope variable is a variable declared inside a function and cannot be accessed outside the function.
function cap(){
    let x=5;
    console.log(x);
}
cap();//calling the function
console.log(x);//it throws error
// the variables declared using let can be re-declared inside other blocks.
 let x=55;
 {
    let x=45;
    console.log(x);
 }
//  but cannot be re-declared in same block
// let x=44;//not valid
console.log(x);
// it does not support hoisting(behavior of  moving the declaration on top of the scriptis known as hoisting)
// x=12;
// console.log(x);
// let x; //throws error