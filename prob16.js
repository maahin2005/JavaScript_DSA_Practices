// Search Algo in DSA.

let data = [10, 20, 30, 40, 50];

let find = 50;

let index = undefined;

for (let i = 0; i < data.length; i++) {
  if (data[i] === find) {
    index = i;
    break;
  }
}

if (!index) {
  index = "Error - Invalid find";
}

console.log(index);
