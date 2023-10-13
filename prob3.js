// Merging arrays with While Loops

let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 15];
let arr2 = [0, 2, 4, 6, 8, 10, 12, 14, 16];
let arr = [];

let a1 = 0;
let a2 = 0;
let a = 0;

while (a1 < arr1.length && a2 < arr2.length) {
  if (arr1[a1] < arr2[a2]) {
    arr[a] = arr1[a1];

    a1++;
  } else {
    arr[a] = arr2[a2];

    a2++;
  }
  a++;
}

// if both array's length are not equal so do one more step.

while (a1 < arr1.length || a2 < arr2.length) {
  if (a1 < arr1.length && arr1[a1] < arr2[a2]) {
    arr[a] = arr1[a1];

    a1++;
  } else {
    arr[a] = arr2[a2];

    a2++;
  }
  a++;
}
console.log(arr);
