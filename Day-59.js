// 🚀 Day 59: DSA Challenge - Reverse First K Elements of a Queue
// Problem Statement

// Given an integer K and a Queue of integers, your task is to reverse the first K elements of the queue while leaving the other elements in the same relative order.

// 🔹 Example
// Input:
// Queue: [10, 20, 30, 40, 50]
// K = 3

// Output:
// [30, 20, 10, 40, 50]

// Explanation:
// * The first 3 elements (10, 20, 30) are reversed → [30, 20, 10]
// * The remaining elements (40, 50) stay as they are.

// ✅ Requirements
// * Use a queue data structure.
// * You may use an auxiliary stack to help with reversal.
// * The final order of the queue should maintain the correct relative order for elements beyond the first K.

// Handle edge cases:
// * K = 0 (no change)
// * K > size of queue (reverse entire queue)
// * Empty queue

// Hints
// * Dequeue the first K elements and push them into a stack.
// * Pop all elements from the stack and enqueue them back (this reverses them).
// * Move the remaining (n - K) elements from front to rear to maintain order.


// Queue implementation
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  front() {
    return this.isEmpty() ? null : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

// Function to reverse first K elements of a queue
function reverseFirstKElements(queue, k) {
    // Edge cases
    if (queue.isEmpty() || k <= 0) return queue;
    if (k > queue.size()) k = queue.size();

    const stack = [];

    for (let i = 0; i < k; i++) {
      stack.push(queue.dequeue());
    }

    // Step 2: Pop all elements from stack and enqueue back to queue
    while (stack.length > 0) {
      queue.enqueue(stack.pop());
    }

    // Step 3: Move the remaining (n - K) elements to the back
    const remaining = queue.size() - k;
    for (let i = 0; i < remaining; i++) {
      queue.enqueue(queue.dequeue());
    }

    return queue;
}


const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

console.log("Original Queue:");
q.print();

reverseFirstKElements(q, 3);

console.log("Queue after reversing first 3 elements:");
q.print();


//output
// Original Queue:
// [ 10, 20, 30, 40, 50 ]
// Queue after reversing first 3 elements:
// [ 30, 20, 10, 40, 50 ]
