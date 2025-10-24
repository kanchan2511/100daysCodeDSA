// 🚀 Day 66 - DSA Challenge


// Problem Statement:
// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example:
// Input:  
// nums = [100, 4, 200, 1, 3, 2]

// Output:  
// 4

// Explanation:  
// The longest consecutive sequence is [1, 2, 3, 4].  
// Hence, the length is 4.

// Input:  
// nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

// Output:  
// 9

// Explanation:  
// The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8].


// 💡 Hint:
// * Use a HashSet to store all numbers.
// * Iterate through the array, and for each number num,
// * check if num - 1 exists in the set.
// * If it doesn’t, it means this is the start of a new sequence.
// * Then, count how long this consecutive sequence continues.

// Requirements:
// * Solve in O(n) time complexity.
// * Don’t sort the array.
// * Use only hashing techniques (HashSet / HashMap).


function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (let num of numSet) {
    // Only start counting if num-1 is not in the set
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let length = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        length++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}

// Tests
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
