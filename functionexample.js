// // let a = 15;
// // let b = 20;
// // let c = a + b;
// // console.log(c);

// // let x = 20;
// // let y = 55;
// // let z = x + y;
// // console.log(z);
// // whenever wee find similar kind of codes repeated on our
// // codebase,then we can define
// // a function in which we will mention the codes.Now whenever we are need of that code
// // we call that function
// // function runs only when called
// const sumhandler = (x, y, age) => {
//   return `my first name is ${x} and my last name is ${y} and my age is ${age}`;
// };
// const sum = sumhandler("Rani ", "Singh", 19);
// console.log(sum);
// // console.log(sum);//output:undefined
// const sub = (x,y) =>
// {
//     let  c= x-y ;
//     return c;
// }
// console.log(sub(5,4));


// const product = (x, y) => {
//     return x * y;
//   };
//   let z = product(5, 7);
//   console.log(z);
//   let q = product(8, 9);
//   console.log(q);

//   const division = (x, y) => {
//     return x / y;
//   };
//   let r = division(5, 7);
//   console.log(r);
//   let s = division(8, 9);
//   console.log(s);

//   const add = (a, b) => {
//     //arrrow functions
//     return a + b;
//   };
//   console.log(add(7, 6));
//   console.log(add(8,7));
  const func = (x,y,type) =>{
    if (type==="add"){
        return x+y;    }
       else if (type==="sub"){
            return x-y;    }
         else if (type==="mul"){
                return x*y;    }
               else if (type==="div"){
                    return x/y;    }

  }
  console.log(func(3,4,"add"));
