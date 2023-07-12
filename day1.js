// Date : 4th July, 2023; Day : Tuesday
// day 1 : problem 1 : Print even number between 0 to 1.

console.log(" ");
console.log("===========================");
console.log("Problem 1 :)=>");

for (let a = 0; a <= 10; a++) {
  if (a % 2 === 0) {
    console.log("even", a);
  } else if (a % 2 === 1) {
    console.log("odd", a);
  }
}

console.log(" ");
console.log("===========================");

// day 1 : problem 2 : Print a table containing multiplication tables.

console.log("Problem 2 :)=>");

console.log(" ");
let number = 2;

for (let i = 1; i <= 10; i++) {
  console.log(number, "x", i, "=", number * i);
}
