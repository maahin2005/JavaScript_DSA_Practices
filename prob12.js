// Stack With Class

class Stack {
  data = [];
  length;
  maxLength;
  constructor(size) {
    this.maxLength = size;

    this.length = this.data.length;
  }
  push(newVal) {
    if (this.length >= this.maxLength) {
      console.log("Stack is Full, You can't push this value - ", newVal);
    } else {
      this.data[this.length] = newVal;
      this.length++;

      this.data.length = this.length;
    }
  }
  pop() {
    if (this.length === 0) {
      console.log("Stack is Already Empty");
    } else {
      let rmv = this.data[this.length - 1];

      this.length--;
      this.data.length = this.length;

      return rmv;
    }
  }
  Reverse(str) {
    for (let i = 0; i < str.length; i++) {
      this.push(str[i]);
    }

    for (let i = 0; i < str.length; i++) {
      str[i] = this.pop();
    }
  }
}

st1 = new Stack(5);

let str = "Hello";
str = str.split("");

st1.Reverse(str);

console.log(str.join(""));
