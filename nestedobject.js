const biodata = {
  name: "rani singh",
  class: 10,
  school: "thomas",
  location: {
    state: "up",
    city: "gkp",
    pincode: 232104,
  },
};
console.log(biodata.name);
// nested object is an object in which one of the 
// value of any
// key is again an object
console.log(biodata.location.pincode);
// photos or images on social media are stored 
// in buffer form i.e in binary form
const response=[
   { name: "rani singh 1",
  class: 10,
  school: "thomas",
  location: {
    state: "up",
    city: "gkp",
    pincode: 232104,
  },},
  { name: "rani singh 2",
  class: 10,
  school: "thomas",
  location: {
    state: "up",
    city: "gkp",
    pincode: 232104,
  },},
  { name: "rani singh 3",
  class: 10,
  school: "thomas",
  location: {
    state: "mp",
    city: "gkp",
    pincode: 232104,
  },}
]
for(let a of response){
    if(a.name==="rani singh 3")
    {console.log(a.location.state);}
}
