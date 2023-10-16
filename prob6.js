// Recursion Example

function factorial(para) {
  if (para === 0) {
    return 1;
  }

  return para * factorial(para - 1);
}

let num = 4;
console.log(factorial(num));
