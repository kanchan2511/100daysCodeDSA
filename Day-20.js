//Day-20

//You are working on a website analytics dashboard. You receive hourly visitor counts for a website as an array visitors[], where each element represents the number of users visiting the site in that hour.

// Your task is to find the minimum total number of visitors in any k consecutive hours.

// 📥 Input:
// visitors[]: an array of integers representing visitor counts
// k: an integer (number of consecutive hours)


function miniVisitores(visitores, k){
    let n = visitores.length;
    if(k > n){
        return -1;
    }
    let currentSum = 0;
    for(let i=0;i<k;i++){
        currentSum += visitores[i];
    }
    let minSum = currentSum;
    for(let i=k;i<n;i++){
        currentSum = currentSum - visitores[i-k] + visitores[i];
        if(currentSum < minSum){
            minSum = currentSum
        }
    }
    return minSum;
}
console.log(miniVisitores( [120, 80, 100, 90, 150, 110, 70],3))

//output : 270