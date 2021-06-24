const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
const name = "Rishabh";
console.log("hello this is %s", name); //old way of doing
console.log(`hello this is ${name}`); // ES6 way of doing

// Styled
console.log(
  "%cI am writing something with blue background nd white text color ",
  "font-size:10px;background:blue;color:white"
);

// warning!
console.warn("This is a warning message, DON'T Panic!");

// Error :|
console.error("This is a error message, just for fun");

// Info
console.info("This is a Info message, Testing 123");

// Testing
console.assert(1 === 2, "this is seriously wrong dont do this");

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dogs) => {
  console.groupCollapsed(`${dogs.name}`);
  console.log(`dog name is : ${dogs.name}, dog age is: ${dogs.age}`);
  console.groupEnd(`${dogs.name}`);
});

// counting
console.count("rs");
console.count("rs");
console.count("rs");
console.count("rs");
console.count("RM");
console.count("RM");
console.count("RM");
console.count("RM");
console.count("RM");
console.count("RM");
console.count("rs");
console.count("rs");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/rishimish")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
