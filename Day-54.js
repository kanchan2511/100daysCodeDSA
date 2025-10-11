
// 💡Today’s Challenge - Check for Balanced Parentheses

// This is a very common interview problem asked by top tech companies to test your stack logic and problem-solving skills.

// Problem Statement:
// Given a string containing only the characters '(', ')', '{', '}', '[', and ']', determine whether the input string is valid.
// A string is considered valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

// ⚡ Example 1:

// Input: "()[]{}"
// Output: Valid

// ⚡ Example 2:

// Input: "(]"
// Output: Invalid

// ⚡ Example 3:

// Input: "{[()]}"
// Output: Valid

// Hint:
// * Use a stack to keep track of opening brackets.
// * When a closing bracket appears, check if the top of the stack has the matching opening bracket.
// * If yes, pop it; otherwise, return invalid.
// * In the end, if the stack is empty → the string is valid.

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

class ParenthesesChecker {
  constructor() {
    this.stack = new Stack();
    this.pairs = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  }

  isValid(str) {
    const stack = new Stack()
    for (let char of str) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.isEmpty() || stack.peek() !== this.pairs[char]) {
          return "Invalid";
        }
        stack.pop();
      }
    }
    return stack.isEmpty() ? "Valid" : "Invalid";
  }
}

const checker = new ParenthesesChecker();
console.log(checker.isValid("()[]{}"));   
console.log(checker.isValid("(]")); 
console.log(checker.isValid("{[()]}"));
console.log(checker.isValid("{[(])}")); 
console.log(checker.isValid("((()))")); 


//output
// Valid
// Invalid
// Valid
// Invalid
// Valid