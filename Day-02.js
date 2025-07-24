//100 Days of Code
//Day-02

//problem-01:Generate Invoice Report
//Expected Output:
//[
//  { name: "Pen", total: 30 },
//  { name: "Notebook", total: 100 },
//  { name: "Bag", total: 400 }
//]
let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];
let invoice = items.map(item => ({
    name: item.name,
    total: item.qty*item.price
}));
console.log(invoice);


//problem-02:  Detect Duplicate Entries 
//Expected Output:
//['Ali', 'Sara']
let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];
let repeated = users.filter( (user,index) => {
    return (users.indexOf(user)!=users.lastIndexOf(user)&&users.indexOf(user)===index);
});
console.log(repeated);

//problem-03: Find Most Sold Product
//Expected Output:'Pen'
let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];
let freqMap = orders.reduce((acc,order)=>{
    if(!acc[order.product]){
        acc[order.product]=0;
    }
    acc[order.product]+=order.qty;
    return acc;
},{});
let arr=Object.entries(freqMap);
let maxProduct=arr.reduce((acc,[currName,currQty])=>{
    let maxQty = [freqMap[acc]];
    if(currQty>freqMap[acc]){
        return currName;
    }
    return acc;
},arr[0][0]);
console.log(maxProduct);





