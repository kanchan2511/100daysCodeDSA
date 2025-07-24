//Day-03

//Problem-01: Detect and Merge Duplicate Product Entries (Advanced Cleanup)
//// Expected Output:
// [
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 104, name: 'Tablet' },
//   { id: 106, name: 'Camera' }
// ]
let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];
let seenNames = [];
let cleanInventory = inventory.filter((product)=>{
    let lowerName = product.name.toLowerCase();
    if(!seenNames.includes(lowerName)){
        seenNames.push(lowerName);
        return true
    }else{
        return false
    }
});
console.log(cleanInventory);

//problem-02: Group Transactions by Category and Sum Amounts
// Expected Output:
// {
//   Food: 200,
//   Transport: 120,
//   Shopping: 300
// }
let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];
let group = transactions.reduce((acc,transaction)=>{
    if(!acc[transaction.category]){
        acc[transaction.category] = 0;
    }
    acc[transaction.category] += transaction.amount
    return acc
},{})
console.log(group)
