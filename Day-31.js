//Day-31

// Today’s Challenge - Linked List Deletion by Value & Position

// Implement the following operations on a Singly Linked List:

// ⿡ Insert a node at the end
// ⿢ Insert a node at the beginning
// ⿣ Delete a node by value (delete the first occurrence of the given value)
// ⿤ Delete a node at a given position (1-based index)

// Input Example:

// Insert 10 at end  
// Insert 20 at end  
// Insert 30 at end  
// Insert 5 at beginning  
// Delete node with value 20  
// Delete node at position 2  
// Print Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertAtNodeEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    insertAtBegining(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    deleteByValue(value) {
        if (this.head === null) {
            console.log("list is empty");
            return;
        }
        if (this.head.next === null) {
            //only one node
            this.head = null;
            this.tail = null;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data == value) {
                if (current.next == this.tail) {
                    this.tail = current;
                    current.next = current.next.next;
                }
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
    deleteAtGivenPosition(position) {
        if (this.head === null || position <= 0) {
            console.log("invalid position or empty list");
            return;
        }


        if (position === 1) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
                return;
            }
        }
        let current = this.head;
        let count = 1;

        while (current !== null && count < position - 1) {
            current = current.next;
            count++;
        }
        if (current === null || current.next === null) {
            console.log("position out of range ");
            return;
        }
        if (current.next === this.tail) {
            this.tail = current;
        }
        current.next = current.next.next;
    }



    printList() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }




}



let list = new LinkedList();
list.insertAtNodeEnd(10);
list.insertAtNodeEnd(20);
list.insertAtBegining(5);
list.printList();    

list.deleteByValue(10);
list.printList();    
list.deleteAtGivenPosition(1);
list.printList();    

//output:
// 5 -> 10 -> 20 -> null
// 5 -> 20 -> null
// position out of range
// 20 -> null