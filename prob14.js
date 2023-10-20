let queue = [];

let length = queue.length;

let maxLength = 5;

function enQueue(newVal) {
  if (queue.length === maxLength) {
    console.log("Queue is full, You can't add this Value -", newVal);
  } else {
    queue[length] = newVal;

    length++;
  }
}

function deQueue() {
  if (queue.length === 0) {
    console.log("Queue is Already Empty");
  } else {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    length--;
    queue.length = queue.length - 1;
  }
}

function front() {
  if (queue.length == 0) {
    console.log("Plz add some value in Queue");
  } else {
    console.log("Queue Front Value -", queue[0]);
  }
}
function rear() {
  if (queue.length == 0) {
    console.log("Plz add some value in Queue");
  } else {
    console.log("Queue Rear Value -", queue[length - 1]);
  }
}

enQueue(10);
enQueue(20);
enQueue(30);
enQueue(40);
// enQueue(50);
deQueue();
// deQueue();
// deQueue();
front();
rear();
console.log(queue);
