for(let i=0;i<8;i=i+1){
    console.log("inside content of for loop");
}
console.log("out of for loop");
// for loop
// syntax
// for(initialisation ;condition;increment/decrement){ code here}
    
let x;
for(x=2;x<=5;x++){
    console.log("value of x:"+ x);
}
// we can initialise the variable outside the loop also
let r=7;
for(;r<=9;r++){
    console.log("r="+ r);
}
//we can also do increment or decrement inside the loop
const subjects =["maths","science","polity"];
let len =subjects.length;
let gfg ="";
for(let i=0;i<len; ){
    gfg +=subjects[i+''] ;
    console.log(gfg);
    i++;
}