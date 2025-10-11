
// 💡 Today’s Challenge - Implement a Stack and Perform All Operations

// A Stack is a LIFO (Last In, First Out) data structure - the element inserted last is the first to be removed.
// You’ll implement your own stack and perform Push, Pop, Peek, and Display operations.

// 👉 Requirements:

// 1. Implement Stack using Array or Linked List (your choice).
// 2. Perform the following operations:
// * Push: Add an element to the stack.
// * Pop: Remove the top element.
// * Peek/Top: View the top element without removing it.
// * Display: Print all elements of the stack.
// 3. Handle edge cases:

// Stack Overflow (if using fixed size array).

// Stack Underflow (when trying to pop from empty stack).

// ⚡ Example Input:

// Push(10)  
// Push(20)  
// Push(30)  
// Pop()  
// Push(40)  
// Peek()  
// Display()


// ✅ Expected Output:

// Pushed 10  
// Pushed 20  
// Pushed 30  
// Popped 30  
// Pushed 40  
// Top element: 40  
// Stack elements: 40 20 10

class Stack{
    constructor(){
        this.items = [];
    }

    //push
    push(element){
        if(this.items.length === 0){
            console.log("Stack overflow",element)
        }
        this.items.push(element);
        console.log("Pushed",element)
    }
    //pop
    pop(){
        if(this.items.length === 0){
            console.log("Stack Underflow");
        }
        const popped = this.items.pop();
        console.log("Popped",popped)
    }
    // Peek / Top element
  peek() {
    if (this.items.length === 0) {
      console.log("Stack is empty!");
      return;
    }
    console.log("Top element:", this.items[this.items.length - 1]);
  }

  // Display all elements
  display() {
    if (this.items.length === 0) {
      console.log("Stack is empty!");
      return;
    }
    console.log("Stack elements:", this.items.slice().reverse().join(" "));
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.push(40);
stack.peek();
stack.display();

//output
// Pushed 10
// Pushed 20
// Pushed 30
// Popped 30
// Pushed 40
// Top element: 40
// Stack elements: 40 20 10