//  Problem Statement

// You are given an array A of integers and an integer K representing the window size.
// For each contiguous subarray (window) of size K, find the first negative integer in that window.
// If a window doesn’t contain any negative integer, print 0 for that window.

// You must solve this using a Queue to efficiently manage the sliding window.

//  Example
// Input:
// A = [12, -1, -7, 8, -15, 30, 16, 28]  
// K = 3

// Output:
// -1 -1 -7 -15 -15 0

// Explanation
// Window-wise breakdown 👇

// Window	   Elements	First Negative
// 1	          [12, -1, -7]        -1
// 2	          [-1, -7, 8]	   -1
// 3	          [-7, 8, -15]	   -7
// 4	          [8, -15, 30]	   -15
// 5	          [-15, 30, 16]	  -15
// 6	          [30, 16, 28]	   0


//  Requirements
// 1. Traverse the array using a sliding window of size K.
// 2. Use a queue to store indices of negative numbers.
// 3. As the window slides:
// * Remove elements that are out of the current window.
// * If the front of the queue is the first negative element, record it.
// * If no negative element is found, record 0.
// 4. Output the first negative integer for each window.

class Queue{
    constructor() {
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty()) return null;
        return this.items.shift()
    }
    front(){
        if(this.isEmpty()) return null;
        return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
}
class FirstNegativeWindow{
    constructor(arr,k) {
        this.arr = arr;
        this.k = k;
        this.queue = new Queue()
    }
    findFirst(){
        const result = [];
        for(let i = 0;i<this.arr.length; i++){
            if(this.arr[i] < 0){
                this.queue.enqueue(i);
            }
            while(!this.queue.isEmpty() && this.queue.front() <= i - this.k){
                this.queue.dequeue();
            }
            if(i >= this.k - 1){
                if(!this.queue.isEmpty()){
                    result.push(this.arr[this.queue.front()]);
                }else{
                    result.push(0)
                }
            }
        }
        return result;
    }
}
const window = new FirstNegativeWindow([12, -1, -7, 8, -15, 30, 16, 28],3)
console.log(window.findFirst().join(" "))


//output
// -1 -1 -7 -15 -15 0
