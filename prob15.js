// circular Queue.

class Queue {
  constructor(size) {
    this.max = size;
    this.items = new Array(size);
    this.length = 0;
    this.rear = -1;
    this.front = -1;
  }
  enqueue(val) {
    if (this.length !== this.max) {
      if (this.rear == this.max - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.items[this.rear] = val;
      this.length++;

      if (this.front == -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is full, you can't add this value -", val);
    }
  }
  dequeue() {
    if (this.length !== 0) {
      this.items[this.front] = null;
      if (this.front == this.max - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.length--;
    } else {
      this.front = -1;
      this.rear = -1;
      console.log("queue is empty");
    }
  }
}

let queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
console.log(queue);
