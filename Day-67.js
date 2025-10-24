// 🚀 Day 67 - DSA Challenge

// Problem Statement:
// Write a recursive function to print all natural numbers from 1 to N.
// You are not allowed to use loops (for, while, etc.).

// Example:
// Input:  
// N = 5

// Output:  
// 1 2 3 4 5

// 💡 Hint:
// * Think of the base case (when should the recursion stop?).
// * In each recursive call, print one number and move towards the next.
// * Use function call stack to print in the correct order.

// Requirements:
// * Must use recursion (no loops).
// * Handle edge cases like N = 0 or negative input.


function printNumbers(n){
    if(n <= 0) return;

    printNumbers(n - 1) //recursive call for 1 to n-1
    console.log(n);
}
printNumbers(5)

//output
// 1
// 2
// 3
// 4
// 5