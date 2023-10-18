// Stack Data Structure.

let data = [];

let length = data.length;
let limit = 5;

function push(value) {
  if (data.length >= limit) {
    console.log("Stack Is full, You can't add this element : " + value);
  } else {
    data[length] = value;
    length++;
    data.length = length;
  }
}

function pop() {
  if (data.length === 0) {
    console.log("Stack is already Empty");
  } else {
    length--;
    data.length = length;
  }
}

push(10);
push(20);
push(30);
push(40);
pop();
pop();
console.log(data);
