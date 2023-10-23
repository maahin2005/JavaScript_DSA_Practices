// Insert and Delete an Element from Array

// Inserting an Element in the array.

let array = [10, 20, 30, 40, 50, 60, 70, 80];

let position = 3; // on which index I want to add new element to array
let newEl = 35;

for (let i = array.length - 1; i >= position; i--) {
  array[i + 1] = array[i];

  if (position === i) {
    array[i] = newEl;
  }
}
console.log("Inserting Element :- ", array);

// Deleting an Element in the array.

for (let i = position; i < array.length; i++) {
  array[i] = array[i + 1];
}

array.length = array.length - 1;

console.log("Deleting Element :-", array);
