// functions are of two types on the basis of returning property
// 1.Non-Returning functions,which just perform the task assigned and did not return anything
// 2.Returning functions are those which perform the task assigned and return something



// returning functions ends with the keyword "return data"
// whereas non-returning doesn't return anything
// 

// while calling returning functions we neeed to store the data in another variable
// whereas non-returning doesn't need anything
const returnfunction1 = () =>{
    let a=5;
    let b=20;
    let c=a+b;
    return c;
};
let resultofreturningfunc=returnfunction1();
console.log(resultofreturningfunc);
// returning statement doesn't executes the code 
// after return