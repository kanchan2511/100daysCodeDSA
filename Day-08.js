//Day-08
//problem-01: Count Pairs with Given Sum
function pairSum(arr,target){
    let left = 0;
    let right = arr.length - 1
    let count = 0;
    while(left < right){
         const sum = arr[left] + arr[right];
         if(sum == target){
             count++;
             left++;
             right--;
         }else if(sum < target){
            left++
         }else{
            right--;
         }
    }
    return count;
}
console.log(pairSum([1, 2, 3, 4, 5, 6, 7],8))

//problem-02: Move Zeroes to End
function zerosEnd(arr){
    let left = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
       let temp = arr[left];
       arr[left] = arr[i];
       arr[i] = temp;
       left++;
        }
    } 
    return arr;
}
console.log(zerosEnd([0, 1, 0, 3, 12]));