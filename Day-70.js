// 🚀Day 70 - DSA Challenge
// Topic: Recursion
// Problem: Permutations of a String

// Problem Statement:
// Given a string S, print all possible permutations of the characters in the string using recursion.

// Example:
// Input:  
// S = "ABC"

// Output:  
// ABC  
// ACB  
// BAC  
// BCA  
// CAB  
// CBA

// Requirements:
// 1. Use recursion only – no built-in functions for permutation.
// 2. At each recursive call, fix one character and recursively find permutations of the remaining substring.
// 3. Handle duplicate characters properly (optional advanced part).

// 💡 Hint:
// Think of each recursion as choosing a character for the current position, and then recursively solving for the rest of the positions.


function getPermutations(str){
    if(str.length === 1) return [str];
    let result = [];
    for(let i=0;i<str.length;i++){
        let currentChar =  str[i]
        let remaining = str.slice(0,i) + str.slice(i + 1);
        let subPermutations = getPermutations(remaining)
        for(let p of subPermutations){
            result.push(currentChar + p)
        }
    }
    return result
}
let S = 'ABC'
console.log(getPermutations(S))

//output
// [ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA' ]