//day-05
//problem-01: Separate Phone Numbers
//Output:{
//  indianNumbers: ["+919876543210", "+918888777666", "+917654321098"],
//   usNumbers: ["+14085551234", "+12345678901"]
// }
const phoneNumbers = [
  "+919876543210",
  "+14085551234",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];
let indianNumbers = phoneNumbers.filter(number => number.startsWith("+91"));
let usNumbers = phoneNumbers.filter(number => number.startsWith("+1"));
console.log("indianNumbers: ",indianNumbers);
console.log("usNumbers: ",usNumbers);

//problem-02: Insert Product in Cart
//output: [101,103,102,104]
let cart = [101, 102, 104];
let newProduct = 103;
cart.splice(1,0,newProduct);
console.log(cart);

//problem-03: Insert student in waiting list
//output: ["Ali", "John", "Sara", "Aarav"]
let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";
waitingList.push(newStudent);
console.log(waitingList);
