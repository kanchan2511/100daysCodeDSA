//Day-10
//problem
function calculator(userA,userB){
    let all = userA.concat(userB);
    all.sort((a,b) => a[0] - b[0]);
    let merge =[];
    for(i=0;i<all.length;i++){
        let current = all[i];
        if(merge.length ===0 || merge[merge.length - 1][1]<current[0]){
            merge.push(current);
        }else{
            merge[merge.length - 1][1] = Math.max(merge[merge.length - 1][1],current[1])
        }
    }
    return merge;
}
console.log(calculator([[9, 11], [13, 15], [18, 20]],[[10, 12], [14, 16], [17, 18]]));