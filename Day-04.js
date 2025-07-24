//Day-04
//problem: You’re working on an invoice management system. You have a list of invoice numbers and you need to format them by adding a prefix "INV-" to each.
// ✅ Expected Output:['INV-1001', 'INV-1002', 'INV-1003', 'INV-1004']

let invoices = [1001, 1002, 1003, 1004];
let formattedInvoive = invoices.map((number)=>{
    return 'INV-' + number;
})
console.log(formattedInvoive);
