// Binary Search with Interative Search.

let data = [5, 9, 13, 17];

let search = 13;

let start = 0;

let end = data.length - 1;

let position = undefined;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (data[mid] === search) {
    position = mid;
    break;
  } else if (search > data[mid]) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(position);
