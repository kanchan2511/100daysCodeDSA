//Day-24

// Longest Substring Without Repeating Characters

//  Problem Statement:
// Given a string s, find the length of the longest substring without repeating characters.

function longestSubstring(s){
    let currentWindow = new Set();
    let left = 0;
    let maxLength = 0;
    for(i=0;i<s.length;i++){
        while(currentWindow.has(s[i])){
            currentWindow.delete(s[left]);
            left++;
        }
        currentWindow.add(s[i]);
        maxLength = Math.max(maxLength,i - left + 1);
    }
    return maxLength;
}
console.log(longestSubstring("abcabcbb"));

//output: 3 //abc