
// 💡 Problem Statement

// Given a string, reverse it using a Queue data structure.
// You’re not allowed to use built-in reverse functions only queue operations!

// Example
// Input:
// "hello"

// Output:
// "olleh"

// Requirements
// 1. Enqueue all characters of the string into the queue.
// 2. Dequeue them one by one and push them into a stack (to reverse order).
// 3. Pop from the stack and build the reversed string.
// 4. Finally, print the reversed string.

// Hint
// * Queue maintains FIFO (First In First Out) order.
// * Stack maintains LIFO (Last In First Out) order.
// * Combining both gives you a reversed result a simple but powerful concept!

class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
       if(this.isEmpty()) return null;
       return this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0;
    }
}

//stack
class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()) return null;
        return this.items.pop()
    }
    isEmpty(){
        return this.items.length === 0;
    }
}

class Reverser{
    constructor() {
        this.queue = new Queue()
        this.stack = new Stack()
    }
    reverse(str){
        //enqueue all characters
        for(let char of str){
            this.queue.enqueue(char)
        }
        //move from queue to stack
        while(!this.queue.isEmpty()){
            this.stack.push(this.queue.dequeue())
        }
        //pop from stack to build final string
        let reversed = "";
        while(!this.stack.isEmpty()){
            reversed += this.stack.pop()
        }
        return reversed;
    }
}
const reverser = new Reverser()
const input = "hello";
const output = reverser.reverse(input)
console.log("Input:",input)
console.log("Reversed:",output)


//output
// Input: hello
// Reversed: olleh