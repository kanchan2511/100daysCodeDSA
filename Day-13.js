//Day-13 
// Longest Productive Streak (Real-World Sliding Window Scenario)
function longestProductive(days,k){
    let maxLength = 0;
    let n = days.length;
    for(let i = 0;i<n;i++){
        let zerosCount =0;
        for(let j = i;j<n;j++){
            if(days[j] == 0){
                zerosCount++;
            }
            if(zerosCount > k){
                break;
            }
           let currentLength = j - i + 1;
            if(currentLength > maxLength){
                maxLength = currentLength;
            }
        }
    }
    return maxLength;
}
console.log(longestProductive( [1, 0, 1, 1, 0, 0, 1, 1, 1, 0],2))

//output: 7