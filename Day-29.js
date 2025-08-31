//day-29

// Problem Statement

// Implement a Linked List with the following operations:
// 1. Insert a node at any given position
// 2. Delete a node from any given position
// 3. Print the entire linked list

// 🔹 Input Example:
// Insert 10 at position 1  
// Insert 20 at position 2  
// Insert 30 at position 2  
// Delete node at position 1
// Print Linked List

// 🔹 Output Example:
// 20 -> 30


class Node {
    constructor(data) {
        this.data = data,
            this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null,
            this.tail = null
    }
    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head; //linking my node
        this.head = newNode;  //updating the head

    }
    insertAtPosition(data, position) {
        const newNode = new Node(data);
        if (position == 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        //let index = 0;
        for (let i = 0; current !== null && i < position - 1; i++) {
            current = current.next;
        }
        //position out of range
        if (current == null) {
            console.log('position out of range');
        }
        newNode.next = current.next;
        current.next = newNode;
        //if insterting at end 
        if (newNode.next == null) {
            this.tail = newNode;
        }  
    }
     deleteByPosition(index) {
            if (index === 0) {
                this.head = this.head.next;
                return;
            }
            let current = this.head;
            let previous = null;
            let count = 0;
            while(current && count < index){
                previous = current;
                current = current.next;
                count++;
            }
            if(current){
                previous.next = current.next
            }
        }

    //print function
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + '->';
            current = current.next;
        }
        console.log(result + 'null');
    }
}
let list = new LinkedList();
list.insertAtHead(30);
list.insertAtHead(20);
list.insertAtHead(10);
list.deleteByPosition(0);
list.printList();

//output
//20->30->null
