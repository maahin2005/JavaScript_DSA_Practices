let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let position = 3;

let newEl = 35;

console.log("Old Array : ", array);

for (let i = array.length - 1; i >= 0; i--) {
  if (i >= position) {
    array[i + 1] = array[i];

    if (i === position) {
      array[i] = newEl;
    }
  }
}

console.log("New Array : ", array);
