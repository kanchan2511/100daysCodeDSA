//Day-25

// Problem Statement:
// Today’s task is to implement insertion operations in a Singly Linked List.
// You need to write functions for the following:

// Insert at Head – Add a new node at the beginning of the linked list.

// Insert at Tail – Add a new node at the end of the linked list.

// Insert at Position – Add a new node at a given position (index-based).

// 📥 Input / Operations:

// Start with an empty linked list.

// Perform the above insert operations.

// Print the list after each operation.

// 📤 Output:

// The final linked list after all operations.


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
        newNode.next = this.head;
        this.head = newNode;
        console.log(`Insert ${data} at head -> ` + this.printList());
    }
    insertAtTail(data){
        const newNode = new Node(data);
       let current = this.head;
       while(current.next){
        current = current.next;
       }
       current.next = newNode;
       this.tail = newNode;
       console.log(`Insert ${data} at tail -> ` + this.printList());
    }
    insertAtPosition(data,position){
        const newNode = new Node(data);
        if(position == 0){
             newNode.next = this.head;
            this.head = newNode;
             console.log(`Insert ${data} at position ${position + 1} → ` + this.printList());
            return;
        }
        let current = this.head;
        for(let i = 0; current !== null && i<position - 1;i++){
            current = current.next;
        }
        if(current == null){
            console.log('position out of range');
        }
        newNode.next = current.next;
        current.next = newNode;
        if(newNode == null){
            this.tail = newNode;
        }
        console.log(`Insert ${data} at position ${position + 1} → ` + this.printList());
        
    }
    printList(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.data + " " +  '->';
            current = current.next;
        }
        return "List:" + result + " "+ 'null';
    }
}
let list = new LinkedList();
list.insertAtHead(10);
list.insertAtTail(20);
list.insertAtPosition(15,1);


//output:
// Insert 10 at head -> List:10 -> null
// Insert 20 at tail -> List:10 ->20 -> null
// Insert 15 at position 2 → List:10 ->15 ->20 -> null