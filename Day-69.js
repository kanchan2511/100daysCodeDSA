// 🚀 Day 69 - DSA Challenge

// Problem Statement:
// Given a string S, print all possible subsets (the power set) of that string using recursion.
// The order of subsets does not matter, but each subset should be unique.

// Example:
// Input:  
// S = "abc"

// Output:  
// ["", "a", "b", "c", "ab", "ac", "bc", "abc"]

// Requirements:
// 1. Use recursion only – no iterative loops for generating subsets.
// 2. In each recursive call, decide whether to include or exclude the current character.
// 3. Store or print each subset when the end of the string is reached.

// 💡 Hint:
 // Think of recursion as branching at each step, you either take the current character or skip it.


 function generateSubsets(str,index = 0,current = "",result = []){
    if(index === str.length){
        result.push(current)
        return result;
    }
    //include current char
    generateSubsets(str,index + 1,current + str[index],result);
    //exclude current char
    generateSubsets(str,index + 1,current,result)
    return result;
 }
 console.log(generateSubsets("abc"))


//output
//  [
//   'abc', 'ab', 'ac',
//   'a',   'bc', 'b',
//   'c',   ''
// ]