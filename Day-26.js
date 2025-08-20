//Day-26

// Challenge: Linked List Insertions 

// You are given a singly linked list. Implement the following operations:

// Insert at Head → Add a new node at the beginning of the list.

// Insert at Tail → Add a new node at the end of the list.

// Insert at Position → Add a new node at a given 1-based position pos.

// If pos = 1, insert at the head.

// If pos = length + 1, insert at the tail.

// If pos is greater than the length + 1, handle it gracefully.

// 🔹 After performing the operations, print the linked list in the format:
// data1 -> data2 -> data3 -> null


class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null,
        this.tail = null
    }
    insertAtHead(data){
    const newNode = new Node(data);
   if (!this.head) {                 // empty list
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        console.log(`Insert ${data} at head → ${this.printList()}`);
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.head) {                 // empty list
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        console.log(`Insert ${data} at tail → ${this.printList()}`);
    }

    insertAtPosition(data, position) {
        if (position < 1) {
            console.log(" Invalid position (positions start at 1).");
            return;
        }

        const newNode = new Node(data);

        // Case 1: Insert at head (pos = 1)
        if (position === 1) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) this.tail = newNode;  // if list was empty
            console.log(`Insert ${data} at position ${position} → ${this.printList()}`);
            return;
        }

        let current = this.head;
        let count = 1;

        // Traverse to node before the desired position
        while (current !== null && count < position - 1) {
            current = current.next;
            count++;
        }

        if (current === null) {
            console.log(" Position out of range.");
            return;
        }

        newNode.next = current.next;
        current.next = newNode;

        if (newNode.next === null) {  // if inserted at end
            this.tail = newNode;
        }

        console.log(`Insert ${data} at position ${position} → ${this.printList()}`);
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        return result + "null";
    }
}


const list = new LinkedList();
list.insertAtHead(10);      
list.insertAtTail(20);      
list.insertAtPosition(15,2);
list.insertAtPosition(5,1); 
list.insertAtPosition(30,5);
list.insertAtPosition(99,10);

//output:
// Insert 10 at head → 10 -> null
// Insert 20 at tail → 10 -> 20 -> null
// Insert 15 at position 2 → 10 -> 15 -> 20 -> null
// Insert 5 at position 1 → 5 -> 10 -> 15 -> 20 -> null
// Insert 30 at position 5 → 5 -> 10 -> 15 -> 20 -> 30 -> null
//  Position out of range.