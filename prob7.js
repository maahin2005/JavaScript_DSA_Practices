// Indirect Recursion

let money = 100;
let totalApple = 0;

function buyApple(x) {
  if (x > 0) {
    console.warn("I have", x, "RS", "& Apples :-", totalApple);
    buyMore(x - 10);
  } else {
    console.warn("I don't have more money", "& Apples :-", totalApple);
  }
}
function buyMore(x) {
  totalApple++;
  buyApple(x);
  // buyApple(x - 5);
}

buyApple(money);
