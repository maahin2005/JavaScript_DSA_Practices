// Date : 10th July, 2023; Day : Monday
// day 5 : problem 1 : Create a function that reverses an array.

let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log("reverses an array :", arr[i]);
}

console.log(arr);

console.log(" ");

// day 5 : problem 2 : Sort an array from lowest to highest.

let arr2 = [6, 7, 87, 53, 5, 8, 4, 20, 29, 55, 66, 77, 99, 102, 256, 88];

arr2.sort(function (a, b) {
  return a - b;
});

console.log("=> array from lowest to highest:", arr2);
