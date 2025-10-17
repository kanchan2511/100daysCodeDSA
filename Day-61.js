
// 💡 Problem Statement
// You are tasked with designing a Circular Queue a linear data structure that follows FIFO (First In, First Out) but connects the end of the queue back to the front, forming a circle.

// You need to implement a class CircularQueue supporting the following operations 

// Requirements
// 1. enqueue(value) → Insert an element into the circular queue. Return true if successful.
// 2. dequeue() → Remove an element from the circular queue. Return true if successful.
// 3. Front() → Get the front item from the queue. If the queue is empty, return -1.
// 4. Rear() → Get the last item from the queue. If the queue is empty, return -1.
// 5. isEmpty() → Check whether the queue is empty.
// 6. isFull() → Check whether the queue is full.

// Example
// Input:
// CircularQueue cq = new CircularQueue(3);
// cq.enqueue(10);
// cq.enqueue(20);
// cq.enqueue(30);
// cq.enqueue(40);
// cq.Rear();
// cq.isFull();
// cq.dequeue();
// cq.enqueue(40);
// cq.Rear();


// Output:
// false
// 30
// true
// true
// 40

// Explanation
// 1. Enqueue 10, 20, 30 → Queue = [10, 20, 30]
// 2. Enqueue 40 → Fails (Queue is full)
// 3. Rear → 30
// 4. isFull → true
// 5. Dequeue → Removes 10 → Queue = [20, 30]
// 6. Enqueue 40 → Queue = [20, 30, 40]
// 7. Rear → 40

class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }
    enqueue(value) {
        if (this.isFull()) return false;
        if (this.front === -1) {
            this.front = 0;
        }
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
        return true;
    }
    dequeue() {
        if (this.isEmpty()) return false;
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return true;
    }
    front() {
        if (this.isEmpty()) return -1;
        return this.queue[this.front]
    }
    Rear() {
        if (this.isEmpty()) return -1;
        return this.queue[this.rear];
    }
    isEmpty() {
        return this.front === -1;
    }
    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }
}
const cq = new CircularQueue(3);
console.log(cq.enqueue(10));
console.log(cq.enqueue(20)); 
console.log(cq.enqueue(30)); 
console.log(cq.enqueue(40));
console.log(cq.Rear());     
console.log(cq.isFull());   
console.log(cq.dequeue());  
console.log(cq.enqueue(40)); 
console.log(cq.Rear());     


//output
// true
// true
// true
// false
// 30
// true
// true
// true
// 40