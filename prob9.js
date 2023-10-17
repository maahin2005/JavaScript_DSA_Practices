//Recursion Array with Reverse .

let data = [5, 12, 65, 89, 0];

let temp;

function customReverse(data, start, end) {
  console.log(data);
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];

    data[end] = temp;

    customReverse(data, start + 1, end - 1);
  }
}

customReverse(data, 0, data.length - 1);
