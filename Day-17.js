//Day-17
//Problem:
// "Longest Subarray with Sum ≤ K"
// Given an integer array nums and an integer k, return the length of the longest subarray whose sum is less than or equal to k.

// Input: nums = [2, 1, 5, 1, 3, 2], k = 8  
// Output: 3
const nums = [2, 1, 5, 1, 3, 2]
const k = 8;
function longestSubarray(nums,k){
    let maxLength = 0;
    for(let i=0;i<nums.length;i++){
        let currentSum = 0;
        for(let j = i;j<nums.length;j++){
            currentSum += nums[j];
            if(currentSum <= k){
                maxLength = Math.max(maxLength,(j - i + 1))
            }
        }
    }
    return maxLength;
}
console.log(longestSubarray(nums,k));

//output: 3