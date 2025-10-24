
// Problem Statement:
// Given two arrays A and B of the same size N, check whether both arrays are equal or not.
// Two arrays are considered equal if both contain the same elements with the same frequency, though the order may differ.

// Example:

// Input:  
// A = [1, 2, 5, 4, 0]  
// B = [2, 4, 5, 0, 1]

// Output:  
// Yes

// Input:  
// A = [1, 2, 5]  
// B = [2, 4, 15]

// Output:  
// No

// Hint:
// Use a hash map (object in JS) to count the frequency of each element in both arrays and then compare the maps.


function checkEquality(A,B){
    if(A.length !== B.length) return false;
    const freq={} //to store values as key value pairs this is hash map
    for(let num of A){
        freq[num] = (freq[num] || 0) + 1;
    }
    for(let num of B){
        if(!freq[num]){
            return "no"; //num not found or already used up
        }
        freq[num]--; //reduce count
    }
    return "yes"
}
console.log(checkEquality([1, 2, 5, 4, 0], [2, 4, 5, 0, 1]));
console.log(checkEquality([1, 2, 5], [2, 4, 15]));

//output
//yes
//no


//time complexity O(N);