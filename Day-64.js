// Day 64 - DSA Challenge
// Problem Statement:
// Given an array of integers, find the first element that does not repeat in the array.
// If all elements repeat, return -1.

// Example:
// Input:  
// arr = [9, 4, 9, 6, 7, 4]

// Output:  
// 6

// Input:  
// arr = [1, 2, 3, 2, 1, 3]

// Output:  
// -1

// Hint:
// Use a hash map (object in JS) to store the frequency of each element, and then iterate once more to find the first element with frequency 1.


function NonRepeating(arr){
    const freq={}
    for(let num of arr){
        freq[num] = (freq[num]||0) + 1;
    }
    for(let num of arr){
        if(freq[num] === 1) return num
    }
    return -1;
}
console.log(NonRepeating([9, 4, 9, 6, 7, 4])); // 6
console.log(NonRepeating([1, 2, 3, 2, 1, 3])); // -1

