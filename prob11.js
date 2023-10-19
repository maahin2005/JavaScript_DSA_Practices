// Reverse String With Stack

let data = [];
let length = data.length;

function push(value) {
  data[length] = value;
  length++;

  data.length = length;
}

function pop() {
  let rmv = data[length - 1];
  length--;

  data.length = length;

  return rmv;
}

function reverse(para) {
  for (let i = 0; i < para.length; i++) {
    push(para[i]);
  }
  for (let i = 0; i < para.length; i++) {
    para[i] = pop();
  }
}

let str = "Hello";
str = str.split("");

reverse(str);

console.log(str.join(""));
