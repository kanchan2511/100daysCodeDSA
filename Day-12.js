//Day-12
// Maximum Sum of K Consecutive Elements (Brute-Force Only)

function maxSumofk(arr,k){
    let maxSum = 0;
    for(i=0;i<=arr.length - k;i++){
        let currentSum = 0;
        for(j=i;j<i+k;j++){
            currentSum +=arr[j];
        }
       sum = Math.max(maxSum,currentSum);
    }
    return sum;
}
console.log(maxSumofk([10, 20, 30, 40, 50, 60, 70],3))