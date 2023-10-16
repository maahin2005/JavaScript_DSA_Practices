// Recursion

let num = 0;
function myRecursion(x) {
  console.log(x);
  if (x < 10) {
    myRecursion(x + 1);
  }
}

myRecursion(num);
