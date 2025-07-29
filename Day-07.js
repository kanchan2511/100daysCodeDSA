//Day-07
//problem-01: Insert New Delivery Order
let orders = [
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
]
orders.splice(1,0,{orderId: 3, deliveryTime: "12:15"});
console.log(orders);

//problem-02:Remove Inactive Users
 let user=[
  { username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }
]
let users=user.filter(user =>{
    return user.isActive===true;
    }
)
console.log(users);


//problem-03: Movie Pair Watch Time 
function pairSum(arr,target){
  arr.sort((a,b) => a-b);
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === target){
      return [arr[left],arr[right]];
    }else if(sum < target){
      left++;
    }else{
      right--;
    }
  }
    return 'No exact Time pair found';
}
console.log(pairSum([90, 85, 75, 60, 120, 150, 125],250))
