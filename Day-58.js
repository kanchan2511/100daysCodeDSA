// 🚀 Day 58: DSA Challenge - Implement Queue Using Array

// Problem Statement
// You are required to implement a Queue data structure using an array (or list in JavaScript).
// Your queue should support the following operations:
// * enqueue(x) → Add element x to the rear of the queue.
// * dequeue() → Remove and return the front element.
// * front() → Return the front element without removing it.
// * isEmpty() → Return true if the queue is empty, else false.
// * size() → Return the total number of elements in the queue.

// Example
// Input:
// enqueue(10)
// enqueue(20)
// enqueue(30)
// dequeue()
// enqueue(40)
// front()
// size()

// Output:
// 10
// 20
// 3

// Explanation:
// * Queue after enqueuing 10, 20, 30 → [10, 20, 30]
// * After dequeue() → [20, 30]
// * After enqueue(40) → [20, 30, 40]
// * front() returns 20
// * size() returns 3

// 💡 Hints
// * A queue follows FIFO (First In First Out) principle.
// Keep track of both ends:
// * front → element to be removed next.
// * rear → position where next element will be inserted.


class Queue {
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element)
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null
        }
        return this.items.shift()
    }
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.items[0];
    }
    isEmpty() {
    return this.items.length === 0;
  }


  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.join(", "));
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Removed:", queue.dequeue()); // 10
queue.enqueue(40);

console.log("Front:", queue.front()); // 20
console.log("Size:", queue.size());   // 3



//output:
// Removed: 10
// Front: 20
// Size: 3