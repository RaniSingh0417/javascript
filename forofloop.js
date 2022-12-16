// for of loop is a special kind of for loop which is used 
// specially in case of array or similar data type
const arr=["val 1","val 2","val 3","val 4"];
for(let i=0;i<4;i++){
    console.log(arr[i]);
}

// a similar kind of short for of loop can be achieved to do the same task
for(let a of arr){
    console.log(a);
}
// the variable a starts from first index of array.
// by updating its value to next element one by one.