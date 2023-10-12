let data = [10, 20, 30, 40, 50];

let position = 2;

for (let i = position; i < data.length - 1; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);
