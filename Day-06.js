//Day-06

//problem-01:  Add Product to Cart
//expected output: [101, 102, 103, 104, 105]
let cart = [101, 102, 103, 104];
cart.push(105);
console.log(cart);

//problem-02:  Remove Sold Out Item
//Expected Output:[101, 102, 104]
let newCart = [101, 102, 103, 104];
let index = newCart.indexOf(103);
if(index != -1){
    newCart.splice(index,1)
}
console.log(newCart)

//problem-03: Insert at Specific Position
//Expected Output:["apple", "orange", "banana", "grapes"]
let fruits = ["apple", "orange", "grapes"];
fruits.splice(2,0,"banana");
console.log(fruits);

//problrm-04: Print All Students
//Expected Output:
// Hello, Ali!
// Hello, Zara!
// Hello, John!
let students = ["Ali", "Zara", "John"];
let eachStudent = students.forEach((student) => {
    console.log("hello, " + student + "!");
});

//problem-05: Delete First Item from Queue
//Expected Output:["order2", "order3"]
let orders = ["order1", "order2", "order3"];
orders.shift();
console.log(orders);




