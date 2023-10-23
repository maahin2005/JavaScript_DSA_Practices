// search an element in array.

let array = [10, 12, 30, 20, 40, 33, 44, 25];

let search = 20;

array.forEach((el, i) => {
  if (array[i] === search) {
    console.log("Index of " + el + " is", i);
  }
});

// merge arrays

let arr_1 = [1, 45, 67, 3, 2, 9];
let arr_2 = [7, 8, 44, 88, 10, 26];

let arr_3 = []; // we merge two arrays in new 3rd array.

for (let i = 0; i < arr_1.length; i++) {
  arr_3[i] = arr_1[i];
}
for (let i = 0; i < arr_2.length; i++) {
  arr_3[arr_3.length] = arr_2[i];
  //   arr_3.push(arr_2[i]); //we can also use this push function.
}

console.log(arr_3);
