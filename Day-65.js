// 🚀 Day 65 - DSA Challenge

// Problem Statement:
// Given an array of integers and an integer target, find whether there exists a subarray (contiguous elements) whose sum equals the target value.

// If such a subarray exists, return true; otherwise, return false.

// Example:
// Input:  
// arr = [10, 2, -2, -20, 10]  
// target = -10  

// Output:  
// true  

// Explanation:  
// Subarray [10, 2, -2, -20] sums to -10

// Input:  
// arr = [1, 4, 20, 3, 10, 5]  
// target = 33  

// Output:  
// true  

// Explanation:  
// Subarray [20, 3, 10] sums to 33


// Hint:
// * Use a HashMap to store the prefix sums as you traverse the array.
// * For each element, check if currentSum - target has been seen before.
// * If yes → a subarray with the given sum exists.


function subArrayWithSum(arr,target){
    let prefix = 0;
    const seen = new Set() //to store prefix sums
    seen.add(0) //important edgw case
    for(let num of arr){
        prefix += num;
        if(seen.has(prefix - target)) return true;
        seen.add(prefix)
    }
    return false;
}
console.log(subArrayWithSum([10, 2, -2, -20, 10], -10)); // true
console.log(subArrayWithSum([1, 4, 20, 3, 10, 5], 33));  // true
console.log(subArrayWithSum([1, 2, 3], 7));   //false