const response = [
  "Rani",
  {
    name: "rani singh 1",
    class: 10,
    school: "thomas",
    location: {
      state: "up",
      city: "gkp",
      pincode: 232104,
    },
  },
  {
    name: "rani singh 2",
    class: 10,
    school: "thomas",
    location: {
      state: "up",
      city: "gkp",
      pincode: 232104,
    },
  },
  {
    name: "rani singh 3",
    class: 10,
    school: "thomas",
    location: {
      state: "mp",
      city: "gkp",
      pincode: 232104,
    },
  },
];
//  console.log(response.length);
//  delete response[0];//in output it will show as <1 empty item> but item is deleted but using shift() will
// //  be preferential

//  console.log(response);
console.log(response.shift());
console.log(response);
console.log(response.unshift("Singh"));
console.log(response);