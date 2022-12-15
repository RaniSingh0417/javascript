// print all odd number between 1 to 25 using for loop.
const n=25;
for(let i=1;i<=25;i++)
{
    if(i%2!=0){
        console.log(i);
    }
}
// print sum of all even numbers between 1 to x using for loop
const x=50;
let sum=0;
for(let y=1;y<=x;y++)
{
    if(y%2==0){
sum+=y;
console.log(sum);
    }
}
console.log(sum);

