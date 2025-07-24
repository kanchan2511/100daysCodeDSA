//01-Remove Discontinued Products Problem:
//output: ['Laptop','Mobile','Watch'];
let products = ['Laptop','Mobile','Tablet','Camera','Watch']; 
products.splice(2,2);
console.log(products);

//02 - Add New students in between problem:
//output:  ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']
let students = ['Ali','Sara','Zoya'];
students.splice(1,0,'Nina','Omar');
console.log(students);

//03 - Extract Top Performers Problem:
//Output: ['Zainab', 'Ali', 'Farhan']
let scores = ['Zainab','Ali','Farhan','Nida','Ayaan'];
const top3 = scores.slice(0,3);
console.log(top3);

//04 - show last 2 Days sales problem:
// Output: [390, 310]
let sales = [220,300,280,150,400,390,310];
const lastTwoDays = sales.slice(-2);
console.log(lastTwoDays);

//05 - Get All users Who are Active Problem:
// Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]
let users = [
    {name: 'Ahmed', active: true},
    {name: 'Mira', active: false},
    {name: 'John', active: true}
]
const result = users.filter((user)=>{
   if(user.active === true){
    return user;
}
});
 console.log(result);

//06 - Block Short Phone Numbers Problem:
//Output: ['1234567890', '9876543210']
let phoneNumbers = ['1234567890','12345','9876543210','678901234'];
const shortPhone = phoneNumbers.filter((number) => {
    if(number.length >= 10){
        return number;
    }
})
console.log(shortPhone);

//07 - Convert Price to With Tax Problem:
// Output: [118, 236, 354]
let prices = [100,200,300];
const gstRate = 0.18; //18%
const addTax = prices.map(price => price * (1 + gstRate)); 
// 100 * (1 + 0.18) = 100 * 1.18 = 118
//1 + means 100% of original price 
console.log(addTax);

//08 - append ".com" to website names problem:
//Output: ['google.com', 'amazon.com', 'microsoft.com']
let sites = ['google','amazon','microsoft'];
const append = sites.map((site) => {
    return site + '.com';
});
console.log(append); 

//09 - calculate total cart price problem:
//Output: 2896
let cart = [499,1299,299,799];
const total = cart.reduce(function(acc,curr){
    return acc + curr;
},0);
console.log(total);

//10 - count frequency of votes problem:
//Output: { A: 3, B: 2, C: 1 }
let votes = ['A','B','A','C','B','A'];
const eachCandidate = votes.reduce(function(acc,curr){
    if(acc[curr]){
        acc[curr]++;
    }else{
        acc[curr] = 1
    }
    return acc;
},{});
console.log(eachCandidate);
