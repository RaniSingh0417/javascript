let activities=['work','sleep','exercise'];
let newact=['eat'];
// sorting elements in alphabetical order
// activities.sort();
console.log(activities.sort());
// finding the index position of string
let position= activities.indexOf('sleep');
console.log(position);
// slicing the array of elements
let slic=activities.slice(1);
console.log(slic);
// const activities=['work','sleep','exercise'];
console.log(activities);//printing array without any loop
for(let x=0;x<3;x++){
    console.log(activities[x]);//printing array using loop
}
//  concatenating two arrays
console.log(activities.concat(newact));
