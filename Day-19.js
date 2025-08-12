//Day-19

//// 🧠 Problem Statement:
// You're analyzing user browsing behavior.
//  You are given a list of webpages (as strings), 
//  visited in order, and a window size k. 
//  You need to determine if any window of k consecutive pages contains 
//  all unique pages (no repeats).
// If such a window exists, return true. 
// Otherwise, return false.




// 📥 Input:
// pages = ["home", "about", "products", "home", "cart", "checkout"]
// k = 3
//output: true

function findUnique(arr, k) {
    let freqMap = new Map();
    let start = 0;
    for (let i = 0; i < arr.length; i++) {
        // Add current element to map
        freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
        // Shrink window if size > k
        if (i - start + 1 > k) {
            freqMap.set(arr[start], freqMap.get(arr[start]) - 1);
            if (freqMap.get(arr[start]) === 0) {
                freqMap.delete(arr[start]);
            }
            start++;
        }
        // Check if current window has k unique elements
        if (i - start + 1 === k && freqMap.size === k) {
            return true;
        }
    }
    return false;
}
console.log(findUnique(["home", "about", "products", "home", "cart", "checkout"], 3));


