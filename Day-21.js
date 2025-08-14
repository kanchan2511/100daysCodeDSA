//Day-21
// 📈 Problem Statement:
// You’re building a productivity tracker. The user has a record of their daily productivity over the past few weeks. Each day is marked as:

// 1 → productive

// 0 → unproductive

// You’re allowed to take a break for up to k unproductive days, and you want to find the maximum streak of days that can be considered productive by flipping up to k zeros.


function longestProductive(days, k) {
    let left = 0;
    let maxLen = 0;
    let zeroCount = 0;
    for (i = 0; i < days.length; i++) {
        if (days[i] == 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            if (days[left] == 0) {
                zeroCount--;
            }
            left++;
        }
        let currentLength = i - left + 1;
        if (currentLength > maxLen) {
            maxLen = currentLength;
        }
    }
    return maxLen;
}
console.log(longestProductive([1, 0, 1, 1, 0, 0, 1, 1, 1, 0], 2));

//output : 7