var users = [
  {
    firstName: "Om",
    lastName: "Balapure",
    age: 25,
    gender: "M",
    score: 88,
  }, 
  {
    firstName: "Anikta",
    lastName: "Mungal",
    age: 25,
    gender: "F",
    score: 39,
  },
  {
    firstName: "Sumedh",
    lastName: "Pande",
    age: 26,
    gender: "M",
    score: 68,
  },
  {
    firstName: "Satyam",
    lastName: "Balapure",
    age: 22,
    gender: "M",
    score: 98,
  },
  {
    firstName: "Harish",
    lastName: "Balapure",
    age: 29,
    gender: "M",
    score: 63,
  },
  {
    firstName: "Nikita",
    lastName: "Patil",
    age: 25,
    gender: "F",
    score: 29,
  },
];

// list full names - map 
const fullNames = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullNames);

// high scorers - filter
const highScorers = users.filter((user) => user.score > 70).map((user) => {
  return user.firstName;
});
console.log(highScorers);

// find distinct ages - reduce
const distinctAges = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

// Using reduce instead of chaining map + filter
const output = users.reduce((acc, curr) => {
  if(curr.score > 50){
    acc.push(curr.firstName);
  }
  
  return acc;
}, []);

console.log(output);