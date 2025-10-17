// Day 57: DSA Challenge - "Decode the String" 

// Problem Statement:
// You are given an encoded string where patterns are of the form k[encoded_string], and the encoded_string inside the square brackets is repeated exactly k times.
// Return the decoded string.

// Examples:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// 💡 Hint:
// * Use two stacks - one for numbers and one for characters.
//      Traverse the string:
// * When you see a digit, calculate the multiplier.
// * When you see a ‘[’, push current string and number.
// * When you see a ‘]’, pop from both stacks and combine.

class Stack {
    constructor() {
        this.items = [];
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()) return null;
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
}
class StringDecoder{
    constructor(){
        this.numStack = new Stack()
        this.strStack = new Stack();
    }
    decode(s){
        let current = '';
        let num = 0;
         for (let char of s) {
      if (!isNaN(char)) {
        // Build number (handles multiple digits)
        num = num * 10 + Number(char);
      } 
      else if (char === "[") {
        // Push current values to stacks
        this.numStack.push(num);
        this.strStack.push(current);
        // Reset for new segment
        num = 0;
        current = "";
      } 
      else if (char === "]") {
        // Pop previous string and number
        const repeatTimes = this.numStack.pop();
        const prevStr = this.strStack.pop();
        current = prevStr + current.repeat(repeatTimes);
      } 
      else {
        // Regular character
        current += char;
      }
    }

    return current;
    }
}
const decoder = new StringDecoder();

console.log(decoder.decode("3[a]2[bc]"));    
console.log(decoder.decode("3[a2[c]]"));      
console.log(decoder.decode("2[abc]3[cd]ef")); 


//output
// aaabcbc
// accaccacc
// abcabccdcdcdef