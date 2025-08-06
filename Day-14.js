//Day-14 
// 🔍 Problem Statement:
// You are working on a website analytics dashboard. You receive hourly visitor counts for a website as an array visitors[], where each element represents the number of users visiting the site in that hour.

// Your task is to find the minimum number of visitors in any k consecutive hours.

// 📥 Input:
// ▫ visitors[]: an array of integers representing visitor counts
// ▫ k: an integer (number of consecutive hours)

// 📤 Output:
// An integer representing the minimum total visitors in any k-hour window
function  minVisitors(visitor,k){
  let minSum = Infinity;
    for(let i=0;i<visitor.length - k;i++){
       let currentSum = 0;
        for(let j = i;j < i + k;j++){
            currentSum += visitor[j];
        }
        if(currentSum < minSum){
            minSum = currentSum;
        }
    }
    return minSum;
}
console.log(minVisitors([120, 80, 100, 90, 150, 110, 70],3))

//output : 270