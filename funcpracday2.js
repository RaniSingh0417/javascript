// // Function names can contain letters, digits, underscores, and dollar signs
// // The parentheses may include parameter names separated by commas:
// // (parameter1, parameter)2
// // Calculate the product of two numbers, and return the result
// const product = (x,y) =>{
// return x*y;
// }
// let a=product(5,7);
// console.log(a);
// // convert farenhite to celsius
// // formula=(5/9)*(faren-32);
// const celsius =(farenhite) =>{
//     return (5/9)*(farenhite-32);
// }
// let d=celsius(325);//calling the function
// console.log(d);
// // Instead of using a variable to store the return value of a function
// // we can use it directly
// console.log(celsius(325));
// program to add two numbers using a function
// const add=(a,b) =>{//arrrow functions
//     return a+b;
// }
// console.log(add(7,6));
// cancatenating two string using functions
let concatenate= (first,last) =>
{
    let fullname= first + last;
    return fullname;
} 
console.log(concatenate("Rani ","Singh"));