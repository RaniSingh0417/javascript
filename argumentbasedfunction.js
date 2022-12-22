const returnfunction1 = () =>{
    let a=5;
    let b=20;
    let c=a+b;
    return c;
};
let result=returnfunction1();//non argument based function call
//non argument based function did not require any input when called

// argument based function  required  input when called
const grindingmachine =(element) =>{
    console.log(element,"pisana in progress");
    return `${element} completed`;
}
let pisana=grindingmachine("chana");
console.log(pisana);
// you can pass as many argument as you want while calling
// just make sure calling functions are defined
 