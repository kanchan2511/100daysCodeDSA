

// 💡 Today’s Challenge - Next Greater Element

// Problem Statement:
// Given an array of integers, for each element, find the next greater element to its right. If no greater element exists, return -1 for that element.

// 👉 Example 1:
// Input: [4, 5, 2, 25]
// Output: [5, 25, 25, -1]

// Explanation:
// 4 → next greater is 5
// 5 → next greater is 25
// 2 → next greater is 25
// 25 → no greater → -1

// 👉 Example 2:
// Input: [13, 7, 6, 12]
// Output: [-1, 12, 12, -1]

// Hint / Approach:
// * Use a stack to keep track of elements for which we haven’t found the next greater element.
// * Traverse the array from left to right:
// * While the stack is not empty and the current element is greater than the top of stack, pop from stack and set the current element as the next greater.
// * Push the current element onto the stack.
// * After traversing the array, all remaining elements in the stack have no next greater → assign -1.


class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class NextGreaterElement{
    constructor(arr) {
        this.arr = arr;
        this.stack = new Stack();
        this.result = new Array(arr.length).fill(-1)
    }
    findGreater(){
        for(let i = 0; i< this.arr.length;i++){
            while(!this.stack.isEmpty() && this.arr[i] > this.arr[this.stack.peek()]){
                const TopIndex = this.stack.pop()
                this.result[TopIndex] = this.arr[i];
            }
            this.stack.push(i);
        }
        return this.result;
    }
    display(){
        console.log("Input Array:", this.arr);
        console.log("Greater Elements:",this.result);
    }
}
const example1 = new NextGreaterElement([4,5,2,25])
example1.findGreater();
example1.display();

const example2 = new NextGreaterElement([13,7,6,12])
example2.findGreater();
example2.display()


//output
// Input Array: [ 4, 5, 2, 25 ]
// Greater Elements: [ 5, 25, 25, -1 ]
// Input Array: [ 13, 7, 6, 12 ]
// Greater Elements: [ -1, 12, 12, -1 ]