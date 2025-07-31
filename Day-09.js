//Day-09
//problem-01: Remove Duplicate Emails (Like Gmail cleanup)
function duplicateEmails(arr){
    let left = 0;
    for(i=1;i<arr.length;i++){
        if(arr[i]!=arr[left]){
            left++;
             arr[left] = arr[i]
        }
      
    }
    return arr.slice(0,left+1);
}
console.log(duplicateEmails(["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"])
);

//problem-02: Playlist duration Matcher(music app feature);
function musicApp(arr,target){
   let left = 0;
   let right = arr.length - 1;
   while(left<right){
    const total = arr[left] + arr[right];
    if(total === target){
        return [arr[left],arr[right]];
    }else if(total < target){
        left++;
    }else{
        right--;
    }
   }
   return arr;
}
console.log(musicApp([3, 5, 8, 2, 7, 4],10))